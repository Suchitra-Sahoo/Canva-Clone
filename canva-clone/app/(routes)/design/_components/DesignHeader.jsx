import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function DesignHeader({DesignInfo}) {
  return (
    <div className='p-3 flex justify-between
    bg-gradient-to-r from-sky-500 via-blue-400 to-purple-600'>
       <Image src={'/logo.png'} alt='logo' width={100} height={60} />
       <input
  placeholder='Design Name'
  className='text-white border-none outline-none bg-transparent'
  value={DesignInfo?.name ?? ''}
  readOnly
/>


       <UserButton />
    </div>
  )
}

export default DesignHeader