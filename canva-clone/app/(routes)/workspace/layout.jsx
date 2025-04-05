import React from 'react'
import WorkspaceHeader from './_components/WorkspaceHeader'
import Sidebar from './_components/Sidebar'
import { Toaster } from 'sonner'


function WorkspaceLayout({children}) {
  return (
    <div>
        <WorkspaceHeader />
        <div className='flex gap-5'>
            <Sidebar />
            {children}
            <Toaster />
        </div>
    </div>
  )
}

export default WorkspaceLayout