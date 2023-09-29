import React, { useRef, useEffect } from 'react';
import connectedDots from '@/scripts/connectedDots';
import { useTheme } from 'next-themes';

interface CanvasBaseProps {
    width: number;
    height: number;
}

const CanvasBase =  ({ width, height }: CanvasBaseProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme = 'light' } = useTheme();

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                connectedDots({ctx, canvas, width, height, theme})
            }
        }
    },[width, height, theme]);

    return <canvas ref={canvasRef} width={width} height={height}/>;
};

export default CanvasBase;