import {createActionName} from "../../utility"

// conversion name
export const reducerName = "conversion"

// conversion actions type
export const RATES = createActionName(reducerName, "RATES")
export const SWAP_CURRENCY = "SWAP_CURRENCY"
export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY"
export const CHANGE_QUOTE_CURRENCY = "CHANGE_QUOTE_CURRENCY"
