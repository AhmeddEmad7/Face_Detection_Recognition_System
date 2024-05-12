from fastapi import UploadFile, File, APIRouter, UploadFile, HTTPException
from fastapi.responses import FileResponse
from ..utils import verify_recognition
import cv2

router = APIRouter()


@router.post("/recognize-face/")
async def upload_image(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Uploaded file is not an image.")

    # Save the uploaded image to a temporary location
    temp_file_path = "temp/temp.jpg"
    print("saved")
    try:
        with open(temp_file_path, "wb") as buffer:
            buffer.write(await file.read())

        image = cv2.imread(temp_file_path)
        _ = verify_recognition(image)

        return FileResponse("recognized/result_image.jpg")

    except Exception as e:
        print("error:", e)
        raise HTTPException(status_code=500, detail="Internal server error") from e
