import vertexShaderCode from "./vertexShader";
import fragmentShaderCode from "./fragmentShader";
import simulationShaderCode from "./simulationShader";

const loadShaders = (device: any) => {
  const vertexShaderModule = device.createShaderModule({
    label: "Cell Vertex Shader",
    code: vertexShaderCode
  })

  const fragmentShaderModule = device.createShaderModule({
    label: "Cell Fragment Shader",
    code: fragmentShaderCode
  })

  const simulationShaderModule = device.createShaderModule({
    label: "Game of Life simulation shader",
    code: simulationShaderCode
  });

  return [vertexShaderModule, fragmentShaderModule, simulationShaderModule]
}

export default loadShaders;