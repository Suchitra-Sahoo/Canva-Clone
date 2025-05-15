import React from 'react';
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from 'lucide-react';
import { useCanvasHook } from '@/context/CanvasContext';

function FontStyles() {
  const { canvasEditor } = useCanvasHook();

  const onSettingClick = (type) => {
    const activeObject = canvasEditor?.getActiveObject();
    if (!activeObject) return;

    if (type === 'bold') {
      const currentWeight = activeObject.fontWeight || 'normal';
      activeObject.set({
        fontWeight: currentWeight === 'bold' ? 'normal' : 'bold',
      });
    }

    if (type === 'italic') {
      const currentStyle = activeObject.fontStyle || 'normal';
      activeObject.set({
        fontStyle: currentStyle === 'italic' ? 'normal' : 'italic',
      });
    }

    if (type === 'underline') {
      const currentUnderline = activeObject.underline || false;
      activeObject.set({
        underline: !currentUnderline,
      });
    }

    canvasEditor.requestRenderAll(); // To reflect the changes
  };

  return (
    <div className="flex gap-2">
      <Toggle onClick={() => onSettingClick('bold')} aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle onClick={() => onSettingClick('italic')} aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle onClick={() => onSettingClick('underline')} aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
}

export default FontStyles;
