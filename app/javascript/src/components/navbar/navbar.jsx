import React from 'react';
import TwitterLogo from '../../../../assets/images/twitter-logo-1-1.svg';


const Navbar = ({logOut})=> (
    <header className="shadow">
        <div className="p-0 container-lg">
        <nav className="navbar navbar-expand-lg nav-twitter">
            <div id="nav-brand">
                <img src={TwitterLogo} className="logo logo-md"/>        
                <h1 className="nav-title">Twitter</h1>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bars"></span>
            </button>
            <div className="collapse p-2 navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">User</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={logOut}>Logout</a>
                    </li>
                </ul>
            </div>
        
        </nav>
        </div>  
    </header>
);

export default Navbar;