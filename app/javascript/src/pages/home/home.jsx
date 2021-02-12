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
                {
                    isLoginForm ?
                    <LoginForm/>
                    :
                    <SignUpForm />
                }
                <button onClick={() => setLoginForm(!isLoginForm)}>
                    test
                </button>   
            </div> 
            </BackgroundContainer>
        </Fragment>
    );

      
}

