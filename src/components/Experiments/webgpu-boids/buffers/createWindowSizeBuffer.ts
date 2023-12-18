const createWindowSizeBuffer = ({device, width, height}: any) => {  
  const windowDimensions = new Float32Array([width, height]);
  const windowSizeBuffer = device.createBuffer({
    label: "Window Size Uniform Buffer",
    size: windowDimensions.byteLength,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(windowSizeBuffer, 0, windowDimensions);
  return windowSizeBuffer;
}

export default createWindowSizeBuffer