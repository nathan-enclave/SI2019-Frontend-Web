import React, { Component } from 'react';
import Chart from "react-apexcharts";

class ProjectPortlet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "series-1",
          data: []
        }
      ]
    };
  }
  async componentDidMount(){
    const res = await fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/cashflow/' + new Date().getFullYear());
        const data = await res.json();
        console.log(data)
        let catData = [], seriesData1 =[];
        data.forEach(element => {
            catData.push(element.month)
            seriesData1.push(element.numOfProject)
           ;
        });
        this.setState({
          options:{
            xaxis: {
              categories : catData
            }
          },
          series: [{
            data : seriesData1
          }]
        })

  }
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Project</span>
          </div>

        </div>
        {/* chart here */}
        <div >
        <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
        </div>

      </div>
    );
  }
}

export default ProjectPortlet;