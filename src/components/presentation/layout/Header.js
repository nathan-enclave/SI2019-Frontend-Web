import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';
class Header extends Component {
    logout = (event) => {
        localStorage.clear();
        window.location = '/login';
    }
    render() {
        return (
            <header className="page-header">
                <nav className="navbar" role="navigation">
                    <div className="container-fluid">
                        <div className="havbar-header">
                            <NavLink to="/home" className="navbar-brand custom-background-white">
                                <div className="logo-enclave">
                                    <img src="/assets/pages/img/logos/enclave-logo.png" alt=""/>
                                    <span className="margin-left-sm">ENCLAVE IT</span>
                                </div>
                            </NavLink>
                            <div className="topbar-actions">
                                <div className="btn-group-img btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-sm dropdown-toggle custom-background-white"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                        data-close-others="true">
                                        <img src="/assets/img-icon/manager.png" alt="Admin avatar"/>
                                    </button>
                                    <ul className="dropdown-menu-v2 dropdown-custom-background" role="menu">
                                        <li>
                                            <span onClick= {(event) =>this.logout(event)}>
                                                <i className="icon-key"/>
                                                Log Out
                                            </span>
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