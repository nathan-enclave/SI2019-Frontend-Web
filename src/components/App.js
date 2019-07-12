import React from 'react';
import RouterURL from './router/RouterURL';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import LeftBar from './LeftBar';
import Footer from './Footer';
import {Redirect } from 'react-router'

function App() {
    
   
    if (!localStorage.getItem('userData')) {
        
        return (
            <div >
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
                    {/* <LoginFunc /> */}
                </Router>
            </div>
        );
    }
}

export default App;