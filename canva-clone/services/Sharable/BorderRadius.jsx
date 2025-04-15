import React from 'react'
import * as Slider from '@radix-ui/react-slider'; 
import { useCanvasHook } from '@/context/CanvasContext';

function BorderRadius() {
    const { canvasEditor } = useCanvasHook();

    const onRadiusChange = (value) => {
        const activeObject = canvasEditor.getActiveObject();
        if (activeObject) {
            activeObject.set({
                rx: value,
                ry:value
            });
            
            canvasEditor.renderAll();
        }
    };

    return (
        <div className='w-full max-w-sm'>
            <h2 className='my-2 text-lg font-medium'>Border Radius</h2>
            <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                defaultValue={[0]}
                max={100}
                step={1}
                onValueChange={(v) => onRadiusChange(v[0])}
            >
                <Slider.Track className="bg-gray-300 relative grow rounded-full h-[3px]">
                    <Slider.Range className="absolute bg-black rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-black rounded-full shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" />
            </Slider.Root>
        </div>
    );
}

export default BorderRadius