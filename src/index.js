import * as React from "react";
import cookie from 'react-cookies';
import * as ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import stores from './redux/store';
import * as serviceWorker from './serviceWorker';
import { AUTH_USER } from './scenes/authentication/constants';
import { App } from './scenes/layout/containers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from "react-tap-event-plugin";

import indexRoutes from "./routes/routes.js";


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

const token = cookie.load('token');

if (token) {
  stores.dispatch({ type: AUTH_USER });
}

// ReactDOM.render(
//   <Provider store={stores}>
//     <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
//       <App/>
//     </MuiThemeProvider>
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={stores}>
    <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route to={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();