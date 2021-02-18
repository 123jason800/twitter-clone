import React,{Fragment} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import User from '../user/user';
import Dashboard from '../dashboard/dashboard';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <div>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/user" component={User} />
        </Switch>
        </div>
    </Router>
    ,
    document.body.appendChild(document.createElement('div'))
  );
});

