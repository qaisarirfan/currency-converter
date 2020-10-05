import {SET_LANGUAGE} from "./actions"

// languages actions
export function createLanguageAction(payload) {
  return {
    type: SET_LANGUAGE,
    payload,
  }
}
