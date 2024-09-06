import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [ mousePosition, setMousePosition ] = useState({ 
        mouseX: 0, 
        mouseY: 0,
    });
    
    
    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
        setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
      };

      window.addEventListener('mousemove', updateMousePosition);
      
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
    
    return mousePosition;
  };
  export default useMousePosition;