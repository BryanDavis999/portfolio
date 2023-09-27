import React, { useRef, useEffect } from 'react';
import demoDesign from '@/scripts/demoDesign';

interface CanvasBaseProps {
    width: number;
    height: number;
}

const CanvasBase =  ({ width, height }: CanvasBaseProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                demoDesign({ctx, width, height})
            }
        }
    },[width, height]);

    return <canvas ref={canvasRef} className='bg-transparent' width={width} height={height}/>;
};

export default CanvasBase;