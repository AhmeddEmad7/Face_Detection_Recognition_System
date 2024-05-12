# Find Me

## Description

Experimental project that demonstrates face detection and recognition using the studied computer vision algorithms.

![Home Page](screenshots/screen1.jpeg)

### Face Detection

![Face Detection](screenshots/screen3.jpeg)

### Face Recognition

![Face Recognition](screenshots/screen2.jpeg)

## Installation

1. Clone the repository

```bash
git clone <repository>
```

2. Navigate to the backend directory and install the dependencies

```bash
cd backend
pip install -r requirements.txt
```

3. Run the backend

```bash
fastapi dev app/main.py
```

4. Navigate to the frontend directory and install the dependencies

```bash
cd ../frontend
npm install
```

5. Add a new file to the frontend directory called `.env` and add the following environment variable

```bash
VITE_API_URL=http://127.0.0.1:8000
```

6. Run the frontend

```bash
npm run dev
```

## Technologies

1. Python
2. FastAPI
3. OpenCV
4. TypeScript
5. React
6. Vite
7. Tailwind CSS
