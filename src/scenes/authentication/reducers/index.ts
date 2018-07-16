import { AUTH_ERROR,
         AUTH_USER,
         PROTECTED_TEST,
         UNAUTH_USER } from '../constants';

const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false}

export const authentication = (state = INITIAL_STATE, action:any) => {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case PROTECTED_TEST:
      return { ...state, content: action.payload };
  }

  return state;
}