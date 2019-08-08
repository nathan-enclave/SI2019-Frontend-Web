import React, { Component } from 'react'
import RouterURL from '../router/RouterURL';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Login from '../pages/login/Login'
import LeftBar from './LeftBar';
import Footer from './Footer';
import ForgetPW from '../pages/login/ForgetPW';
import ResetPassword from '../pages/login/ResetPassword';
import ResetSuccess from '../pages/login/ResetSuccess';
import { Redirect } from 'react-router'
import Notification from "../include/Notification";
import { SnackbarProvider } from 'notistack';

export default class App extends Component {
    render() {
        if (!localStorage.getItem('sessionToken')) {
            return (
                <div >
                    <Router>
                        <Route path="/forgotPassword" component={ForgetPW} />
                        <Route path="/resetPassword" component={ResetPassword} />
                        <Route path="/resetSuccess" component={ResetSuccess} />
                        <Route exact path="/login" component={Login} />
                        <Redirect to="/login" />
                    </Router>
                </div>
            );
        }
        else {
            return (
                <SnackbarProvider maxSnack={3}>
                    <Notification />
                    <div className="App">
                        <Router>
                            <div className="container-fluid">
                                <div className="page-content page-content-popup">
                                    <Header />
                                    <div className="page-content-fixed-header">
                                        <ul className="page-breadcrumb">
                                            <li><a href="/">Admin Dashboard</a></li>
                                        </ul>
                                        <div className="content-header-menu">
                                            <button type="button" className="menu-toggler responsive-togngler" data-toggle="collapse" data-target=".navbar-collapse">
                                                <span className="toggle-icon toggle-icon-custom">
                                                    <i className="fa fa-bars"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <LeftBar />
                                    <div className="page-fixed-main-content">
                                        <RouterURL />
                                        <div className="col-md-6">
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                            <div className="quick-nav-overlay"></div>
                        </Router>
                    </div>
                </SnackbarProvider>
            );
        }
    }
}