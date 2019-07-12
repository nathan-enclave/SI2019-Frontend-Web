import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Status extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            options: {
              labels: ['Available','In team']
            },
            series: [65,35],
            
          }
      }
    async componentDidMount(){
      const res = await fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/statistic/engineers/status');
      const data = await res.json();
      console.log(data)
      let seriesData = []     
      seriesData.push(data.available)
      seriesData.push(data.inTeam)      
      this.setState({
        series : seriesData
      })
    }

    render() {
        // console.log(this.state.statusEngineer.series)
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bar-chart font-dark hide" />
                        <span className="caption-subject font-dark bold uppercase">Engineer status</span>
                        <span className="caption-helper"></span>
                    </div>
                </div>
                {/* chart here */}
                <div>
                    <Chart options={this.state.options} series={this.state.series} type="donut" width="380" width="80%" />
                </div>
            </div>
        );
    }
}
export default Status;