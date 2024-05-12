const API_URL = import.meta.env.VITE_API_URL;

export default class ImageOpsManager {
  static async applyFaceDetection(image: File) {
    const formData = new FormData();
    formData.append("file", image);

    const response = await fetch(`${API_URL}/detect-faces/`, {
      method: "POST",
      body: formData,
    });

    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  }

  static async applyFaceRecognition(image: File) {
    const formData = new FormData();
    formData.append("file", image);

    const response = await fetch(`${API_URL}/recognize-face/`, {
      method: "POST",
      body: formData,
    });

    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  }
}
