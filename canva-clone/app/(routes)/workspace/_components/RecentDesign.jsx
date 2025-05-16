'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import CustomCanvasDialog from './CustomCanvasDialog';
import { useConvex } from 'convex/react';
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';

function RecentDesign() {
  const [designList, setDesignList] = useState([]);
  const { userDetail } = useContext(UserDetailContext);
  const convex = useConvex();
  const router = useRouter();

  useEffect(() => {
    if (userDetail) {
      GetRecentDesigns();
    }
  }, [userDetail]);

  const GetRecentDesigns = async () => {
    try {
      const result = await convex.query(api.designs.GetUserDesigns, {
        uid: userDetail?._id,
      });
      setDesignList(result || []);
    } catch (error) {
      console.error('Failed to fetch recent designs:', error);
    }
  };

  const designsWithPreview = designList.filter((design) => design?.imagePreview);

  const handleOpenDesign = (designId) => {
    router.push(`/editor/${designId}`);
  };

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl">Recent Designs</h2>

      {designsWithPreview.length === 0 ? (
        <div className="mt-5 flex flex-col items-center">
          <Image src="/edittool.png" alt="edittool" width={100} height={100} />
          <p className="text-gray-500 mt-2 text-center mb-5">
            You don't have any exported designs. Create and export one.
          </p>
          <CustomCanvasDialog>
            <Button>+ Create New</Button>
          </CustomCanvasDialog>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
          {designsWithPreview.map((design) => (
            <div
              key={design._id}
              className="bg-secondary rounded-lg p-2 shadow cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={design.imagePreview}
                alt={design.name || 'Design Preview'}
                width={300}
                height={300}
                className="w-full h-[200px] object-contain rounded-lg"
                unoptimized
              />
           
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentDesign;
