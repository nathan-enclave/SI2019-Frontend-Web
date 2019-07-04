import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
class Header extends Component {
    logout = (event)=>{
        sessionStorage.removeItem('userData');
        window.location = '/login' ;
    }
    render() {
        return (
            <header className="page-header">
            <nav className="navbar" role="navigation">
              <div className="container-fluid">
                <div className="havbar-header">
                  <NavLink to = "/" className="navbar-brand">
                    <img src="../assets/layouts/layout6/img/logo.png" alt="Logo" /> </NavLink>
                  <div className="topbar-actions">                  
                    <span style={{color: 'yellow',padding:'10px'}}>Hi {sessionStorage.getItem('userData')}</span>
                    <div className="btn-group-img btn-group">
                      <button type="button" className="btn btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <img src="../assets/layouts/layout6/img/avatar1.jpg" alt="" /> </button>
                      <ul className="dropdown-menu-v2" role="menu">
                        <li>
                          <a href="page_user_profile_1.html">
                            <i className="icon-user" /> My Profile
                            <span className="badge badge-danger">1</span>
                          </a>
                        </li>
                        <li>
                          <a onClick = {(event) =>this.logout(event)}>
                            <i className="icon-key" /> Log Out </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        );
    }
}

export default Header;