import React, { Suspense, lazy } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Loading from './Common/Loading';
import ErrorBoundary from './ErrorBoundary';
import i18n from './I18n';
import { getText } from './I18n/translations';

const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ './HomePage'));
const EditUserPage = lazy(() => import(/* webpackChunkName: "EditUserPage" */ './EditUserPage'));
const DashboardPage = lazy(() => import(/* webpackChunkName: "DashboardPage" */ './DashboardPage'));

const App = () => (
  <i18n.Provider value={getText}>
    <HashRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/new" component={EditUserPage} />
            <Route path="/:user" component={DashboardPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </HashRouter>
  </i18n.Provider>
);

export default App;
