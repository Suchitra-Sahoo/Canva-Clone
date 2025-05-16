import { Button } from '@/components/ui/button'
import { useCanvasHook } from '@/context/CanvasContext'
import { api } from '@/convex/_generated/api'
import { UserButton } from '@stackframe/stack'
import { useMutation } from 'convex/react'
import { Save } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

function DesignHeader({DesignInfo}) {
  const {canvasEditor}=useCanvasHook();
  const SaveDesign=useMutation(api.designs.SaveDesign);
  const {designId}=useParams();
  const onSave=async()=>{
       if(canvasEditor){
        const JsonDesign=canvasEditor.toJSON();
        console.log(JsonDesign);
        const result=await SaveDesign({
          id: designId,
          jsonDesign:JsonDesign
        })
        toast('Saved !')
       }
  }
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


       <div className='flex gap-5 mt-2'>
        <Button onClick={onSave}><Save/> Save</Button>
       <UserButton />
       </div>
    </div>
  )
}

export default DesignHeader