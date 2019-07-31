import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { getAllApi } from "../../../../../api/crud";
import { ClipLoader } from 'react-spinners';

class HireLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            workingStatus: {
                options: {
                    colors: ['#00CECE', '#FFFF33'],
                    xaxis: {
                        categories: []
                    },
                },
                series: [
                    {
                        name: 'Hire',
                        type: 'column',
                        data: []
                    },
                    {
                        name: 'Left',
                        type: 'column',
                        data: []
                    },
                ]
            }
        }
    }
    async componentDidMount() {
        const data = await getAllApi('dashboard/workstatus/' + new Date().getFullYear())
        let cat = [], numHired = [], numLeft = []
        data.forEach(element => {
            cat.push(element.month)
            numHired.push(element.numHired)
            numLeft.push(element.numLeft)
        });
        this.setState({
            load: false,
            workingStatus: {
                options: {
                    xaxis: {
                        categories: cat
                    },
                    yaxis: [
                        {
                            title: {
                                text: "Engineer"
                            }
                        }
                    ]
                },
                series: [
                    {
                        name: 'Hire',
                        type: 'column',
                        data: numHired
                    },
                    {
                        name: 'Left',
                        type: 'column',
                        data: numLeft
                    },

                ]
            }
        })
    }
    render() {
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bar-chart font-dark hide" />
                        <span className="caption-subject font-dark bold uppercase">Hire/Left per month</span>
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
                        <Chart
                            options={this.state.workingStatus.options}
                            series={this.state.workingStatus.series}
                            type="bar"
                            width="100%"
                            height="300px"
                        />
                    )}
            </div>
        );
    }
}
export default HireLeft;