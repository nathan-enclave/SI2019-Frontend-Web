import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { getAllApi } from "../../../../../api/crud";
   

export default class ProjectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        labels: ['0-50M (VND)', '50-70M (VND)', '70-90M (VND)', '>90M (VND)'],
        colors: ['#8c7ae6', '#e67e22', '#432CD7', '#16a085'],
      },
      series: []
    }
  }
  async componentDidMount() {
    const data = await getAllApi('dashboard/statistic/salary/team')
    const seriesData = [data.lever1, data.lever2,data.lever3,data.lever4]
    this.setState({
      series: seriesData,

    })
  }
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Statistic Money</span>
          </div>
        </div>
        <div >
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="100%"
          />
        </div>
      </div>
    );
  }
}
