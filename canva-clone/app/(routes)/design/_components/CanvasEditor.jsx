// '@/components/CanvasEditor.js'
import { Canvas } from 'fabric';
import React, { useEffect, useRef, useState } from 'react';
import { useCanvasHook } from '@/context/CanvasContext';

function CanvasEditor({ DesignInfo }) {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState(null);
  const { setCanvasEditor } = useCanvasHook(); // Access context

  useEffect(() => {
    if (!canvasRef.current || !DesignInfo) return;
  
    const scaleFactor = window.devicePixelRatio || 1;
  
    const initCanvas = new Canvas(canvasRef.current, {
      backgroundColor: '#fff',
    });
  
    initCanvas.setDimensions(
      {
        width: DesignInfo.width / 2,
        height: DesignInfo.height / 2,
      },
      { backstoreOnly: false }
    );
  
    // Apply zoom
    initCanvas.setZoom(1 / scaleFactor);
    initCanvas.renderAll();
  
    // Set the canvas instance
    setCanvas(initCanvas);
    setCanvasEditor(initCanvas);
  
    // Cleanup
    return () => {
      initCanvas.dispose();
    };
  }, [DesignInfo, setCanvasEditor]);
  

  return (
    <div className="bg-secondary w-full h-screen flex items-center justify-center flex-col">
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
}

export default CanvasEditor;
