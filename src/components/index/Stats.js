import React, { Component } from 'react';

class Stats extends Component {
  render() {
    return (
      <div className="Stats">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="dashboard-stat dashboard-stat-v2 blue">
              <div className="visual">
                <i className="fa fa-comments" />
              </div>
              <div className="details">
                <div className="number">
                  <span data-counter="counterup" >{this.props.engineer}</span>
                </div>
                <div className="desc"> Engineers </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="dashboard-stat dashboard-stat-v2 red">
              <div className="visual">
                <i className="fa fa-bar-chart-o" />
              </div>
              <div className="details">
                <div className="number">
                  <span data-counter="counterup" >{this.props.team}</span>
                  </div>
                <div className="desc"> Teams </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="dashboard-stat dashboard-stat-v2 green">
              <div className="visual">
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="details">
                <div className="number">
                  <span data-counter="counterup" >{this.props.project}</span>
                </div>
                <div className="desc"> Projects </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="dashboard-stat dashboard-stat-v2 purple">
              <div className="visual">
                <i className="fa fa-globe" />
              </div>
              <div className="details">
                <div className="number"> 
                  <span data-counter="counterup"  />{this.props.manager} </div>
                <div className="desc"> Managers </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Stats;