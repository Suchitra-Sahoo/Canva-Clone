import { Button } from '@/components/ui/button';
import { useCanvasHook } from '@/context/CanvasContext';
import ImageKit from 'imagekit';
import { ImageUp, Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FabricImage } from 'fabric';

function CustomImageUpload({ selectedAi }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { designId } = useParams();
  const { canvasEditor } = useCanvasHook();

  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });

  const onImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    try {
      const imageRef = await imagekit.upload({
        file: file,
        fileName: designId + '.png',
        isPublished: true,
      });
      console.log('Uploaded:', imageRef?.url);
      setImage(imageRef?.url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const onAddToCanvas = async () => {
    try {
      const canvasImageRef = await FabricImage.fromURL(
        image,
        {
          crossOrigin:'anonymous'
        }
      );
      canvasEditor.add(canvasImageRef);
      setImage(null);
    } catch (error) {
      console.error('Failed to add image to canvas:', error);
    }
  };

  useEffect(() => {
    if (selectedAi && image) {
      let imageUrl = image;
      if (image.includes('?tr=')) {
        imageUrl = imageUrl + ',' + selectedAi.command;
      } else {
        imageUrl = imageUrl + '?tr=' + selectedAi.command;
      }
      console.log('Transformed URL:', imageUrl);
      setImage(imageUrl);
    }
  }, [selectedAi]);

  return (
    <div>
      <label
        htmlFor="uploadImage"
        className="bg-secondary p-4 flex flex-col items-center justify-center rounded-xl h-[150px] m-4 cursor-pointer"
      >
        {!image ? (
          <>
            <ImageUp className="mb-2" />
            <h2 className="text-xs">Upload Image</h2>
          </>
        ) : (
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </label>

      <input
        type="file"
        id="uploadImage"
        accept="image/*"
        onChange={onImageUpload}
        className="hidden"
      />

      {image && (
        <Button
          className="my-2 w-full mb-5"
          onClick={onAddToCanvas}
          disabled={loading}
        >
          {loading && <Loader className="animate-spin mr-2" />}Add to Canvas
        </Button>
      )}
    </div>
  );
}

export default CustomImageUpload;
