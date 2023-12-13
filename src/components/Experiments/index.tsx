import Conway from "./Conway";
import WebGPUExperimentWrapper from "./webgpu";
interface ExperimentCodeProps {
    width: number;
    height: number;
}

export type ExperimentCodeType = ({ width, height }: ExperimentCodeProps) => React.JSX.Element

export const experiments: Record<string, ExperimentCodeType> = {
  'webgpu-gol': WebGPUExperimentWrapper,
  'conways-game-of-life': Conway,
}

export const experimentDetails = [
  {
    id: 'webgpu-gol',
    title: 'WebGpuGol'
  },
  {
    id: 'conways-game-of-life',
    title: 'Conway\'s Game of Life'
  }
]

export const getAllExperimentIds = () =>
  experimentDetails.map(({id}) => ({params: {id}}))

export const getExperimentCode = (id: string) => experiments[id]