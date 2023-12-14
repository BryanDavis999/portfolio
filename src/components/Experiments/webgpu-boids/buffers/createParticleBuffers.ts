import { NUM_PARTICLES } from "../constants";

type createParticleBufferType = (device: GPUDevice) => [GPUBuffer[], number]

const createParticleBuffers: createParticleBufferType = (device) => {
  // 4 = 2 Float32 numbers for particle positions
  const initialParticleData = new Float32Array(NUM_PARTICLES * 4);

  for (let i = 0; i < NUM_PARTICLES; i++) {
    initialParticleData[i] = 2 * (Math.random() - 0.5);
  }

  const particleBuffers: GPUBuffer[] = new Array(2);

  for (let i = 0; i < 2; i++) {
    particleBuffers[i] = device.createBuffer({
      size: initialParticleData.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
      mappedAtCreation: true,
    });
    new Float32Array(particleBuffers[i].getMappedRange())
      .set(initialParticleData);
    particleBuffers[i].unmap();
  }

  const bufferSize = initialParticleData.byteLength

  return [particleBuffers, bufferSize]
}

export default createParticleBuffers;