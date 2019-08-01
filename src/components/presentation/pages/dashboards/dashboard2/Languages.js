import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { getAllApi } from "../../../../../api/crud";
import { ClipLoader } from 'react-spinners';

class Languages extends Component {
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
                colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e', '#f48024', '#69d2e7', '#FFFFA6', '#8080C0', '#FFC488'],
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
                    text: 'Languages',
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

        const data = await getAllApi('skills/statistic/ratio')

        let categoriesData = []
        let seriesData = []
        data.forEach(element => {
            categoriesData.push(element.name);
            seriesData.push(element.count)
        });
        this.setState({
            load: false,
            options: {
                ...this.state.options,
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: categoriesData
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
                        <span className="caption-subject font-dark bold uppercase">Programming languages</span>
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
                            height="500px"
                        />
                    )}
            </div>
        );
    }
}
export default Languages;