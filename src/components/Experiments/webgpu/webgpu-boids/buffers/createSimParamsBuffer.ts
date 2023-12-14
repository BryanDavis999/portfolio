import { SIM_PARAMS, SIM_PARAM_DEFAULTS } from "./constants";

const simParamBufferSize = Object.keys(SIM_PARAM_DEFAULTS).length * Float32Array.BYTES_PER_ELEMENT;

const createSimParamsBuffer = ({device, gui}: any) => {
  const simParamBuffer = device.createBuffer({
    size: simParamBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  const updateSimParams = () => {
    device.queue.writeBuffer(
      simParamBuffer,
      0,
      new Float32Array([
        SIM_PARAM_DEFAULTS.boidSpeed,
        SIM_PARAM_DEFAULTS.cohesionDistance,
        SIM_PARAM_DEFAULTS.separationDistance,
        SIM_PARAM_DEFAULTS.alignmentDistance,
        SIM_PARAM_DEFAULTS.cohesionScale,
        SIM_PARAM_DEFAULTS.separationScale,
        SIM_PARAM_DEFAULTS.alignmentScale,
      ])
    );
  }

  updateSimParams();
    if (gui === undefined) {
      console.error('GUI not initialized');
    } else {
      for (const [title, {min, max, step}] of Object.entries(SIM_PARAMS)) {
        const paramName = title as keyof typeof SIM_PARAM_DEFAULTS;
        gui.add(SIM_PARAM_DEFAULTS, paramName, min, max, step).onFinishChange(updateSimParams);
      }
    }
  ;

  return simParamBuffer
}

export default createSimParamsBuffer;