// routesConfig.js
import SignIn from '../pages/signIn';
import Empty from '../pages/EmptyData';
import MoviesList from '../pages/Movies';
//import DynamicPage from './DynamicPage';

const routesConfig = [
  {
    path: '/',
    component: SignIn,
    exact: true,
  },
  {
    path: '/empty',
    component: Empty,
   
  },
  {
    path: '/movies',
    component: MoviesList,
    exact: true,
  },
];

export default routesConfig;
