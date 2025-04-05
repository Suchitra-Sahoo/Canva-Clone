"use client"; 

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import CustomCanvasDialog from './CustomCanvasDialog';

function RecentDesign() {
  const [designList, setDesignList] = useState([]);

  return (
    <div className='mt-7'>
      <h2 className='font-bold text-2xl'>Recent Designs</h2>

      {designList.length === 0 ? (
        <div className='mt-5 flex flex-col items-center '>
          <Image src={'/edittool.png'} alt='edittool' width={100} height={100} />
          <p className='text-gray-500 mt-2 text-center mb-5'>You don't have any design created. Create new one.</p>
          <CustomCanvasDialog>
          <Button>+ Create New</Button>
          </CustomCanvasDialog>
        </div>
      ) : null}
    </div>
  );
}

export default RecentDesign;
