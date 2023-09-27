interface demoDesignProps {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
}

const demoDesign = ({ctx, width, height}: demoDesignProps) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width, height);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(width/2, height/2, height/2, 0, 2 * Math.PI);
  ctx.stroke();
}

export default demoDesign