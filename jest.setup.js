import 'jest-styled-components'
import 'jest'
import { styleSheetSerializer } from 'jest-styled-components/serializer'

const JEST_STYLED_COMPONENTS_KEY = '__jest-styled-components__'
const unmarkNode = (val) => {
  if (val && val[JEST_STYLED_COMPONENTS_KEY]) {
    delete val[JEST_STYLED_COMPONENTS_KEY]
    if (val.children) {
      ;[...val.children].forEach(unmarkNode)
    }
  }
}

// override the default styleSheetSerializer
const patchedStyleSheetSerializer = {
  test: styleSheetSerializer.test,
  print(val, print) {
    const result = styleSheetSerializer.print(val, print)
    unmarkNode(val)
    return result
  },
}
expect.addSnapshotSerializer(patchedStyleSheetSerializer)
