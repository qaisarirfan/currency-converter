import { createActionName } from '../../utility';

export const reducerName = 'authentication';

export const LOGIN = createActionName(reducerName, 'LOGIN');
export const LOGOUT = createActionName(reducerName, 'LOGOUT');
