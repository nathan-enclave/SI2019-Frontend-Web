import React, { Component } from 'react';
// import Chart from 'react-google-charts';
import Chart from "react-apexcharts";

class Receivable extends Component {
    constructor(props) {
        super(props);
    
       
        this.state = {
            options: {},
            series: [65,35],
            labels: ['A']
          }
      }
    
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Receivable</span>
          </div>

        </div>
        {/* chart here */}
        <div >
        <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
            />
        </div>

      </div>
    );
  }
}

export default Receivable;