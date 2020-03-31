import React, { Suspense, lazy } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Loading from "./Common/Loading";
import ErrorBoundary from "./ErrorBoundary";
import { I18nProvider } from "./I18n";

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./HomePage")
);
const EditUserPage = lazy(() =>
  import(/* webpackChunkName: "EditUserPage" */ "./EditUserPage")
);
const DashboardPage = lazy(() =>
  import(/* webpackChunkName: "DashboardPage" */ "./DashboardPage")
);

const App = () => (
  <HashRouter>
    <I18nProvider>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/new" component={EditUserPage} />
            <Route path="/:user" component={DashboardPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </I18nProvider>
  </HashRouter>
);

export default App;
