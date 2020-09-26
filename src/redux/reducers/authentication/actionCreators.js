import {LOGIN, LOGOUT} from "./actions"

// Action creators
export function login() {
  return {
    type: LOGIN,
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}
