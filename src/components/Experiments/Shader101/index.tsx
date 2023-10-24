import React, { useRef, useEffect } from 'react';
// import connectedDots from '@/scripts/connectedDots';
import { useTheme } from 'next-themes';

interface CanvasBaseProps {
    width: number;
    height: number;
}

const Shader101 =  ({ width, height }: CanvasBaseProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme = 'light' } = useTheme();

    const main = async (canvas: any) => { //fix this
      if (!navigator.gpu) {
        throw new Error("WebGPU not supported on this browser.");
      }

      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        throw new Error("No appropriate GPUAdapter found.");
      }

      const device = await adapter.requestDevice();

      const context = canvas.getContext("webgpu");
      const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
      context.configure({
        device: device,
        format: canvasFormat,
      });

      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [{
          view: context.getCurrentTexture().createView(),
          loadOp: "clear",
          clearValue: { r: 0, g: 0, b: 0.4, a: 1 }, // New line
          storeOp: "store",
        }],
      });

      pass.end();

      const commandBuffer = encoder.finish();
      device.queue.submit([commandBuffer]);
      device.queue.submit([encoder.finish()]);

    }

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            main(canvas);
            
            // const ctx = canvas.getContext('2d');
            // if (ctx) {
            //     connectedDots({ctx, canvas, width, height, theme})
            // }
        }
    },[width, height, theme]);

    return(
      <canvas ref={canvasRef} width={width} height={height}/>
    )
};

export default Shader101;