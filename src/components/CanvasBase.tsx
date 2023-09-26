import React, { useRef, useEffect } from 'react';

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
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(width, height);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(width/2, height/2, height/2, 0, 2 * Math.PI);
                ctx.stroke();
            }
        }
    },[width, height]);

    return <canvas ref={canvasRef} className='bg-transparent' width={width} height={height}/>;
};

export default CanvasBase;