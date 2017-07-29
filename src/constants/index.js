import deepFreeze from '../utils/deepFreeze'

const constants = {
  NULL_OBJECT: {},
  NULL_ARRAY: [],
  NULL_FUNC: () => {}
}

export default deepFreeze(constants)
