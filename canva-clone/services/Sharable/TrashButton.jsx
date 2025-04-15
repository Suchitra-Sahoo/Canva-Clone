import React from "react";
import { Trash } from "lucide-react";
import { useCanvasHook } from "@/context/CanvasContext";

function TrashButton() {
  const { canvasEditor } = useCanvasHook();

  const onDelete = () => {
    if (!canvasEditor) return;
    const activeObject = canvasEditor.getActiveObject();
    if (activeObject) {
      canvasEditor.remove(activeObject);
      canvasEditor.renderAll();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <h2 className="text-sm text-red-600 font-medium">Confirm Delete</h2>
      <Trash
        onClick={onDelete}
        className="hover:scale-105 transition-all cursor-pointer text-red-600"
        title="Delete selected object"
      />
    </div>
  );
}

export default TrashButton;
