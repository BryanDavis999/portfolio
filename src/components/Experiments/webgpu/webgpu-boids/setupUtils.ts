const getContext = async (canvas: HTMLCanvasElement, device: GPUDevice, handleError: (error: string) => void) => {
  const context = canvas.getContext("webgpu");

  if(!context){
    handleError("Check if the canvas exists yet!")
    return null
  }

  const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
    device: device,
    format: canvasFormat,
  });

  return context
}

const getDevice = async (handleError: (error: string) => void) => {
  if (!navigator.gpu) {
    handleError("WebGPU not supported on this browser.");
    return null
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    handleError("No appropriate GPUAdapter found.");
    return null
  }

  return await adapter.requestDevice();
}


const getClearScreenPass = (context: any) => {
  const renderPassDescriptor: GPURenderPassDescriptor = {
    colorAttachments: [
      {
        view: context.getCurrentTexture().createView(),
        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
        loadOp: 'clear' as const,
        storeOp: 'store' as const,
      },
    ],
  };

  return renderPassDescriptor
}

export {getDevice, getContext, getClearScreenPass};