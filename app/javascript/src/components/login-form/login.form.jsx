import React, {Component} from 'react';
import './login.form.scss';
class LoginForm extends Component {
    constructor(props) {
        super();
        this.state = {
            username:'',
            password: '',
        }
    }

    render() {
        return (
            <form className="loginForm shadow-lg" onSubmit={(e) => e.preventDefault()} >
        
            
            </form>
        );
    }
}


export default LoginForm;