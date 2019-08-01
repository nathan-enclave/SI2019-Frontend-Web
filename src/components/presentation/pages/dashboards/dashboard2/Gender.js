import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { getAllApi } from "../../../../../api/crud";
import { ClipLoader } from 'react-spinners';

export default class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      options: {
        labels: ['Male', 'Female', "Other"]  ,      
        colors: ['#0abde3', '#ff9ff3', '#1dd1a1']
      },
      series: [],
    }
  }
  async componentDidMount() {
    const data = await getAllApi('dashboard/statistic/engineers/gender')
    const seriesData = []
    seriesData.push(data.Male)
    seriesData.push(data.Female)
    seriesData.push(data.Other)
   
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
            <span className="caption-subject font-dark bold uppercase">Engineer Genders</span>
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
            <Chart options={this.state.options} series={this.state.series} type="pie" width="100%" />
          )}
      </div>
    );
  }
}