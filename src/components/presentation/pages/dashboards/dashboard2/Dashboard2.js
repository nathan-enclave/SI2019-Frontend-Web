import React, { Component } from 'react';
import Stats from './Stats';
import HireLeft from './HireLeft';
import Languages from './Languages';
import Status from './Status';
import Gender from './Gender';
import Level from './Level'

class Dashboard2 extends Component {
  render() {
    return (
      <div className="Dashboard2">
        <Stats />
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Level />
          </div>
          <div className="col-lg-6 col-md-12">
            <Status />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <HireLeft />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <Gender />
          </div>
          <div className="col-lg-6 col-md-12">
            <Languages />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard2;