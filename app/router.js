import React from 'react';

import BrowserProtocol from 'farce/lib/BrowserProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';

import {
  createFarceRouter,
  createRender,
  HttpError,
  makeRouteConfig,
  Redirect,
  Route,
} from 'found';

import AppRoot from './views/app-root';
import Issues, { query as issuesQuery } from './views/issues';

const routeConfig = makeRouteConfig(
  <Route
    path="/app"
    Component={AppRoot}
  >
    <Route
      path="/issues"
      query={issuesQuery}
      Component={Issues}
    />
  </Route>
);

const BrowserRouter = createFarceRouter({
  routeConfig,
  historyProtocol: new BrowserProtocol(),
  historyMiddleware: [queryMiddleware],
  render: createRender({
    renderError: ({ error }) => (
      <div>
        {error.status === 404 ? 'Not found' : 'Error'}
      </div>
    )
  })
});

export default BrowserRouter;
