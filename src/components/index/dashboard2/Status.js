import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Status extends Component {
    constructor(props) {
        super(props);

        const optionsStatusEngineer = {
            colors: ['#2da68a', '#bfacac'],
            labels: ['On Team', 'Free']
        }
        const seriesStatusEngineer = [200, 25]

        this.state = {
            statusEngineer: {
                options: optionsStatusEngineer,
                series: seriesStatusEngineer
            }
        };
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
                {/* chart here */}
                <div>
                    <Chart options={this.state.statusEngineer.options} series={this.state.statusEngineer.series} type="donut" width="380" width="80%" />
                </div>
            </div>
        );
    }
}
export default Status;