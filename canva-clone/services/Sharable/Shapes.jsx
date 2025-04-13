import React from 'react';
import Image from 'next/image';
import { ShapeList } from '../Options';
import { Circle, Line, Rect, Triangle } from 'fabric';
import { useCanvasHook } from '@/context/CanvasContext';

function Shapes() {
    const { canvasEditor } = useCanvasHook();

    const onShapeSelect = (shape) => {
        const properties = {
            left: 100,
            top: 100,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 1,
        };

        if (!canvasEditor) {
            console.error('CanvasEditor is not initialized');
            return;
        }

        if (shape.name === 'Circle') {
            const circleRef = new Circle({
                radius: 50, // Circle-specific property
                ...properties,
            });
            canvasEditor.add(circleRef);
        } else if (shape.name === 'Square') {
            const squareRef = new Rect({
                width: 100, // Width of the square
                height: 100, // Height matches the width for a square
                ...properties,
            });
            canvasEditor.add(squareRef);
        } else if (shape.name === 'Rectangle') {
            const rectangleRef = new Rect({
                width: 150, // Width of the rectangle
                height: 100, // Height different from the width
                ...properties,
            });
            canvasEditor.add(rectangleRef);
        } else if (shape.name === 'Line') {
            const lineRef = new Line([50, 50, 200, 200], {
                stroke: 'black',
                strokeWidth: 5,
            });
            canvasEditor.add(lineRef);
        } else if (shape.name === 'Triangle') {
            const triangleRef = new Triangle({
                width: 100, // Width of the triangle
                height: 100, // Height of the triangle
                ...properties,
            });
            canvasEditor.add(triangleRef);
        }

        canvasEditor.renderAll();
    };

    return (
        <div className="grid grid-cols-3 gap-3">
            {ShapeList.map((shape, index) => (
                <div
                    key={index}
                    className="p-2 border rounded-xl"
                    onClick={() => onShapeSelect(shape)}
                >
                    <Image
                        src={shape.icon}
                        alt={shape.name}
                        width={100}
                        height={100}
                    />
                </div>
            ))}
        </div>
    );
}

export default Shapes;
