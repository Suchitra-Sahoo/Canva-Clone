'use client'
import { UserDetailContext } from '@/context/UserDetailContext'
import { canvasSizeOptions } from '@/services/Options'
import { api } from '@/convex/_generated/api' // Assuming this is your API import
import { useMutation } from 'convex/react'
import Image from 'next/image'
import React, { useContext } from 'react'
import { toast } from 'sonner'

function IntroOptions() {
  const createDesignRecord = useMutation(api.designs.CreateNewDesign)
  const { userDetail } = useContext(UserDetailContext)

  const OnCanvasOptionSelect = async (option) => {
    toast('Loading...')
    const result = await createDesignRecord({
      name: option.name,
      width: option.width,
      height: option.height,
      uid: userDetail?._id,
    })
    console.log(result)
  }

  return (
    <div>
      <div className='relative'>
        <Image
          src={'/banner-home.jpg'}
          alt='banner'
          width={1000}
          height={300}
          className='w-full h-[200px] rounded-2xl object-cover'
        />
        <h2 className='text-2xl absolute bottom-5 left-10 text-white'>
          Workspace
        </h2>
      </div>

      <div className='flex flex-wrap gap-6 mt-4 justify-center'>
        {canvasSizeOptions.map((option, index) => {
          const isYoutube = option.name.toLowerCase().includes('youtube')
          const iconSize = isYoutube ? 100 : 60

          return (
            <div
              key={index}
              className='flex flex-col items-center'
              onClick={() => OnCanvasOptionSelect(option)}
            >
              <Image
                src={option.icon}
                alt={option.name}
                width={iconSize}
                height={iconSize}
                className='hover:scale-105 transition-all cursor-pointer'
              />
              <h2 className='text-xs mt-1 font-medium cursor-pointer'>
                {option.name}
              </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IntroOptions
