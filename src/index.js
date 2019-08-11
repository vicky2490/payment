import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/cssReset.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Switch, Router, Route } from 'react-router';
import { createHashHistory } from 'history';

const history = createHashHistory();

ReactDOM.render((
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/pays/:method" component={App}/>            
      <Route path="/paid/:status/:paidMethod" component={App}/>            
    </Switch>
  </Router>
  ), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
