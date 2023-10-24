import Conway from "./Conway";
import Shader101 from "./Shader101/index";
interface ExperimentCodeProps {
    width: number;
    height: number;
}

export type ExperimentCodeType = ({ width, height }: ExperimentCodeProps) => React.JSX.Element

export const experiments: Record<string, ExperimentCodeType> = {
  'shaders-101': Shader101,
  'conways-game-of-life': Conway,
}

export const experimentDetails = [
  {
    id: 'shaders-101',
    title: 'Basic Shader'
  },
  {
    id: 'conways-game-of-life',
    title: 'Conway\'s Game of Life'
  }
]

export const getAllExperimentIds = () =>
  experimentDetails.map(({id}) => ({params: {id}}))

export const getExperimentCode = (id: string) => experiments[id]