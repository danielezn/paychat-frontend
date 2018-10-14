import axios from 'axios';
import cookie from 'react-cookies';
import { AUTH_ERROR,
         AUTH_USER,
         PROTECTED_TEST,
         UNAUTH_USER } from '../constants';

const API_URL = 'http://localhost:3000/api';

export function errorHandler(dispatch:any, error:any, type:any) {
  let errorMessage = '';

  if(error.data.error) {
    errorMessage = error.data.error;
  } else if(error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if(error.status === 401) {
    dispatch({
      payload: 'You are not authorized to do this. Please login and try again.',
      type
    });
    logoutUser();
  } else {
    dispatch({
      payload: errorMessage,
      type
    });
  }
}

export function loginUser(props:any) {
  const { email, password } = props;
  return (dispatch:any) => {
    axios.post(`${API_URL}/sign-in`, { email, password })
    .then(response => {
      cookie.save('token', response.data.auth_token, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = '/dashboard';
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
    }
  }

export function registerUser(props:any) {
  const { email, firstName, lastName, password } = props;
  return (dispatch:any) => {
    axios.post(`${API_URL}/sign-up`, { email, firstName, lastName, password })
    .then(response => {
      cookie.save('token', response.data.auth_token, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = '/dashboard';
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}

export function logoutUser() {
  return (dispatch:any) => {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    window.location.href = '/login';
  }
}

export function protectedTest() {
  return (dispatch:any) => {
    axios.get(`${API_URL}/protected`, {
      headers: { 'Authorization': cookie.load('token') }
    })
    .then(response => {
      dispatch({
        payload: response.data.content,
        type: PROTECTED_TEST,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}