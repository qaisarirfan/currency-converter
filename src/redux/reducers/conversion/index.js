import get from "lodash/get"
import findIndex from "lodash/findIndex"
import {createReducer} from "../../utility"
import {
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  RATES,
  SWAP_CURRENCY,
  TOGGLE_FAVORITE,
} from "./actions"
import {ERROR, LOADED, LOADING} from "../../middleware/actions"
import {LOGOUT} from "../authentication/actions"

// conversion initial state
export const initialState = {
  baseCurrency: "USD",
  quoteCurrency: "GBP",
  rates: {
    data: [],
    loader: false,
    loadingError: null,
  },
  favorite: [],
}

// conversion Reducer
const reducers = {
  [RATES + LOADING](state) {
    return {
      ...state,
      rates: {
        ...state.rates,
        data: [],
        loadingError: null,
        loader: true,
      },
    }
  },

  [RATES + LOADED](state, payload) {
    const result = get(payload, "result.rates", {})
    return {
      ...state,
      rates: {
        ...state.rates,
        data: Object.keys(result).map((key) => ({
          name: key,
          rate: result[key],
          isSelected: false,
          isFavorite: false,
        })),
        loader: false,
      },
    }
  },

  [RATES + ERROR](state, payload) {
    const result = get(payload, "result", undefined)
    return {
      ...state,
      rates: {
        ...state.rates,
        data: [],
        loader: false,
        loadingError: result,
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

  [TOGGLE_FAVORITE](state, payload) {
    const favorite = [...state.favorite]

    const index = findIndex(state.favorite, (fav) => {
      return fav === payload
    })

    if (index === -1) {
      favorite.push(payload)
    } else {
      favorite.splice(index, 1)
    }

    return {
      ...state,
      favorite,
    }
  },

  [LOGOUT]() {
    return initialState
  },
}

export default createReducer(reducers, initialState)
