export const SIM_PARAMS = {
  boidSpeed: {
    default: 0.04,
    min: 0,
    max: 0.1,
    step: 0.01
  },
  cohesionDistance:{
    default: 0.1,
    min: 0,
    max: 0.2,
    step: 0.025
  },
  separationDistance: {
    default: 0.025,
    min: 0,
    max: 0.2,
    step: 0.025
  },
  alignmentDistance: {
    default: 0.025,
    min: 0,
    max: 0.2,
    step: 0.025
  },
  cohesionScale: {
    default: 0.02,
    min: 0,
    max: 0.1,
    step: 0.005
  },
  separationScale: {
    default: 0.05,
    min: 0,
    max: 0.1,
    step: 0.005
  },
  alignmentScale: {
    default: 0.005,
    min: 0,
    max: 0.1,
    step: 0.005
  },
}

export const SIM_PARAM_DEFAULTS = {
  boidSpeed: SIM_PARAMS.boidSpeed.default,
  cohesionDistance: SIM_PARAMS.cohesionDistance.default,
  separationDistance: SIM_PARAMS.separationDistance.default,
  alignmentDistance: SIM_PARAMS.alignmentDistance.default,
  cohesionScale: SIM_PARAMS.cohesionScale.default,
  separationScale: SIM_PARAMS.separationScale.default,
  alignmentScale: SIM_PARAMS.alignmentScale.default,
};

export const SPRITE_VERTEX_BUFFER_DATA = new Float32Array([
  -0.01,  -0.02,
  0.01,   -0.02,
  0.0,    0.02,
]);