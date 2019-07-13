import React, { Component } from 'react';
// import Chart from 'react-google-charts';
import Chart from "react-apexcharts";

class StatProject extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            options: {
              labels: ['Done','In progress','Pending']
            },
            series: [65,35],
            
          }
      }
    async componentDidMount(){
      const res = await fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/projects?limit=10&offset=0');
      const data = await res.json();
      console.log(data)
      let seriesData = []     
      seriesData.push(data.done)
      seriesData.push(data.inProgress)
      seriesData.push(data.pending)
      this.setState({
        series : seriesData
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
        <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="80%"
              height="400px"
            />
        </div>

      </div>
    );
  }
}

export default StatProject;