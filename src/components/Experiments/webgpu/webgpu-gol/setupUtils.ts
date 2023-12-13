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

export {getDevice, getContext};