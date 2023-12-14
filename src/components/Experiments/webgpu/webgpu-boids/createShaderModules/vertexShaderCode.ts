const vertexShaderCode = /* wgsl */`
  struct VertexOutput {
    @builtin(position) position : vec4<f32>,
    @location(4) color : vec4<f32>,
  }

  @vertex
  fn main(
    @location(0) boidPosition : vec2<f32>,
    @location(1) boidVelocity : vec2<f32>,
    @location(2) currentVertex : vec2<f32>
  ) -> VertexOutput {
    let angle = -atan2(boidVelocity.x, boidVelocity.y);
    let s = sin(angle);
    let c = cos(angle);

    let rotatedPosition = vec2(
      (currentVertex.x * c) - (currentVertex.y * s),
      (currentVertex.x * s) + (currentVertex.y * c)
    );
    
    var output: VertexOutput;
    output.position = vec4(rotatedPosition + boidPosition, 0.0, 1.0);
    output.color = vec4(
      clamp(abs(s), 0.0, 1.0),
      clamp(abs(c), 0.0, 1.0),
      clamp(abs(c + s), 0.0, 1.0),
      1.0);
    return output;
  }
`

export default vertexShaderCode