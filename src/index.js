import React from 'react';
import App from './App';
import CakeDetail from './cakedetail';
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/detail/:id" component={CakeDetail}/>
  </Router>
), document.getElementById('root'))

