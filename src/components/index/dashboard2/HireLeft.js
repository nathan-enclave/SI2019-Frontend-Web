import React, { Component } from 'react';
import Chart from "react-apexcharts";

class HireLeft extends Component {
    constructor(props) {
        super(props);

        const optionsWorkingStatusColumn = {

        };
        const seriesWorkingStatusColumn = [
            {
                name: 'Hire',
                type: 'column',
                data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
            },
            {
                name: 'Left',
                type: 'column',
                data: [101.1, 13, 13.1, 14, 14.1, 14.9, 16.5, 18.5]
            },

        ];
        this.state ={
            workingStatus: {
                options: optionsWorkingStatusColumn,
                series: seriesWorkingStatusColumn
              }
        }
    }

    render() {
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bar-chart font-dark hide" />
                        <span className="caption-subject font-dark bold uppercase">Overview</span>
                    </div>
                </div>
                {/* chart here */}
                <div>
                    <Chart
                        options={this.state.workingStatus.options}
                        series={this.state.workingStatus.series}
                        type="bar"
                        width="100%"
                        height="400"
                    />
                </div>
            </div>
        );
    }
}

export default HireLeft;