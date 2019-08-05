import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { getAllApi } from "../../../../../api/crud";
import { ClipLoader } from 'react-spinners';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      options: {
        labels: ['Available', 'In team', "On Vacation", "Absence"]  ,      
        colors: ['#e17055', '#fdcb6e', '#00b894', '#636e72']
      },
      series: [],
    }
  }
  async componentDidMount() {
    const data = await getAllApi('dashboard/statistic/engineers/status')
    const seriesData = []
    seriesData.push(data.available)
    seriesData.push(data.inTeam)
    seriesData.push(data.onVacation)
    seriesData.push(data.adsence)
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
            <span className="caption-subject font-dark bold uppercase">Engineer status</span>
            <span className="caption-helper"></span>
          </div>
        </div>
        {this.state.load === true ? (
          <div className='sweet-loading d-flex justify-center middle-loading-custom' >
            <ClipLoader
              sizeUnit={"px"}
              size={70}
              color={'#7ed6df'}
              loading={this.state.loading} />
          </div>
        ) : (
            <Chart options={this.state.options} series={this.state.series} type="pie" width="80%"  />
          )}
      </div>
    );
  }
}
export default Status;