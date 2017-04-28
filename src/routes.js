import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import TodoPage from './components/TodoPage';
import Dashboard from './components/Dashboard';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="todo" component={TodoPage}/>
    <Route path="dashboard" component={Dashboard}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
