import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { getAllApi } from "../../../../../api/crud";
import { ClipLoader } from 'react-spinners';

class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            options: {
                chart: {
                    height: 380,
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        barHeight: '100%',
                        distributed: true,
                        horizontal: true,
                        dataLabels: {
                            position: 'bottom'
                        },
                    }
                },
                colors: ['#C44000', '#FF6B24', '#FFAE88', '#FFCFB9'],
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        colors: ['#fff']
                    },
                    formatter: function (val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: true
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: [],
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                title: {
                    text: 'Level of engineer',
                    align: 'center',
                    floating: true
                },
                tooltip: {
                    theme: 'dark',
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return ''
                            }
                        }
                    }
                }
            },
            series: [{
                name: "number",
                data: []
            }]
        }
    }
    async componentDidMount() {

        const data = await getAllApi('dashboard/statistic/engineers/salary')
        let seriesData = [data.lever4,data.lever3,data.lever2,data.lever1]    
        this.setState({
            load: false,
            options: {
                ...this.state.options,
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ["8-10","10-15","15-20",">20"]
                }
            },
            series: [{
                name: "number",
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
                        <span className="caption-subject font-dark bold uppercase">Level</span>
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
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="100%"
                            height="250px"
                        />
                    )}
            </div>
        );
    }
}
export default Level;