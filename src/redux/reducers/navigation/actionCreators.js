import {SET_NAVIGATION} from "./actions"

// navigation actions
export function createNavigationAction(payload) {
  return {
    type: SET_NAVIGATION,
    payload,
  }
}
