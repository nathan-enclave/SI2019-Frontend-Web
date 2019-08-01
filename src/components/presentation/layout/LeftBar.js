import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class LeftBar extends Component {
    render() {
        return (
            <div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">
                    <ul
                        className="page-sidebar-menu  page-header-fixed custom-menu-left-bar"
                        data-keep-expanded="false"
                        data-auto-scroll="true"
                        data-slide-speed={200}>
                        {/* <li className="nav-item start">
              <NavLink to="/home" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-bar-chart" />
                <span className="title">Dashboard</span>
              </NavLink>
            </li> */}
                        <li className="nav-item start">
                            <NavLink className="nav-link nav-toggle" to="/home">
                                <i className="icon-home"></i>
                                <span className="title bold">
                                    Dashboard
                                </span>
                                <span className="selected"></span>
                                <span className="arrow open"></span>
                            </NavLink>
                            <ul className="sub-menu">
                                <li className="nav-item start">
                                    <NavLink
                                        to="/cash"
                                        activeStyle={{
                                        backgroundColor: '#B9ECF0'
                                    }}>
                                        <i className="icon-graph"></i>
                                        <span className="title margin-left-xs">
                                            Cash flow 
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item start ">
                                    <NavLink
                                        to="/human"
                                        activeStyle={{
                                        backgroundColor: '#B9ECF0'
                                    }}>
                                        <i className="icon-user-female"></i>
                                        <span className="title margin-left-xs">
                                            Human 
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item start ">
                                    <NavLink
                                        to="/project-team"
                                        activeStyle={{
                                        backgroundColor: '#B9ECF0'
                                    }}>
                                        <i className="icon-briefcase"></i>
                                        <span className="title margin-left-xs">
                                            Project and Team
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item start">
                            <NavLink
                                to="/engineer"
                                activeStyle={{
                                backgroundColor: '#B9ECF0'
                            }}>
                                <i className="icon-user-following"/>
                                <span className="title bold">
                                    Engineer
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item start">
                            <NavLink
                                to="/team"
                                activeStyle={{
                                backgroundColor: '#B9ECF0'
                            }}>
                                <i className="icon-users"/>
                                <span className="title bold">
                                    Team
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item start">
                            <NavLink
                                to="/project"
                                activeStyle={{
                                backgroundColor: '#B9ECF0'
                            }}>
                                <i className="icon-screen-desktop"/>
                                <span className="title bold">
                                    Project
                                </span>

                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LeftBar;
