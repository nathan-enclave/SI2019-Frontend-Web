import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
class HeaderContent extends Component {
    render() {
        return (
            <div className="page-content-fixed-header">
                    <ul className="page-breadcrumb">
                        <li>
                            <NavLink to = "/">Dashboard</NavLink>
                        </li>
                        <li>Admin Dashboard</li>
                    </ul>
                    
                </div>
        );
    }
}

export default HeaderContent;