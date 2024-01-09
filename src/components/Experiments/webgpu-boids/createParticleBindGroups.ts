const createParticleBindGroups = ({
  device,
  computePipeline,
  buffers: {
    simParamBuffer,
    particleBuffers,
    particleBufferSize
  }
}: any) => {
  const particleBindGroups: GPUBindGroup[] = new Array(2);

  for (let i = 0; i < 2; ++i) {
    particleBindGroups[i] = device.createBindGroup({
      label: `Bind Group ${i}`,
      layout: computePipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: {
            buffer: simParamBuffer,
          },
        },
        {
          binding: 1,
          resource: {
            buffer: particleBuffers[i],
            offset: 0,
            size: particleBufferSize,
          },
        },
        {
          binding: 2,
          resource: {
            buffer: particleBuffers[(i + 1) % 2],
            offset: 0,
            size: particleBufferSize,
          },
        }
      ],
    });
  }

  return particleBindGroups
}

export default createParticleBindGroups;