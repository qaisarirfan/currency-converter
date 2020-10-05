import get from "lodash/get"
import {reducerName} from "./actions"

// navigation selectors
export const selectNavigation = (state) =>
  get(state, `${reducerName}.navigation`)
