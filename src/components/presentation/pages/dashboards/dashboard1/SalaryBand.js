import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { getAllApi } from "../../../../../api/crud";
import { ClipLoader } from 'react-spinners';

class SalaryBand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load : true,
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: []
        },
        yaxis:[
          {
          title: {
              text: "Employees"
              }
          }
      ],
        colors: ['#00BFFF', '#B4CDCD', '#009ACD', '#00688B'],
        
      },
      series: [
        {
          name: "Milions",
          data: []
        }
      ]
    };
  }
  async componentDidMount() {
    const data = await getAllApi('dashboard/statistic/engineers/salary')
    let seriesData = [data.lever1,data.lever2,data.lever3,data.lever4]    
    this.setState({
        load: false,
        options: {
            ...this.state.options,
            load : false,
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["8-10M (VND)","10-15M (VND)","15-20M (VND)",">20M (VND)"]
            }
        },
        series: [{
            name: "Number",
            data: seriesData
        }]
    })
  }
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Salary Band</span>
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
            type="bar"
            width="100%"
          />)}
        </div>
      </div>
    );
  }
}
export default SalaryBand;