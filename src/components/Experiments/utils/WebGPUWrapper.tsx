import React, { useRef, useEffect, useState } from 'react';
import { append } from 'ramda';

type webGpuCodeType = (canvas: HTMLCanvasElement, handleError: (error: string) => void) => Promise<void>
interface webGpuWrapperType {webGpuCode: webGpuCodeType}

const WebGPUWrapper =  ({webGpuCode}: webGpuWrapperType) => {
    const [errors, setErrors] = useState<Array<string>>([]);

    const handleError = (error: string) => {
      console.log(error);
      setErrors(prevErrors => append(error, prevErrors))
    }

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        webGpuCode(canvas, handleError);
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    },[]);

    return(
      <canvas ref={canvasRef} />
    )
};

export default WebGPUWrapper;