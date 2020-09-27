import get from "lodash/get"
import findIndex from "lodash/findIndex"
import {createSelector} from "reselect"
import {reducerName} from "./actions"

// conversion selectors
export const selectRatesData = (state) =>
  get(state, `${reducerName}.rates.data`)
export const selectRatesLoader = (state) =>
  get(state, `${reducerName}.rates.loader`)
export const selectRatesLoadingError = (state) =>
  get(state, `${reducerName}.rates.loadingError`)

export const selectBaseCurrency = (state) =>
  get(state, `${reducerName}.baseCurrency`)
export const selectQuoteCurrency = (state) =>
  get(state, `${reducerName}.quoteCurrency`)
export const selectFavoriteCurrencies = (state) =>
  get(state, `${reducerName}.favorite`)

export const selectCurrencies = createSelector(
  selectRatesData,
  selectFavoriteCurrencies,
  (rates, favorite) => {
    return (
      rates &&
      rates.map((rate) => {
        const index = findIndex(favorite, (fav) => {
          return fav === rate.name
        })
        return {
          ...rate,
          isFavorite: index !== -1,
        }
      })
    )
  }
)
