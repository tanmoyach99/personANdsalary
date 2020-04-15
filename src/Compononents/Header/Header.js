import React from 'react';
import logo from '../../images/logo.png'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="users">Users</a>
            <a href="profile">Profile</a>
            <a href="settings">Settings</a>
            </nav>
            
            
        </div>
    );
};

export default Header;