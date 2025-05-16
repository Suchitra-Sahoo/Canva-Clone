import React from 'react'

function WorkspaceHeader() {
  return (
    <div className='p-2 px-5 flex justify-between items-center shadow-sm'>
        <img src={'/Logo.png'} alt='logo' width={100} height={100} className='w-[120px] h-[80px]' />
    </div>
  )
}

export default WorkspaceHeader