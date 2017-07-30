// @flow

import deepFreeze from '../utils/deepFreeze'

type ConstantsType = {
  NULL_OBJECT: any,
  NULL_ARRAY: any,
  NULL_FUNC: any,
  a: string
}

const constants: ConstantsType = deepFreeze({
  NULL_OBJECT: {},
  NULL_ARRAY: [],
  NULL_FUNC: () => {}
})

export default constants
