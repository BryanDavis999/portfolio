import {
  createVertexShaderModule,
  createFragmentShaderModule
} from "../createShaderModules/index";

const particleBufferLayout = {  // instanced particles buffer
  arrayStride: 4 * 4,
  stepMode: 'instance' as GPUVertexStepMode,
  attributes: [
    { // instance position
      shaderLocation: 0,
      offset: 0,
      format: 'float32x2' as GPUVertexFormat,
    },
    { // instance velocity
      shaderLocation: 1,
      offset: 2 * 4,
      format: 'float32x2' as GPUVertexFormat,
    },
  ],
}

const vertexBufferLayout = {    // vertex buffer
  arrayStride: 2 * 4,
  stepMode: 'vertex' as GPUVertexStepMode,
  attributes: [
    {
      // vertex positions
      shaderLocation: 2,
      offset: 0,
      format: 'float32x2' as GPUVertexFormat,
    },
  ],
}

const createRenderPipeline = ({device, canvasFormat}: any) => {
  const vertexShaderModule = createVertexShaderModule(device)
  const fragmentShaderModule = createFragmentShaderModule(device)

  return device.createRenderPipeline({
    layout: 'auto',
    vertex: {
      module: vertexShaderModule,
      entryPoint: 'main',
      buffers: [
        particleBufferLayout,
        vertexBufferLayout,
      ],
    },
    fragment: {
      module: fragmentShaderModule,
      entryPoint: 'main',
      targets: [
        {
          format: canvasFormat,
        },
      ],
    },
    primitive: {
      topology: 'triangle-list',
    },
  });
}

export default createRenderPipeline