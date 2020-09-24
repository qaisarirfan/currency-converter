import {createReducer} from "../../utility"
import {
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  RATES,
  SWAP_CURRENCY,
} from "./actions"
import {ERROR, LOADED, LOADING} from "../../middleware/actions"

// conversion initial state
export const initialState = {
  baseCurrency: "USD",
  quoteCurrency: "GBP",
  rates: {
    data: null,
    loader: false,
    loadingError: null,
  },
}

// conversion Reducer
const reducers = {
  [RATES + LOADING](state) {
    return {
      ...state,
      rates: {
        ...state.rates,
        data: null,
        loadingError: null,
        loader: true,
      },
    }
  },

  [RATES + LOADED](state, payload) {
    return {
      ...state,
      rates: {
        ...state.rates,
        data: payload.result,
        loader: false,
      },
    }
  },

  [RATES + ERROR](state, payload) {
    return {
      ...state,
      rates: {
        ...state.rates,
        data: null,
        loader: false,
        loadingError: payload.result,
      },
    }
  },

  [SWAP_CURRENCY](state) {
    return {
      ...state,
      baseCurrency: state.quoteCurrency,
      quoteCurrency: state.baseCurrency,
    }
  },

  [CHANGE_BASE_CURRENCY](state, payload) {
    return {
      ...state,
      baseCurrency: payload,
    }
  },

  [CHANGE_QUOTE_CURRENCY](state, payload) {
    return {
      ...state,
      quoteCurrency: payload,
    }
  },
}

export default createReducer(reducers, initialState)
