import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCanvasHook } from '@/context/CanvasContext';
import axios from 'axios';
import { FabricImage } from 'fabric';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function SearchImages() {
  const [imageList, setImageList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const { canvasEditor } = useCanvasHook();

  useEffect(() => {
    GetImageList('Gradient');
  }, []);

  const GetImageList = async (searchInput) => {
    try {
      const result = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: searchInput,
          page: 1,
          per_page: 20,
        },
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
        },
      });
      setImageList(result?.data?.results);
    } catch (error) {
      if (error.response) {
        console.error('Error Response:', error.response.data);
      } else if (error.request) {
        console.error('No Response Received:', error.request);
      } else {
        console.error('Error Configuring Request:', error.message);
      }
    }
  };

  const addImageToCanvas = async (imageUrl) => {
    const canvasImageRef = await FabricImage.fromURL(imageUrl,
      {
          crossOrigin:'anonymous'
       
      }
    );
    canvasEditor.add(canvasImageRef);
    canvasEditor.renderAll(); // fixed typo
  };

  return (
    <div className='mt-5'>
      <h2 className='font-bold'>Search Images</h2>
      <div className='flex gap-2 items-center my-4'>
        <Input placeholder={'Mountain'} onChange={(e) => setSearchInput(e.target.value)} />
        <Button onClick={() => GetImageList(searchInput)}>
          <SearchIcon />
        </Button>
      </div>
      <div className='mt-3 grid grid-cols-2 gap-2 overflow-auto h-[70vh]'>
        {imageList.map((image, index) => (
          <div
            key={index}
            onClick={() => addImageToCanvas(image?.urls?.regular)} // fixed typo
            className='cursor-pointer'
          >
            <Image
              src={image?.urls?.thumb}
              alt={image?.slug}
              width={300}
              height={300}
              className='w-full h-[80px] rounded-sm object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchImages;
