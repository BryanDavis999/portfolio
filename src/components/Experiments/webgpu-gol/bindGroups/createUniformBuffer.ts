const createUniformBuffer = ({device, storageSize}: any) => {  
  const uniformArray = new Float32Array(storageSize);
  const uniformBuffer = device.createBuffer({
    label: "Grid Uniforms",
    size: uniformArray.byteLength,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(uniformBuffer, 0, uniformArray);

  return uniformBuffer;
}

export default createUniformBuffer