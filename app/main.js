import React from "react";
import ReactDOM from "react-dom";
import { Resolver } from 'found-relay';

import Router from './router';
import environment from './relay/environment';

import './styles.scss';

ReactDOM.render(
  <Router resolver={new Resolver(environment)}/>
  , document.getElementById('app')
);
