import Login from '../scenes/authentication/containers/Login';
import Logout from '../scenes/authentication/containers/Logout';
import Register from '../scenes/authentication/containers/Register';
import RequireAuth from '../scenes/authentication/containers/require-auth';
import DashboardContainer from '../scenes/dashboard/containers';
import Home from '../scenes/home/containers';
import NotFoundPage from '../scenes/others/containers';
import TalkContainer from '../scenes/talk/containers';

interface Iroute {
  path: string,
  component: any,
  exact: boolean
}

export const routes:Iroute[] = [
  {
    component: Home,
    exact: true,
    path: '/'
  },
  {
    component: RequireAuth(TalkContainer),
    exact: true,
    path: '/talks'
  },
  {
    component: RequireAuth(DashboardContainer),
    exact: true,
    path: '/dashboard'
  },
  {
    component: Login,
    exact: true,
    path: '/login'
  },
  {
    component: Register,
    exact: true,
    path: '/register'
  },
  {
    component: Logout,
    exact: true,
    path: '/logout'
  },
  {
    component: NotFoundPage,
    exact: true,
    path: '*'
  },
];