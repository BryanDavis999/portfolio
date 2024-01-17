import { getDevice, getContext } from "./setupUtils";
import loadShaders from "./shaders";
import getBindGroups from "./bindGroups";
import createVertexBuffer from "./createVertexBuffer";
import { GRID_SIZE, UPDATE_INTERVAL, WORKGROUP_SIZE } from "./constants";

const webGPUGol = async (canvas: HTMLCanvasElement, handleError: (error: string) => void) => {
  const device = await getDevice(handleError)
  if(!device) return

  const context = await getContext(canvas, device, handleError)
  if(!context) return

  const canvasFormat = navigator.gpu.getPreferredCanvasFormat();

  const [vertexBuffer, vertexBufferLayout] = createVertexBuffer(device)
  const [vertexShaderModule, fragmentShaderModule, simulationShaderModule] = loadShaders(device)
  const [bindGroups, bindGroupLayout] = getBindGroups(device)

  const pipelineLayout = device.createPipelineLayout({
    label: "Cell Pipeline Layout",
    bindGroupLayouts: [ bindGroupLayout ],
  });

  // Create a compute pipeline that updates the game state.
  const simulationPipeline = device.createComputePipeline({
    label: "Simulation pipeline",
    layout: pipelineLayout,
    compute: {
      module: simulationShaderModule,
      entryPoint: "computeMain",
    }
  });

  const cellPipeline = device.createRenderPipeline({
    label: "Cell pipeline",
    layout: pipelineLayout,
    vertex: {
      module: vertexShaderModule,
      entryPoint: "main",
      buffers: [vertexBufferLayout]
    },
    fragment: {
      module: fragmentShaderModule,
      entryPoint: "main",
      targets: [{
        format: canvasFormat
      }]
    }
  });

  let step = 0;

  const updateGrid = () => {
    const encoder = device.createCommandEncoder();

    // Compute the new simulation state
    const computePass = encoder.beginComputePass();
    computePass.setPipeline(simulationPipeline);
    computePass.setBindGroup(0, bindGroups[step % 2]);
    const workgroupCount = Math.ceil(GRID_SIZE / WORKGROUP_SIZE);
    computePass.dispatchWorkgroups(workgroupCount, workgroupCount);
    computePass.end();

    step += 1

    // Clear the screen
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: context.getCurrentTexture().createView(),
          loadOp: "clear" as GPULoadOp,
          clearValue: { r: 0, g: 0, b: 0, a: 1 },
          storeOp: "store" as GPUStoreOp,
        }
      ]
    });

    // Draw the grid
    pass.setPipeline(cellPipeline);
    pass.setVertexBuffer(0, vertexBuffer);
    pass.setBindGroup(0, bindGroups[step % 2]); //Add the bind group
    // pass.draw(vertices.length / 2, GRID_SIZE ** 2); // 6 vertices x 16 slots
    pass.draw(6, GRID_SIZE ** 2);

    // End the render pass and submit the command buffer
    pass.end();
    const commandBuffer = encoder.finish();
    device.queue.submit([commandBuffer]);
  }

  setInterval(updateGrid, UPDATE_INTERVAL);
}

export default webGPUGol;