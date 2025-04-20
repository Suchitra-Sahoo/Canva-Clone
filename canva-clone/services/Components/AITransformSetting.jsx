import Image from 'next/image'
import React, { useState } from 'react'
import { AITransformationSettings } from '../Options'
import CustomImageUpload from '../Sharable/CustomImageUpload'

function AITransformSetting() {
  const[selectedAi, setSelectedAi]=useState();
  return (
    <>
     <CustomImageUpload selectedAi={selectedAi}/>
    <div className='grid grid-cols-2 gap-3'>
      {AITransformationSettings.map((option, index) => (
        <div key={index} onClick={()=>setSelectedAi(option)}>
          <Image
            src={option.image}
            alt={option.name}
            width={500}
            height={500}
            className='w-full h-[70px] object-cover rounded-xl'
          />
          <h2 className='text-sm text-center'>{option.name}</h2>
        </div>
      ))}
    </div>
    </>
  )
}

export default AITransformSetting
