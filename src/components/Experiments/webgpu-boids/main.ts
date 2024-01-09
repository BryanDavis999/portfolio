import { getDevice, getContext, getClearScreenPass } from "./setupUtils";
import { createSimParamsBuffer, createParticleBuffers, createSpriteVertexBuffer } from "./buffers/index";
import { NUM_PARTICLES, WORKGROUP_SIZE } from "./constants";
import { createComputePipeline, createRenderPipeline } from "./pipelines/index";
import createParticleBindGroups from "./createParticleBindGroups";
import { Pane } from "tweakpane";

const webGpuBoids = async (canvas: HTMLCanvasElement, handleError: (error: string) => void) => {
  const device = await getDevice(handleError)
  if(!device) return

  const context = await getContext(canvas, device, handleError)
  if(!context) return

  const canvasFormat = navigator.gpu.getPreferredCanvasFormat();

  const pane = new Pane();

  const simParamBuffer = createSimParamsBuffer({device, pane})
  const spriteVertexBuffer = createSpriteVertexBuffer(device)
  const [particleBuffers, particleBufferSize] = createParticleBuffers(device)

  const renderPipeline = createRenderPipeline({device, canvasFormat})
  const computePipeline = createComputePipeline(device)

  const particleBindGroups = createParticleBindGroups({
    device,
    computePipeline,
    buffers: {
      simParamBuffer,
      particleBuffers,
      particleBufferSize
    }
  })

  const renderPassDescriptor = getClearScreenPass(context)

  let t = 0;

  const computePass = (commandEncoder: GPUCommandEncoder) => {
    const passEncoder = commandEncoder.beginComputePass();
    passEncoder.setPipeline(computePipeline);
    passEncoder.setBindGroup(0, particleBindGroups[t % 2]);
    passEncoder.dispatchWorkgroups(Math.ceil(NUM_PARTICLES / WORKGROUP_SIZE));
    passEncoder.end();
  }

  const renderPass = (commandEncoder: GPUCommandEncoder) => {
    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(renderPipeline);
    passEncoder.setVertexBuffer(0, particleBuffers[t % 2]);
    passEncoder.setVertexBuffer(1, spriteVertexBuffer);
    passEncoder.draw(3, NUM_PARTICLES, 0, 0);
    passEncoder.end();
  }

  const frame = () => {
    const currentContextTexture = context.getCurrentTexture().createView();
    // @ts-ignore
    renderPassDescriptor.colorAttachments[0].view = currentContextTexture;
    const commandEncoder = device.createCommandEncoder();
    computePass(commandEncoder)
    renderPass(commandEncoder)
    device.queue.submit([commandEncoder.finish()]);

    t++;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
};

export default webGpuBoids;