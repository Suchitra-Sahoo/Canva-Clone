import { useCanvasHook } from '@/context/CanvasContext'
import * as Slider from '@radix-ui/react-slider'
import React from 'react'

function BorderWidth() {
    const { canvasEditor } = useCanvasHook();

    const onWidthChange = (value) => {
        const activeObject = canvasEditor.getActiveObject();
        if (activeObject) {
            activeObject.set({
                strokeWidth: value
            });
            canvasEditor.add(activeObject);
            canvasEditor.renderAll();
        }
    };

    return (
        <div className='w-full max-w-sm'>
            <h2 className='my-2 text-lg font-medium'>Border Width</h2>
            <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                defaultValue={[33]}
                max={100}
                step={1}
                onValueChange={(v) => onWidthChange(v[0])}
            >
                <Slider.Track className="bg-gray-300 relative grow rounded-full h-[3px]">
                    <Slider.Range className="absolute bg-black rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-black rounded-full shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" />
            </Slider.Root>
        </div>
    );
}

export default BorderWidth;
