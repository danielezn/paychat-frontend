import * as React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import { routes } from '../../../routes';

export class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div>
        <p>Header here</p>
        <div className="container">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/talks">Charlas</Link></li>
                <li><Link to="/dashboard">Panel</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">register</Link></li>
                <li><Link to="/404">404</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
              <Switch>
                {
                  routes.map((route, i) =>
                    <Route
                      key={i}
                      path={route.path}
                      component={route.component}
                      exact={route.exact}
                    />
                  )
                }
              </Switch>
            </div>
          </Router>
        </div>

        <p>Footer here</p>
      </div>
    );
  }
}