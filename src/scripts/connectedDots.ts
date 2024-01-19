import {distance, axisReflection} from "./utils";

interface connectedDotsProps {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  theme: string;
}

interface pointProps {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const connectedDots = ({ctx, canvas, width, height, theme}: connectedDotsProps) => {
  // Constants
  const FPS = 60
  const area = height * width
  const starCount = area / 10000 // 1 star for every 10,000 pixels
  const distanceThreshold = 150
  const globalColor = theme == 'light' ? '#f59e0b' : '#075985'

  const speed = 40
  const getRandomSpeed = () => (Math.floor(Math.random() * speed) - (speed / 2)) / FPS

  // Universal context operations for the dots
  ctx.globalCompositeOperation = "source-over";
  ctx.lineWidth = 0.5;

  // TODO: 'var' is anti-pattern. Refactor with state
  let points: Array<pointProps> = Array.from({length: starCount}, _ => ({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      vx: getRandomSpeed(),
      vy: getRandomSpeed(),
      radius: Math.random() * 2 + 2,
  }))

  // Mouse listener
  let mouse = {x: 0, y: 0}
  canvas.addEventListener(
    'mousemove',
    ({clientX: mx, clientY: my}) => mouse = {x: mx, y: my}
  )

  // Line Linker Function
  const linkIfClose = ({x1, x2, y1, y2}: Record<string, number>) => {
    ctx.moveTo(x1, y1);
    const pointProximity = distance({p1: {x: x1, y: y1}, p2: {x: x2, y: y2}})
    if(pointProximity < distanceThreshold) ctx.lineTo(x2, y2);
  }

  // Main runtime loop
  const drawConnectedPoints = () => {
    ctx.fillStyle = globalColor
    ctx.strokeStyle = globalColor;
    ctx.clearRect(0,0, width, height);

    points.forEach(({x, y, radius}) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    })
  
    points.forEach(({x: x1, y: y1}) => {
      points.forEach(({x: x2, y: y2}) => linkIfClose({x1, x2, y1, y2}))
      linkIfClose({x1, y1, x2: mouse.x, y2: mouse.y})
    })

    ctx.stroke();
  }

  // Velocity Updates
  const updatePointVelocities = () => {
    points = points.map(({x, y, vx, vy, radius}: pointProps) => ({
      x: x + vx,
      y: y + vy,
      vx: axisReflection(x, width, vx),
      vy: axisReflection(y, height, vy),
      radius
    }))
  }

  // TODO: Check if recursion is best way to progress animation in React
  const tick = () => {
    drawConnectedPoints();
    updatePointVelocities();
    requestAnimationFrame(tick);
  }
  tick();

}

export default connectedDots