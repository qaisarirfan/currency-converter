import {
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  RATES,
  SWAP_CURRENCY,
  TOGGLE_FAVORITE,
} from "./actions"

// conversion actions
export const createLoadAction = (base = "USD") => ({
  type: RATES,
  request: {
    type: "get",
    url: `/latest?base=${base}`,
  },
})

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
})

export const changeBaseCurrency = (currency) => ({
  type: CHANGE_BASE_CURRENCY,
  payload: currency,
})

export const changeQuoteCurrency = (currency) => ({
  type: CHANGE_QUOTE_CURRENCY,
  payload: currency,
})

export const toggleFavorite = (currency) => ({
  type: TOGGLE_FAVORITE,
  payload: currency,
})
