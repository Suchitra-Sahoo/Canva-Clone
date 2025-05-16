import { Button } from '@/components/ui/button';
import { useCanvasHook } from '@/context/CanvasContext';
import { FabricImage } from 'fabric';
import { Loader2Icon } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

function UploadImage() {
  const [loading, setLoading] = useState(false);
  const { canvasEditor } = useCanvasHook();
  const { designId } = useParams();

  var ImageKit = require("imagekit");
  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });

  const onFileUpload = async (event) => {
    setLoading(true);
    const file = event.target.files[0];

    try {
      const imageRef = await imagekit.upload({
        file:file,
        fileName: designId + ".png",
        isPublished: true,
      });
      console.log("Uploaded:", imageRef?.url);
      const canvasImageRef=await FabricImage.fromURL(
        imageRef?.url,
        {
          crossOrigin:'anonymous'
        }
      )
      canvasEditor.add(canvasImageRef);
      canvasEditor.renderAll();
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label htmlFor="uploadImage">
        <h2 className="p-2 bg-primary text-white rounded-md cursor-pointer text-center text-sm flex items-center justify-center gap-2">
          {loading ? <Loader2Icon className="animate-spin w-4 h-4" /> : null}
          {loading ? "Uploading..." : "Upload Image"}
        </h2>
      </label>
      <input
        type="file"
        id="uploadImage"
        className="hidden"
        multiple={false}
        onChange={onFileUpload}
      />
    </div>
  );
}

export default UploadImage;
