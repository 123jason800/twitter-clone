import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import './home.scss';
import TwitterLogo from '../../../../assets/images/twitter_icon.svg';

import LoginForm from '@comp/login-form/login.form';
import SignUpForm from '@comp/signup-form/signup.form';
import BackgroundContainer from '@comp/background-container/background.container';
import Noltification from '@comp/noltifcation/noltification';
import {handleErrors } from '@utils/fetchHelper';

function Home() {
    const [isLoginForm, setLoginForm] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect( () => {
        // Authentication Check
        fetch(`/api/sessions`)
        .then(handleErrors)
        .then(res => {
            if (res.authenticated) {
                window.location.href = '/dashboard';
            }
        });
    },[]);
    
    return (
        
            <BackgroundContainer>
               
                <div className="container d-flex h-100 justify-content-center align-items-center flex-column">
                    {error ? <Noltification error={error} setError={setError} /> : null }
                    <div className="form p-4 shadow-lg">
                            <div className="logo-with-text">
                                <img src={TwitterLogo} className="logo mr-2 logo-sm" alt="Twitter Logo" />
                                <h2 className="logo-text">Twitter</h2>
                            </div>
                        
                            <div className="form-choices d-flex">
                                <div onClick={() =>!isLoginForm? setLoginForm((prevState) => !prevState) : null } className={`form-title ${!isLoginForm? 'light' :''}`}>Login</div> 
                                <div onClick={() => isLoginForm? setLoginForm((prevState) => !prevState) : null } className={`form-title ${isLoginForm? 'light' : ''}`}>Sign Up</div>
                            </div>
                        
                            {
                                isLoginForm ?   
                                <LoginForm setError={setError} />
                                :
                                <SignUpForm setError={setError} />
                            }
                        </div>
                </div> 
            </BackgroundContainer>
        
    );

      
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Home />,
      document.body.appendChild(document.createElement('div')),
    )
})
  