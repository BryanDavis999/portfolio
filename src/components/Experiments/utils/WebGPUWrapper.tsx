import React, { useRef, useEffect, useState } from 'react';
import { append } from 'ramda';
import { Pane } from 'tweakpane';

type webGpuCodeType = (canvas: HTMLCanvasElement, handleError: (error: string) => void, pane: Pane) => Promise<void>
interface webGpuWrapperType {webGpuCode: webGpuCodeType}

const fitCanvasToParent = (canvas: HTMLCanvasElement) => {
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

const WebGPUWrapper =  ({webGpuCode}: webGpuWrapperType) => {
    const [errors, setErrors] = useState<Array<string>>([]);

    const handleError = (error: string) => {
      console.log(error);
      setErrors(prevErrors => append(error, prevErrors))
    }

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const controlPanelContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const canvas = canvasRef.current;
      const controlPanelContainer = controlPanelContainerRef.current
      if (canvas && controlPanelContainer) {
        const pane = new Pane({ expanded: false, title: "Simulation Controls", container: controlPanelContainer });
        webGpuCode(canvas, handleError, pane);
        fitCanvasToParent(canvas)
      }
    },[]);

    return(
      <div className='w-full md:w-1/2 md:flex md:items-center md:justify-center bg-gray-600 dark:bg-gray-800'>
        <div className='absolute mt-5 ml-5 md:top-0 md:left-0' ref={controlPanelContainerRef}/>
        <div className='grow-0 aspect-square w-full md:max-w-2xl bg-red-500 flex items-center justify-center'>
          <canvas ref={canvasRef} />
        </div>
      </div>
    )
};

export default WebGPUWrapper;