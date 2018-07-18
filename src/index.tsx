import * as React from "react";
import cookie from 'react-cookies';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import stores from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import { AUTH_USER } from './scenes/authentication/constants';
import { App } from './scenes/layout/containers';

const token = cookie.load('token');
if (token) {
  stores.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={stores}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();