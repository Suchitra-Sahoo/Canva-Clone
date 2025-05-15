import { useCanvasHook } from '@/context/CanvasContext';
import { IText } from 'fabric';
import React from 'react'

function TextSettings() {
    const {canvasEditor}=useCanvasHook();
    const onAddTextClick=(type)=>{
          if (canvasEditor)
            {
                if(type=='Heading'){
                    const textRef=new IText('Add Heading',{
                        fontSize:30,
                        fontWeight:'bold',
                        fontFamily:'Arial',
                        fill:'black',
                        left:100,
                        top:100
                    });
                    canvasEditor.add(textRef);
                }else if(type=='SubHeading'){
                    const textRef=new IText('Add Heading',{
                        fontSize:20,
                        fontWeight:'400',
                        fontFamily:'Arial',
                        fill:'black',
                        left:100,
                        top:100
                    });
                    canvasEditor.add(textRef);
                }else{
                    const textRef=new IText('Add Heading',{
                        fontSize:13,
                        fontWeight:'normal',
                        fontFamily:'Arial',
                        fill:'black',
                        left:100,
                        top:100
                    });
                    canvasEditor.add(textRef);
                }
            }
    }
  return (
    <>
    <div className="flex flex-col gap-3">
    <h2 className='font-bold text-2xl p-3 bg-secondary rounded-xl cursor-pointer' onClick={()=>onAddTextClick('Heading')}>Add Heading</h2>
    <h2 className='font-bold text-xl p-3 bg-secondary rounded-xl cursor-pointer'onClick={()=>onAddTextClick('SubHeading')}>Add SubHeading</h2>
    <h2 className=' text-md p-3 bg-secondary rounded-xl cursor-pointer'onClick={()=>onAddTextClick('Para')}>Paragraph</h2>
    </div>
    </>
  )
}

export default TextSettings