import React, { Component } from 'react';
import Chart from "react-apexcharts";
// import { getAllApi } from "../../../../../api/crud";
   

export default class ProjectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        labels: ['Tourism', 'Business', 'Education', 'Healthcare', 'Management']
      },
      series: [14, 24, 25, 25, 40]
    }
  }
  async componentDidMount() {
    // const data = await getAllApi('dashboard/projects')
    // const seriesData = []
    // seriesData.push(data.done)
    // seriesData.push(data.inProgress)
    // seriesData.push(data.pending)
    // this.setState({
    //   series: seriesData
    // })
  }
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Project by category</span>
          </div>
        </div>
        {/* chart here */}
        <div >
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="100%"
            height="390"
          />
        </div>
      </div>
    );
  }
}