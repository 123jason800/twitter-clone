import React,{Fragment,useState} from 'react';
import ReactDOM from 'react-dom';
import './home.scss';
import TwitterLogo from '../../../../assets/images/twitter_icon.svg';

import LoginForm from '../../components/login-form/login.form';
import SignUpForm from '../../components/signup-form/signup.form';
import BackgroundContainer from '../../components/background-container/background.container';

function Home() {
    const [isLoginForm, setLoginForm] = useState(true);
    

    return (
        <Fragment>
            <BackgroundContainer>
           <div className="container d-flex h-100 justify-content-center align-items-center flex-column">
               <div className="form p-4 shadow-lg">
                    <div className="logo-with-text">
                        <img src={TwitterLogo} className="logo mr-2 logo-sm" alt="Twitter Logo" />
                        <h2 className="logo-text">Twitter</h2>
                    </div>
                   
                    <div className="form-choices d-flex">
                        <div onClick={() =>!isLoginForm? setLoginForm(!isLoginForm) : null } className={`form-title ${!isLoginForm? 'light' :''}`}>Login</div> 
                        <div onClick={() => isLoginForm? setLoginForm(!isLoginForm) : null } className={`form-title ${isLoginForm? 'light' : ''}`}>Sign Up</div>
                    </div>
                   
                    {
                        isLoginForm ?   
                        <LoginForm/>
                        :
                        <SignUpForm />
                    }
                    
                </div>
            </div> 
            </BackgroundContainer>
        </Fragment>
    );

      
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Home />,
      document.body.appendChild(document.createElement('div')),
    )
})
  