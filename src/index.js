import * as React from "react";
import cookie from 'react-cookies';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import stores from './redux/store';
import * as serviceWorker from './serviceWorker';
import { AUTH_USER } from './scenes/authentication/constants';
import { App } from './scenes/layout/containers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from "react-tap-event-plugin";

const token = cookie.load('token');
if (token) {
  stores.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={stores}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();