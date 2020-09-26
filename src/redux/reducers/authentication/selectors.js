import get from "lodash/get"
import {reducerName} from "./actions"

export const selectLoginIsLoading = (state) =>
  get(state, `${reducerName}.login.loader`)
export const selectLoginData = (state) =>
  get(state, `${reducerName}.login.data`)
export const selectAuthToken = (state) =>
  get(state, `${reducerName}.login.data.access_token`)
export const selectLoginError = (state) =>
  get(state, `${reducerName}.login.error`)
export const selectIsLoggedin = (state) =>
  get(state, `${reducerName}.login.isLoggedin`)
