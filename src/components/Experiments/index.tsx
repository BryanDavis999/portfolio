import WebGPUBoids from "./webgpu-boids/index";
import WebGPUGol from "./webgpu-gol";

export type ExperimentCodeType = () => React.JSX.Element

export const experiments: Record<string, ExperimentCodeType> = {
  'webgpu-gol': WebGPUGol,
  'webgpu-boids': WebGPUBoids,
}

export const experimentDetails = [
  {
    id: 'webgpu-gol',
    title: 'WebGPU Game of Life Implementation'
  },
  {
    id: 'webgpu-boids',
    title: 'WebGPU BOIDs implementation'
  }
]

export const getAllExperimentIds = () =>
  experimentDetails.map(({id}) => ({params: {id}}))

export const getExperimentCode = (id: string) => experiments[id]