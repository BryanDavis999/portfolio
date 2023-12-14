const fragmentShaderCode = /* wgsl */`
  struct Input {
    @location(0) cell: vec2f,
  };

  @group(0) @binding(0) var<uniform> grid: vec2f;

  @fragment
  fn main(input: Input) -> @location(0) vec4f {
    let cell_position = input.cell / grid;
    let blue_channel = 1 - (cell_position.x + cell_position.y)/2;
    return vec4f(cell_position, blue_channel, 1);
  }
`

export default fragmentShaderCode