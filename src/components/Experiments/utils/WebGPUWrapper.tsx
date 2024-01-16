import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { append } from 'ramda';

import useWindowDimensions from '@/hooks/useWindowDimensions';

type webGpuCodeType = (canvas: HTMLCanvasElement, handleError: (error: string) => void) => Promise<void>
interface webGpuWrapperType {webGpuCode: webGpuCodeType}

const WebGPUWrapper =  ({webGpuCode}: webGpuWrapperType) => {
    const { height, width } = useWindowDimensions();
    const [errors, setErrors] = useState<Array<string>>([]);

    const handleError = (error: string) => {
      console.log(error);
      setErrors(prevErrors => append(error, prevErrors))
    }

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme = 'light' } = useTheme();

    useEffect(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        webGpuCode(canvas, handleError);
      }
    },[]);

    const size = width < height ? width : height
    // TODO: Create a more robust solution

    return(
      <canvas ref={canvasRef} width={size} height={size}/>
    )
};

export default WebGPUWrapper;