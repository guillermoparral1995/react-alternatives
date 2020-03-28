import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./Common/Loading";
import ErrorBoundary from "./ErrorBoundary";

const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ "./HomePage"));
const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ "./Dashboard"));

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:user">
            <Dashboard />
          </Route>
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
