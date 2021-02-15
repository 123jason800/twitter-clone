import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
  import {safeCredentials, handleErrors } from '../../../utils/fetchHelper';


import './dashboard.scss'; 
import UserPost from '../../components/user-post/user.post';
import Navbar from '../../components/navbar/navbar';
import SideBar from '../../components/sidebar/sidebar';
import ProfileCard from '../../components/profile-card/profile.card';
class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
            username: null
        };
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        // Authentication Check
        fetch(`/api/sessions`)
        .then(handleErrors)
        .then(res => {
            if (!res.authenticated) {
                window.location.href = '/';
            }
            else {
               this.setState({username:res.username});
            }
        })
    }

    render() {
        return (
         !this.state.username ? <h1>Hello</h1> :
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
  