// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import Detail from './components/detail';
import Edit from './components/edit';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/:id" component={App}/>
    <Route path="/detail/:id" component={Detail} />
    <Route path="/edit/:id" component={Edit} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
