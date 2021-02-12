import React,{Fragment,useState} from 'react';
import './home.scss';

import LoginForm from '../../components/login-form/login.form';
import SignUpForm from '../../components/signup-form/signup.form';
import BackgroundContainer from '../../components/background-container/background.container';

export default function Home() {
    const [isLoginForm, setLoginForm] = useState(true);
    

    return (
        <Fragment>
            <BackgroundContainer>
           <div className="container d-flex h-100 justify-content-center align-items-center flex-column">
               <div className="form p-4 shadow-lg">
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

