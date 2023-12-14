import { SPRITE_VERTEX_BUFFER_DATA } from "./constants";

const createSpriteVertexBuffer = (device: any) => {
  const spriteVertexBuffer = device.createBuffer({
    size: SPRITE_VERTEX_BUFFER_DATA.byteLength,
    usage: GPUBufferUsage.VERTEX,
    mappedAtCreation: true,
  });
  new Float32Array(spriteVertexBuffer.getMappedRange())
    .set(SPRITE_VERTEX_BUFFER_DATA);
  spriteVertexBuffer.unmap();

  return spriteVertexBuffer
} 

export default createSpriteVertexBuffer