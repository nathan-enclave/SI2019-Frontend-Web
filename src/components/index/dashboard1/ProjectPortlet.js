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
    const res = await fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/statistic/projects/earning/'+ new Date().getFullYear());
        const data = await res.json();
        // console.log(data.results)
        let catData = [], seriesData1 =[];
        data.results.forEach(element => {
            catData.push(element.name)
            seriesData1.push(element.earning/1000000)
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
              width="100%"
            />
        </div>

      </div>
    );
  }
}

export default ProjectPortlet;