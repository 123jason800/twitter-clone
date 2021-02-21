import React from 'react';
import TwitterLogo from '../../../../assets/images/twitter-logo-1-1.svg';
import {Link,NavLink,useLocation} from 'react-router-dom';
import {safeCredentials,handleErrors} from '@utils/fetchHelper';

const Navbar = props => {
    const logOut = () => {
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
      
    }

    let location = useLocation();
    
    



    return (
    <header className="shadow">
        <div className="p-0 container-lg">
        <nav className="navbar navbar-expand-lg nav-twitter">
            <Link to="/dashboard" id="nav-brand">
                <img src={TwitterLogo} className="logo logo-md"/>        
                <h1 className="nav-title">Twitter</h1>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bars"></span>
            </button>
            <div className="collapse p-2 navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                
                    <li className="nav-item ">
                        <NavLink exact activeClassName="active"  className="nav-link" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  exact activeClassName="active"  className="nav-link" to="/user">User</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => logOut()}>Logout</a>
                    </li>
                </ul>
            </div>
        
        </nav>
        </div>  
    </header>
    );
};

export default Navbar;