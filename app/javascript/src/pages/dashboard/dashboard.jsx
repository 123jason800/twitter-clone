import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';


class Dashboard extends Component {
    constructor(props) {
        super();

        this.state = {

        };
    }

    render() {
        return (
            <h1>DashBoard</h1>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Dashboard />,
      document.body.appendChild(document.createElement('div')),
    )
})
  