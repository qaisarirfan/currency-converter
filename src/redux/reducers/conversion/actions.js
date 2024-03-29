import { createActionName } from '../../utility';

export const reducerName = 'conversion';

export const RATES = createActionName(reducerName, 'RATES');
export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
