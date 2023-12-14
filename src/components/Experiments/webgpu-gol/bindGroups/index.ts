import { GRID_SIZE } from "../constants";
import createCellStateStorage from "./createCellStateStorage";
import createUniformBuffer from "./createUniformBuffer";

const getBindGroups = (device: any) => {
  const cellStateStorage = createCellStateStorage({device, storageSize: GRID_SIZE ** 2})
  const uniformBuffer = createUniformBuffer({device, storageSize: [GRID_SIZE, GRID_SIZE]})

  const bindGroupLayout = device.createBindGroupLayout({
    label: "Cell Bind Group Layout",
    entries: [{
      binding: 0,
      visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
      buffer: {} // Grid uniform buffer
    }, {
      binding: 1,
      visibility: GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE,
      buffer: {
        type: "read-only-storage" as GPUBufferBindingType
      } // Cell state input buffer
    }, {
      binding: 2,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage" as GPUBufferBindingType
      } // Cell state output buffer
    }]
  });

  const bindGroups = [
    device.createBindGroup({
      label: "Cell renderer bind group A",
      layout: bindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: { buffer: uniformBuffer }
        },
        {
          binding: 1,
          resource: { buffer: cellStateStorage[0] }
        },
        {
          binding: 2,
          resource: { buffer: cellStateStorage[1]}
        }
      ],
    }),
    device.createBindGroup({
      label: "Cell renderer bind group B",
      layout: bindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: { buffer: uniformBuffer }
        },
        {
          binding: 1,
          resource: { buffer: cellStateStorage[1] }
        },
        {
          binding: 2,
          resource: { buffer: cellStateStorage[0] }
        }
      ],
    })
  ]

  return [bindGroups, bindGroupLayout]
}

export default getBindGroups