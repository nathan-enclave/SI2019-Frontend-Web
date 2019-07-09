import React, { Component } from 'react';
// import Chart from 'react-google-charts';
import Chart from "react-apexcharts";

class Portlet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [-30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Overview</span>
            <span className="caption-helper">weekly stats...</span>
          </div>

        </div>
        {/* chart here */}
        <div >
        <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
        </div>

      </div>
    );
  }
}

export default Portlet;