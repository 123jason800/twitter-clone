import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


import Dashboard from '../dashboard/dashboard';
import User from '../user/user';
import Navbar from '@comp/navbar/navbar';
import UserPublic from '../user-pubic/UserPublic';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/user/:username" component={UserPublic} />
          <Route exact path="/user" component={User} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        </div>
    </Router>
    ,
    document.body.appendChild(document.createElement('div'))
  );
});

