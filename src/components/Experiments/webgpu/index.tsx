import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { append } from 'ramda';

import webGPUGol from './webgpu-gol';

interface CanvasBaseProps {
    width: number;
    height: number;
}

const WebGPUExperimentWrapper =  ({ width, height }: CanvasBaseProps) => {
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
        webGPUGol(canvas, handleError);
      }
    },[width, height, theme]);

    return(
      <canvas ref={canvasRef} width={width} height={height}/>
    )
};

export default WebGPUExperimentWrapper;