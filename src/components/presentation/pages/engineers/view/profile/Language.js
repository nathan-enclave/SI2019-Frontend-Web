import React, {Component} from 'react';
import Chart from "react-apexcharts";

export default class Language extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    bar: {
                        // barHeight: '36px',
                        distributed: true,
                        horizontal: true,
                        dataLabels: {
                            position: 'bottom'
                        }
                    }
                },
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                
                colors: [
                    '#33b2df',
                    '#546E7A',
                    '#d4526e',
                    '#13d8aa',
                    '#A5978B',
                    '#2b908f',
                    '#f9a3a4',
                    '#90ee7e',
                    '#f48024',
                    '#69d2e7'
                ],
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
                    categories: this.props.data.map(e=>e.name)
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
               
                tooltip: {
                    theme: 'dark',
                    x: {
                        show: false,
                        // title: 'years'
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
            series: [
                {
                    data: this.props.data.map(e=>e.expYear)
                }
            ]
        }
    }
    render() {
        console.log(this.props.data);
        
        return (
            <div className="portlet light bordered">
                
                {/* chart here */}
                <div>
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        width="100%"
                        />
                </div>
                <div className="portlet-title text-center" >
                    {/* <div className="caption"> */}
                        <span className="caption-subject font-dark bold uppercase inline-block margin-top-15">Programming languages</span>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}
