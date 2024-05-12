import numpy as np
import os
import joblib
import cv2
from sklearn.metrics import accuracy_score
from sklearn.svm import SVC
import matplotlib.pyplot as plt

train_images = np.load('training_data/train_images.npy')
train_labels = np.load('training_data/train_labels.npy')

test_images = np.load('testing_data/test_images.npy')
test_labels = np.load('testing_data/test_labels.npy')

mean_image = np.load('PCA_data/mean_image.npy')
eigenfaces = np.load('PCA_data/eigenfaces.npy')

clf = joblib.load('ML_model/classifier.pkl')

predictions = np.load('ML_model/predictions.npy')
probabilities = np.load('ML_model/probabilities.npy')

print("Loaded training data:", train_images.shape)
print("Loaded train labels:", train_labels.shape)

print("Loaded test data:", test_images.shape)
print("Loaded test labels:", test_labels.shape)

print("Shape of eigenfaces:", eigenfaces.shape)


def detect_faces(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) if len(image.shape) == 3 else image
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    return faces
    

def apply_face_detection(image):
    faces = detect_faces(image)

    for x, y, w, h in faces:
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)

    cv2.imwrite("detection_data/detected_faces.jpg", image)
    return image


def project_on_eigenfaces(data, eigenfaces):
    weights = np.dot(data.T, eigenfaces)
    return weights


def recognize_face(classifier, image, mean_image, eigenfaces):
    test_image = image.flatten()
    test_image_centered = test_image.reshape(-1, 1) - mean_image
    weight_vec = project_on_eigenfaces(test_image_centered, eigenfaces)
    prediction = classifier.predict_proba(weight_vec)
    return np.argmax(prediction) + 1, np.max(prediction)


def verify_recognition(image, classifier=clf, mean_image=mean_image, eigenfaces=eigenfaces):
    MIN_MATCHING_THRESHOLD = 0.2
    result_image = image.copy()

    gray_img = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) if len(image.shape) == 3 and image.shape[2] == 3 else image
    gray_img = cv2.resize(gray_img, (92, 112))

    prediction, probability = recognize_face(classifier, gray_img, mean_image, eigenfaces)

    face = detect_faces(image)

    if probability > MIN_MATCHING_THRESHOLD:
        color = (0, 255, 0)  # Green color for recognized face
        text = f"PERSON {prediction}"
        print("Person recgonized:", prediction)
        print("Probability of recognized:", probability)
    else:
        color = (0, 0, 255)  # Red color for unrecognized face
        text = "UNRECOGNIZED"
        print("Person unrecgonized")
        print("Probability of unrecognized:", probability)

    for (x, y, w, h) in face:
        text_size = 0.3
        text_offset = 2
        (text_width, text_height), _ = cv2.getTextSize(text, cv2.FONT_HERSHEY_SIMPLEX, text_size, 1)
        cv2.rectangle(result_image, (x, y - text_height - text_offset), (x + text_width, y - text_offset), color, 1)  # Thin red rectangle for unrecognized faces
        cv2.putText(result_image, text, (x, y - text_offset), cv2.QT_FONT_NORMAL, text_size, (255, 255, 255), 1)  # White text
        cv2.rectangle(result_image, (x, y), (x + w, y + h), color, 1)  # Thin rectangle around the face

    cv2.imwrite("recognized/result_image.jpg", result_image)
    return result_image

