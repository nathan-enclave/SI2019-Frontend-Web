import React, { Component } from 'react';
import Chart from "react-apexcharts";
import Stats from './Stats';
import HireLeft from './HireLeft';
import Languages from './Languages';
import Status from './Status';

class Dashboard2 extends Component {
   
    render() {
        return ( 
          <div className="Dashboard2">
           <Stats />           
            <div className="row">
              <div class="col-lg-12 col-xs-12 col-sm-12">
            <HireLeft />
              </div>
            </div>
            <div className="row">
              <div class="col-lg-6 col-xs-12 col-sm-12">
                <Languages />
              </div>
              <div class="col-lg-6 col-xs-12 col-sm-12">
                <Status />
              </div>
            </div>
          </div>
        );
    }
}
export default Dashboard2;