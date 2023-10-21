import Conway from "./Conway";
import Shader101 from "./Shader101";

export const experiments: Record<string, React.FC> = {
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