'use client'
import React, { useState, useContext } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { UserDetailContext } from '@/context/UserDetailContext'
import { useMutation } from 'convex/react'
import { Loader2Icon } from 'lucide-react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner' // assuming you're using 'sonner' for toast
import { useRouter } from 'next/router'

function CustomCanvasDialog({ children }) {
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [loading, setLoading] = useState(false)

  const { userDetail } = useContext(UserDetailContext)
  const createDesignRecord = useMutation(api.designs.CreateNewDesign)


  const onCreate = async () => {
    toast('Creating design...')
    setLoading(true)

    try {
      const result = await createDesignRecord({
        name: name,
        width: parseInt(width),
        height: parseInt(height),
        uid: userDetail?._id,
      })
      console.log('Design created:', result)
      toast.success('Design created successfully!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to create design')
    } finally {
      setLoading(false)
    }
   
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Custom Canvas</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className='text-sm'>Provide Canvas Width and Height</h2>
              <div className='mt-5'>
                <label>Design Name</label>
                <Input
                  placeholder="Design Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='mt-1'
                />
                <div className='mt-4 flex gap-5 w-full'>
                  <div className='w-full'>
                    <label>Width</label>
                    <Input
                      placeholder="500"
                      type='number'
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className='mt-1'
                    />
                  </div>
                  <div className='w-full'>
                    <label>Height</label>
                    <Input
                      placeholder="500"
                      type='number'
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className='mt-1'
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-end mt-6'>
                <Button
                  className='w-full'
                  onClick={onCreate}
                  disabled={loading || !name || !width || !height}
                >
                  {loading ? <Loader2Icon className='animate-spin' /> : 'Create'}
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CustomCanvasDialog
