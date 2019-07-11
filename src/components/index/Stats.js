import React, { Component } from 'react';

class Stats extends Component {
  constructor(props){
    super(props)
  }
    render() {
        return (
            <div>
       
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a className="dashboard-stat dashboard-stat-v2 blue" href="abc">
              <div className="visual">
                <i className="fa fa-comments" />
              </div>
              <div className="details">
                <div className="number">
                  <span data-counter="counterup" >{this.props.engineer}</span>
                </div>
                <div className="desc"> Engineer </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a className="dashboard-stat dashboard-stat-v2 red" href="abc">
              <div className="visual">
                <i className="fa fa-bar-chart-o" />
              </div>
              <div className="details">
                <div className="number">
                  <span data-counter="counterup" >{this.props.team}</span>
                  </div>
                <div className="desc"> Team </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a className="dashboard-stat dashboard-stat-v2 green" href="abc">
              <div className="visual">
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="details">
                <div className="number">
                  <span data-counter="counterup" >{this.props.project}</span>
                </div>
                <div className="desc"> Project </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <a className="dashboard-stat dashboard-stat-v2 purple" href="abc">
              <div className="visual">
                <i className="fa fa-globe" />
              </div>
              <div className="details">
                <div className="number"> 
                  <span data-counter="counterup"  />{this.props.manager} </div>
                <div className="desc"> Manager </div>
              </div>
            </a>
          </div>
        </div>
        <div className="clearfix" />
      </div>
        );
    }
}

export default Stats;