import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Dashboard from './Dashboard';

import './styles.scss';

const App = () => <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <HomePage /> 
      </Route>
      <Route path='/:user'>
        <Dashboard />
      </Route>
    </Switch>
  </BrowserRouter>;

export default App;