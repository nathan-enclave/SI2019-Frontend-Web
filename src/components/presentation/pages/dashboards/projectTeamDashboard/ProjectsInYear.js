import React, {Component} from 'react'
import Chart from "react-apexcharts";

export default class ProjectsInYear extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: {
                plotOptions: {
                    bar: {
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    }
                },
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    position: 'top',
                    labels: {
                        offsetY: -18
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [
                                    0, 100
                                ],
                                opacityFrom: 0.4,
                                opacityTo: 0.5
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                        offsetY: -35
                    }
                },
                fill: {
                    gradient: {
                        shade: 'light',
                        type: "horizontal",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [50, 0, 100, 100]
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    yaxis: [
                        {
                            title: {
                                text: "Number of project"
                            }
                        }
                    ]
                },
                title: {
                    text: 'Monthly Inflation in Argentina, 2002',
                    floating: true,
                    offsetY: 320,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            },
            series: [
                {
                    name: 'Inflation',
                    data: [
                        2.3,
                        3.1,
                        4.0,
                        10.1,
                        4.0,
                        3.6,
                        3.2,
                        2.3,
                        1.4,
                        0.8,
                        0.5,
                        0.2
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <div className="ProjectInYear">
                <div className="col-sm-12">
                    <div className="portlet light bordered">
                        <div className="portlet-title">
                            <div className="caption">
                                <i className="icon-bar-chart font-dark hide"/>
                                <span className="caption-subject font-dark bold uppercase">Projects in 2019</span>
                            </div>
                        </div>
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            height="350"/>
                    </div>
                </div>
            </div>
        )
    }
}
