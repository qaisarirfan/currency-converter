import get from "lodash/get"
import {reducerName} from "./actions"

// languages selectors
export const selectLanguage = (state) => get(state, `${reducerName}.language`)
