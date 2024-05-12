import ImageDropZone from "@/components/common/dropzone/image-dropzone";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ImageOpsManager from "@/managers/image-ops-manager";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_layout/face-detection")({
  component: FaceDetectionPage,
});

function FaceDetectionPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loadedImage, setLoadedImage] = useState<string>(
    "https://via.placeholder.com/500"
  );
  const [resultImage, setResultImage] = useState<string>(
    "https://via.placeholder.com/500"
  );

  const onImageDrop = (files: File[]) => {
    setImageFile(files[0]);
    // convert image to base64
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setLoadedImage(reader.result as string);
    };
  };

  const onImageClear = () => {
    setImageFile(null);
    setLoadedImage("https://via.placeholder.com/500");
    setResultImage("https://via.placeholder.com/500");
  };

  const onApplyFaceDetection = async () => {
    if (!imageFile) return;
    const data = await ImageOpsManager.applyFaceDetection(imageFile);
    setResultImage(data as string);
  };

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Face Detection</h2>
          <p className="text-muted-foreground">
            Detect faces in images using AI and Computer Vision
          </p>
        </div>
        {imageFile && (
          <div className="flex flex-col gap-2 items-center justify-center">
            <Button onClick={onApplyFaceDetection} className="w-[160px]">
              Apply Detection
            </Button>
            <Button
              onClick={onImageClear}
              className="w-[160px]"
              variant="secondary"
            >
              Clear Image
            </Button>
          </div>
        )}
      </div>
      {!imageFile && <ImageDropZone onDrop={onImageDrop} />}
      {imageFile && (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-4">
          <div className="flex flex-col gap-2">
            <Label>Original Image</Label>

            <div className="border rounded-md">
              <img
                src={loadedImage}
                alt="placeholder"
                className="h-full w-full object-fill object-center aspect-square"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Face Detection Result</Label>
            <div className="border rounded-md">
              <img
                src={resultImage}
                alt="placeholder"
                className="h-full w-full object-fill object-center aspect-square"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
