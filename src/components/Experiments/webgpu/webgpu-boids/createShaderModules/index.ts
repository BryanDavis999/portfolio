import computeShaderCode from "./computeShaderCode";
import vertexShaderCode from "./vertexShaderCode";
import fragmentShaderCode from "./fragmentShaderCode";

// Inspired by https://toji.dev/webgpu-best-practices/error-handling.html
const printDebugMessages = async (shaderModule: GPUShaderModule, code: string) => {
  const compilationInfo = await shaderModule.getCompilationInfo();
  for (const message of compilationInfo.messages) {
    let formattedMessage = '';
    if (message.lineNum) {
      formattedMessage += `Line ${message.lineNum}:${message.linePos} - ${code.substring(message.offset, message.length)}\n`;
    }
    formattedMessage += message.message;

    switch (message.type) {
      case 'error':
        console.error(formattedMessage); break;
      case 'warning':
        console.log("WARNING : " + formattedMessage); break;
      case 'info':
        console.log(formattedMessage); break;
    }
  }
}

const createShaderModule = ({device, label, code}: any) => {
  const shaderModule = device.createShaderModule({ label, code });
  printDebugMessages(shaderModule, code)

  return shaderModule
}

export const createVertexShaderModule = (device: any) =>
  createShaderModule({ device, label: "Vertex Shader Module", code: vertexShaderCode })

export const createFragmentShaderModule = (device: any) =>
  createShaderModule({ device, label: "Fragment Shader Module", code: fragmentShaderCode })

export const createComputeShaderModule = (device: any) =>
  createShaderModule({ device, label: "Compute Shader Module", code: computeShaderCode })