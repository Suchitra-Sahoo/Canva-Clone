'use client';

import React, { useState } from 'react';
import ColorPickerEditor from '../Sharable/ColorPickerEditor';
import { useCanvasHook } from '@/context/CanvasContext';

function BackgroundSetting() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const { canvasEditor } = useCanvasHook();

  /**
   * Handle background color change from the color picker
   * @param {string} color - The selected hex color value
   */
  const onColorChange = (color) => {
    setBgColor(color);
    if (canvasEditor) {
      canvasEditor.set({
        backgroundColor: color,
        backgroundImage: null,
      });
      canvasEditor.renderAll();
    }
  };

  return (
    <div>
      <ColorPickerEditor value={bgColor} onColorChange={onColorChange} />
    </div>
  );
}

export default BackgroundSetting;
