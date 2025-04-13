// '@/components/CanvasEditor.jsx'
import { Canvas } from 'fabric';
import React, { useEffect, useRef, useState } from 'react';
import { useCanvasHook } from '@/context/CanvasContext';

function CanvasEditor({ DesignInfo }) {
  const canvasRef = useRef(); // Reference to the <canvas> element
  const [canvas, setCanvas] = useState(null); // Local canvas state
  const { setCanvasEditor } = useCanvasHook(); // Access global context setter

  // Initialize Fabric.js canvas when component mounts
  useEffect(() => {
    if (!canvasRef.current || !DesignInfo) return;

    const scaleFactor = window.devicePixelRatio || 1;

    const initCanvas = new Canvas(canvasRef.current, {
      backgroundColor: '#fff',
      preserveObjectStacking: true,
    });

    initCanvas.setDimensions(
      {
        width: DesignInfo.width / 2,
        height: DesignInfo.height / 2,
      },
      { backstoreOnly: false }
    );

    initCanvas.setZoom(1 / scaleFactor);
    initCanvas.renderAll();

    // Store canvas in local state and global context
    setCanvas(initCanvas);
    setCanvasEditor(initCanvas);

    // Cleanup on unmount
    return () => {
      initCanvas.dispose();
    };
  }, [DesignInfo, setCanvasEditor]);

  // Listen for delete/backspace key to remove active object
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.key === 'Delete' || event.key === 'Backspace') && canvas) {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
          canvas.renderAll();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [canvas]);

  return (
    <div className="bg-secondary w-full h-screen flex items-center justify-center flex-col">
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
}

export default CanvasEditor;
