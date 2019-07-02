import React, { Component } from 'react';
import Action from './Action';
import Stats from './Stats';
import Portlet from './Portlet';

class Index extends Component {
 
    render() {
      console.log(sessionStorage.getItem('userData'));
        return (
        <div>
                  <Stats />
                <div className="col-lg-6 col-xs-12 col-sm-12">
                    <Action />
                </div>
                <div className="col-lg-6 col-xs-12 col-sm-12">
                  <Portlet />
                </div>
                    
        </div>
        );
    }
}

export default Index;