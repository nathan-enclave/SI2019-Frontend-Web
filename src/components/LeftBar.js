import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class LeftBar extends Component {
  render() {
    return (
      <div className="page-sidebar-wrapper">
        <div className="page-sidebar navbar-collapse collapse">
          <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200}>
            {/* <li className="nav-item start">
              <NavLink to="/home" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-bar-chart" />
                <span className="title">Dashboard</span>
              </NavLink>
            </li> */}
            <li class="nav-item start">
              <NavLink class="nav-link nav-toggle" to ="/home">
                <i class="icon-home"></i>
                <span class="title">Dashboard</span>
                <span class="selected"></span>
                <span class="arrow open"></span>
              </NavLink>
              <ul class="sub-menu">
                <li class="nav-item start">
                  <NavLink to = "/dashboard1" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                    <i class="icon-wallet"></i>
                    <span class="title">Cash flow dashboard</span>               
                  </NavLink>
                </li>
                <li class="nav-item start ">
                  <NavLink to = "/dashboard2"activeStyle={{ backgroundColor: '#B9ECF0' }}>
                    <i class="icon-user-female"></i>
                    <span class="title">Human dashboard</span>                    
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item start" >
              <NavLink to="/engineer" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-user-following" />
                <span className="title">Engineer</span>
              </NavLink>
            </li>
            <li className="nav-item start">
              <NavLink to="/team" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-users" />
                <span className="title">Team</span>
              </NavLink>
            </li>
            <li className="nav-item start">
              <NavLink to="/project" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-screen-desktop" />
                <span className="title">Project</span>

              </NavLink>
            </li>
            <li className="nav-item start">
              <NavLink to="/user" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-list" />
                <span className="title">User</span>
                <span className="selected" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftBar;
