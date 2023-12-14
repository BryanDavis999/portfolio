const createVertexBuffer = (device: any) => {  
  const vertices = new Float32Array([
  //   X,    Y,
    -0.8, -0.8,
    0.8, -0.8,
    0.8,  0.8,

    -0.8, -0.8,
    0.8,  0.8,
    -0.8,  0.8,
  ]);

  const vertexBuffer = device.createBuffer({
    label: "Cell vertices",
    size: vertices.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(vertexBuffer, /*bufferOffset=*/0, vertices);

  const vertexBufferLayout = {
    arrayStride: 8,
    attributes: [{
      format: "float32x2" as GPUVertexFormat,
      offset: 0,
      shaderLocation: 0, // Position in vertex shader
    }],
  };

  return [vertexBuffer, vertexBufferLayout]
}

export default createVertexBuffer