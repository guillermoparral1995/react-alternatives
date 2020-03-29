import React, { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Loading from './Common/Loading';
import ErrorBoundary from './ErrorBoundary';

const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ './HomePage'));
const EditUser = lazy(() => import(/* webpackChunkName: "EditUser" */ './EditUser'));
const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ './Dashboard'));

const App = () => (
  <HashRouter>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/new" component={EditUser} />
          <Route path="/:user" component={Dashboard} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </HashRouter>
);

export default App;
