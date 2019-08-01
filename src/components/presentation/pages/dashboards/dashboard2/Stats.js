import React, { Component } from 'react';
import numeral from 'numeral'
import { getAllApi } from "../../../../../api/crud";
import "./dashboard2.css"

class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSalary: 0,
      avgSalary: 0,
      avgAge: 0,
      total: 0
    }
  }
  async componentDidMount() {

    const data = await getAllApi('dashboard/salary')
    const totalEng = await getAllApi('dashboard/total')
    this.setState({
      totalSalary: data.totalSalary / 1000000,
      avgSalary: parseFloat(data.avgSalary / 1000000).toFixed(2),
      avgAge: data.avgAge,
      total: totalEng.engineer
    })
  }
  render() {
    return (
      <div className="overview-engineer">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase" style={{ fontSize: "18px" }}>Overall statistic</span>
          </div>
          <br />
        </div>
        <div className="row overview-hr widget-row">
          {/* Total Engineer */}
          <div className="col-md-3">
            <div className="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
              <h4 className="widget-thumb-heading">Total engineer</h4>
              <div className="widget-thumb-wrap">
                <i className="widget-thumb-icon bg-green fa fa-user"></i>
                <div className="widget-thumb-body">
                  <span className="widget-thumb-subtitle">Engineers</span>
                  <span className="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{numeral(this.state.total).format('0,0')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
              <h4 className="widget-thumb-heading">Total salary</h4>
              <div className="widget-thumb-wrap">
                <i className="widget-thumb-icon bg-red fa fa-money"></i>
                <div className="widget-thumb-body">
                  <span className="widget-thumb-subtitle">VND</span>
                  <span className="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{numeral(this.state.totalSalary).format('0,0')} M</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
              <h4 className="widget-thumb-heading">Average salary</h4>
              <div className="widget-thumb-wrap">
                <i className="widget-thumb-icon bg-purple fa fa-money"></i>
                <div className="widget-thumb-body">
                  <span className="widget-thumb-subtitle">VND</span>
                  <span className="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{numeral(this.state.avgSalary).format('0,0')} M</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
              <h4 className="widget-thumb-heading">Average age</h4>
              <div className="widget-thumb-wrap">
                <i className="widget-thumb-icon bg-blue icon-bulb"></i>
                <div className="widget-thumb-body">
                  <span className="widget-thumb-subtitle"></span>
                  <span className="widget-thumb-subtitle">Years old</span>
                  <span className="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{numeral(this.state.avgAge).format('0,0')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Stats;