import React, { useRef, useEffect } from 'react';
import connectedDots from '@/scripts/connectedDots';
import { useTheme } from 'next-themes';

const ConnectedDots =  () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme = 'dark' } = useTheme();

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                connectedDots({
                    ctx,
                    canvas,
                    width: canvas.width,
                    height: canvas.height,
                    theme
                })
            }
        }
    },[theme]);

    return(
        <div className='absolute top-0 left-0 w-screen h-[100dvh] max-h-screen bg-slate-300 dark:bg-gray-950 -z-40'>
            <canvas ref={canvasRef} />
        </div>
    )
};

export default ConnectedDots;