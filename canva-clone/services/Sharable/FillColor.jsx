import React, { useState } from 'react';
import ColorPickerEditor from './ColorPickerEditor';
import { useCanvasHook } from '@/context/CanvasContext';

function FillColor() {
  const [color, setColor] = useState('#000');
  const {canvasEditor} = useCanvasHook();

  const onColorChange = (color) => {
    setColor(color);

    const activeObject = canvasEditor.getActiveObject();
    if (activeObject) {
      activeObject.set({ fill: color });
      canvasEditor.renderAll();
    }
  };

  return (
    <div>
      <ColorPickerEditor onColorChange={onColorChange} />
      <div>value: {color}</div>
    </div>
  );
}

export default FillColor;
