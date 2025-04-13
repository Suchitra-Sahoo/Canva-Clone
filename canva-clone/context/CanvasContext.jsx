// '@/context/CanvasContext.js'
import { createContext, useContext } from 'react';

// Create CanvasContext
const CanvasContext = createContext(null);

// Custom Hook to use CanvasContext
const useCanvasHook = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvasHook must be used within a CanvasContext.Provider');
  }
  return context;
};

export { CanvasContext, useCanvasHook };
