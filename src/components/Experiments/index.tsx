import WebGPUExperimentWrapper from "./webgpu";
interface ExperimentCodeProps {
    width: number;
    height: number;
}

export type ExperimentCodeType = ({ width, height }: ExperimentCodeProps) => React.JSX.Element

export const experiments: Record<string, ExperimentCodeType> = {
  'webgpu-gol': WebGPUExperimentWrapper,
  'conways-game-of-life': WebGPUExperimentWrapper,
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