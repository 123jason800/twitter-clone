import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
  import { handleErrors,safeCredentials } from '../../../utils/fetchHelper';

import './dashboard.scss'; 

// Components
import UserPost from '../../components/user-post/user.post';
import Navbar from '../../components/navbar/navbar';
import SideBar from '../../components/sidebar/sidebar';
import ProfileCard from '../../components/profile-card/profile.card';
import Loader from '../../components/loader/loader';
import News from '../../components/news/news';
import ScrollBar from '../../components/scrollbar/ScrollBar';


class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
            username: null,
            error: null,
        };
    }


  
    

    logOut = () => {
        fetch(`/api/sessions`, safeCredentials({
            method: 'DELETE',
        }))
        .then(handleErrors)
        .then(res => {
            if (res.success) {
                window.location.href='/';
            }
            else {
                throw new Error('unable to logout');
            }
        })
        .catch(error => {
            this.setState({error: error.message});
        })
    }




    shouldComponentUpdate(nextProps,nextState) {
       return true;
    }

    componentWillUpdate(){
        // perform any preparations for an upcoming update
     
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
        });
    }

    

  



    render() {
        return (
         !this.state.username ? <Loader /> :
            <Fragment>
                <Navbar logOut={this.logOut}/>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar>
                                <ProfileCard username={this.state.username} />
                            </SideBar>
                        </div>
                        <ScrollBar >
                            <div className="col-sm-8 col-12">
                                <UserPost />
                            </div>
                            <div className="col-sm-4 col-12">
                                <SideBar>
                                    <News/>
                                </SideBar>
                            </div>
                        </ScrollBar>
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
  