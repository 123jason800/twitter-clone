import React, {Component} from 'react';

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
            <form className="login-form" onSubmit={(e) => e.preventDefault()} >
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button className="btn-form mt-4" type="submit">Login</button>
            </form>
        );
    }
}


export default LoginForm;