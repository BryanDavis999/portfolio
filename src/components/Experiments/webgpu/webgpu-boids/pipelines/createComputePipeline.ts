import { createComputeShaderModule } from "../createShaderModules/index";

const createComputePipeline = (device: any) => {
  const computeShaderModule = createComputeShaderModule(device)

  return device.createComputePipeline({
    layout: 'auto',
    compute: {
      module: computeShaderModule,
      entryPoint: 'main',
    },
  });
}

export default createComputePipeline