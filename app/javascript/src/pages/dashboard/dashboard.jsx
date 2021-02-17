import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import { handleErrors,safeCredentials,jsonHeader} from '../../../utils/fetchHelper';

import './dashboard.scss'; 

// Components
import UserPost from '../../components/user-post/user.post';
import Navbar from '../../components/navbar/navbar';
import SideBar from '../../components/sidebar/sidebar';
import ProfileCard from '../../components/profile-card/profile.card';
import Loader from '../../components/loader/loader';
import News from '../../components/news/news';
import ScrollBar from '../../components/scrollbar/ScrollBar';
import Noltification from '../../components/noltifcation/noltification';
import TweetForm from '../../components/tweet-form/tweet.form';
class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
            username: null,
            error: null,
            message: '',
            tweets: [],
            image: {
                        file:null,
                        src:null
                    },
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

    setError = (error) => {
        this.setState({error});
    }


    deleteTweet = (id) => {

        this.setState({loaded:false});
        fetch(`/api/tweets/${id}`, safeCredentials({
            method: 'DELETE',
        }))
        .then(handleErrors)
        .then(res => {
            if (res.success) {
                this.getTweets();
            }
            else {
                throw new Error('Unable to Delete');
            }
        })
        .catch(error => {
            this.setState({error: error.message,loaded: true});
        })
    }

    postTweet = () => {

      
        this.setState({loaded:false});
     
        let formData = new FormData();
        if (this.state.message) {
            formData.append('tweet[message]', this.state.message);
        }

        if (this.state.image.file) {
            formData.append('tweet[image]',this.state.image.file, this.state.image.file.name);
        }

        fetch(`/api/tweets`, jsonHeader({
            method: 'POST',
            body: formData
        }))
        .then(handleErrors)
        .then(res => {
            if (res.success) {
                this.getTweets();
                this.setState({
                    message: '',
                    image: {
                        file:null,
                        src:null
                    }
                })
            }
            else {
                throw new Error('invalid-post');
            }
        })
        .catch(error => {
            this.setState({error: error.message,loaded: true});
        })
    }

    getTweets = () => {
        fetch(`/api/tweets`)
        .then(handleErrors)
        .then(res => {
           if (res.success) {
                let {tweets} = res;
                this.setState({tweets,loaded:true});
           }

           else {
                this.setState({error: 'Unable to get Tweets',loaded: true});
                
           }
        });
    }

    handleImageChange = (e) =>{
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        let imageCopy = {...this.state.image};
        imageCopy.file = file;
     
        if (e.target.files.length === 0) {
          return;
        }

      reader.addEventListener("load", (event) => {
        
        imageCopy.src = event.target.result;
        this.setState({ image:imageCopy });
      });

 
      reader.readAsDataURL(e.target.files[0]);
    
      
    }
    
      

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({message: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.postTweet();
    }

    componentDidMount() {
        this.getTweets();
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
                {this.state.error ? <Noltification error={this.state.error} setError={this.setError} /> : null }
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar>
                                <ProfileCard 
                                loaded={this.state.loaded} 
                                username={this.state.username} 
                                tweets={this.state.tweets}
                                deleteTweet={this.deleteTweet}
                                />
                            </SideBar>
                        </div>
                        <ScrollBar >
                            <div className="col-sm-8 col-12">
                                <TweetForm
                                image={this.state.image.src}
                                message={this.state.message}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                handleImageChange={this.handleImageChange}
                                />
                                <UserPost 
                                deleteTweet={this.deleteTweet}
                                loaded={this.state.loaded}
                                tweets={this.state.tweets}
                                loaded={this.state.loaded}
                                username={this.state.username}
                                />
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
  