import get from "lodash/get"
import {reducerName} from "./actions"

// conversion selectors
export const selectRatesData = (state) => {
  const rates = get(state, `${reducerName}.rates.data.rates`)
  if (!rates) return []
  const result = Object.keys(rates).map((key) => ({
    name: key,
    rate: rates[key],
    isSelected: false,
    isSavorite: false,
  }))
  return result
}
export const selectRatesLoader = (state) =>
  get(state, `${reducerName}.rates.loader`)
export const selectRatesLoadingError = (state) =>
  get(state, `${reducerName}.rates.loadingError`)

export const selectBaseCurrency = (state) =>
  get(state, `${reducerName}.baseCurrency`)
export const selectQuoteCurrency = (state) =>
  get(state, `${reducerName}.quoteCurrency`)
