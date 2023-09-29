interface pointProps {
  x: number;
  y: number;
}

interface distanceProps {
  p1: pointProps,
  p2: pointProps
}

export const distance = ({p1: {x: x1, y: y1}, p2: {x: x2, y: y2}}: distanceProps) => {
  const dx = x2 - x1
  const dy = y2 - y1
  return Math.sqrt( dx**2 + dy**2 );
}

export const axisReflection = (dist: number, threshold: number, velocity: number) => {
  if(dist < 0) return Math.abs(velocity)
  if(dist > threshold) return -Math.abs(velocity)
  return velocity
}