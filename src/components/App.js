import React, { Component } from 'react';
import RouterURL from './router/RouterURL';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import LeftBar from './LeftBar';
import Footer from './Footer';
import HeaderContent from './HeaderContent';
import {Redirect } from 'react-router'

function App() {
   
    if (!sessionStorage.getItem('userData')) {
        
        return (
            <div>
                <Router>
                <RouterURL />
                <Redirect to ="/login" />
                </Router>
            </div>

        );
    }
    else
    {
        return (
            <div>
                <Router>
                    <Header />
                    <div className="container-fluid">
                        <div className="page-content page-content-popup">
                            <HeaderContent />
                            <LeftBar />
                            <div className="page-fixed-main-content">
                                <RouterURL />
                            </div>
                            <Footer />
                        </div>
                    </div>
                    {/* <LoginFunc /> */}
                </Router>
            </div>
        );
    }
}

export default App;