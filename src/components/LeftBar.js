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
              <a class="nav-link nav-toggle">
                <i class="icon-home"></i>
                <span class="title">Dashboard</span>
                <span class="selected"></span>
                <span class="arrow open"></span>
              </a>
              <ul class="sub-menu">
                <li class="nav-item start active open">
                  <NavLink to = "/dashboard1" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                    <i class="icon-bar-chart"></i>
                    <span class="title">Dashboard</span>               
                  </NavLink>
                </li>
                <li class="nav-item start ">
                  <NavLink to = "/dashboard2"activeStyle={{ backgroundColor: '#B9ECF0' }}>
                    <i class="icon-bulb"></i>
                    <span class="title">Human dashboard</span>                    
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item start" >
              <NavLink to="/engineer" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-bar-chart" />
                <span className="title">Cash flow dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item start">
              <NavLink to="/team" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-bar-chart" />
                <span className="title">Team</span>
              </NavLink>
            </li>
            <li className="nav-item start">
              <NavLink to="/project" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-bar-chart" />
                <span className="title">Project</span>

              </NavLink>
            </li>
            <li className="nav-item start">
              <NavLink to="/user" activeStyle={{ backgroundColor: '#B9ECF0' }}>
                <i className="icon-bar-chart" />
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
