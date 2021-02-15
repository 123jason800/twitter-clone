import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

import './dashboard.scss'; 
import UserPost from '../../components/user-post/user.post';
import Navbar from '../../components/navbar/navbar';
import SideBar from '../../components/sidebar/sidebar';
import ProfileCard from '../../components/profile-card/profile.card';
class Dashboard extends Component {
    constructor(props) {
        super();

        this.state = {

        };
    }

    render() {
        return (
            <Fragment>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar>
                            <ProfileCard />
                        </SideBar>
                    </div>
                    <div className="col-md-6">
                        <UserPost />
                    </div>
                    <div className="col-md-3">
                        <SideBar >

                        </SideBar>
                    </div>
                </div>
                
            </div>
           
            </Fragment>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Dashboard />,
      document.body.appendChild(document.createElement('div')),
    )
})
  