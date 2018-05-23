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
import Applications, { query as applicationsQuery } from './views/applications';
import ApplicationProfile, { query as applicationProfileQuery } from './views/application-profile';


const routeConfig = makeRouteConfig(
  <Route
    path="/app"
    Component={AppRoot}
  >
    <Route
      path="/applications"
      query={applicationsQuery}
      Component={Applications}
    />
    <Route
      path="/applications/:applicationId"
      query={applicationProfileQuery}
      Component={ApplicationProfile}
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
