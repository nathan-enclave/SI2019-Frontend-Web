import React, { Component } from 'react';
// import Chart from 'react-google-charts';
import Chart from "react-apexcharts";
import DashboardContainer from "../../../../container/dashboard";
import { ClipLoader } from 'react-spinners';
   

export default class ProjectStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load : true,
      options: {
        labels: ['Done', 'In progress', 'Pending']
      },
      series: [65, 35, 12]
    }
  }
  async componentDidMount() {
    const data = await DashboardContainer.getStatistic('dashboard/statistic/projects/status')
    const seriesData = []
    seriesData.push(data.done)
    seriesData.push(data.inProgress)
    seriesData.push(data.pending)
    this.setState({
      load: false,
      series: seriesData
    })
  }
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Project Status</span>
          </div>
        </div>
        {/* chart here */}
        <div >
        {this.state.load === true ? (
          <div className='sweet-loading d-flex justify-center middle-loading-custom' >
            <ClipLoader
              sizeUnit={"px"}
              size={70}
              color={'#7ed6df'}
              loading={this.state.loading} />
          </div>
        ) : (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="100%"
            // height="390"
          />
          )}
        </div>
      </div>
    );
  }
}