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
import Applications, { query } from './views/applications';

const routeConfig = makeRouteConfig(
  <Route
    path="/app"
    Component={AppRoot}
  >
    <Route
      path="/applications"
      query={query}
      Component={Applications}
    />
    <Redirect
      from="widget/:widgetId"
      to="/widgets/:widgetId"
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
