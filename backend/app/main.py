from fastapi import FastAPI
from .routers import face_detection, face_recognition
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def fun():
    return {"msg": "init_msg"}


app.include_router(face_detection.router)
app.include_router(face_recognition.router)
