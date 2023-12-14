const fragmentShaderCode = /* wgsl */`
  @fragment
  fn main(@location(4) color : vec4<f32>) -> @location(0) vec4<f32> {
    return color;
  }
`

export default fragmentShaderCode