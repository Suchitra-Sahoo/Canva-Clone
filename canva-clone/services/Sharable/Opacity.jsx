import { useCanvasHook } from '@/context/CanvasContext';
import * as Slider from '@radix-ui/react-slider'; // ✅ Fixed import
import React from 'react';

function Opacity() {
    const { canvasEditor } = useCanvasHook();

    const onOpacityChange = (value) => {
        const activeObject = canvasEditor.getActiveObject();
        if (activeObject) {
            activeObject.set({
                opacity: value
            });
            
            canvasEditor.renderAll();
        }
    };

    return (
        <div className='w-full max-w-sm'>
            <h2 className='my-2 text-lg font-medium'>Update Opacity</h2>
            <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                defaultValue={[1]}
                max={1}
                step={0.1}
                onValueChange={(v) => onOpacityChange(v[0])}
            >
                <Slider.Track className="bg-gray-300 relative grow rounded-full h-[3px]">
                    <Slider.Range className="absolute bg-black rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-black rounded-full shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" />
            </Slider.Root>
        </div>
    );
}

export default Opacity;
