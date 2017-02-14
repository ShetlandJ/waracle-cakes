import React from 'react';
import App from './App';
import CakeDetail from './cakedetail';
import AddCake from './addcake';
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/detail/:id" component={CakeDetail}/>
    <Route path="/add" component={AddCake}/>
  </Router>
), document.getElementById('root'))

