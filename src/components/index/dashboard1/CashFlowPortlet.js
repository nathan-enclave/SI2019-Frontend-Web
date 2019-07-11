import React, { Component } from 'react';
import Chart from "react-apexcharts";

class CashFlowPortlet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#00CECE', '#FFFF33', '#FF5B5B'],
                chart: {
                    height: 350,
                    type: "line",
                    stacked: false
                },
                xaxis: {
                    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
                },
                yaxis: [
                    {
                        seriesName: 'Column A',
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                        },
                        title: {
                            text: "USD"
                        }
                    },
                    {
                        seriesName: 'Column A',
                        show: false
                    }, {
                        opposite: true,
                        seriesName: 'Line C',
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                        },
                        title: {
                            text: "Project"
                        }
                    }
                ]
            },
            series: [

                {
                    name: 'Cash in',
                    type: 'column',
                    data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
                },
                {
                    name: "Cash out",
                    type: 'column',
                    data: [10, 19, 27, 26, 34, 35, 40, 38]
                },
                {
                    name: "Number of project",
                    type: 'line',
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                },
            ]
        };

    }
    async componentDidMount(){
        const res = await fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/cashflow/' + new Date().getFullYear());
        const data = await res.json();
        console.log(data)
        let catData = [], seriesData1 =[], seriesData2 = [],seriesData3 = [];
        data.forEach(element => {
            catData.push(element.month)
            seriesData1.push(element.cashIn)
            seriesData2.push(element.cashOut)
            seriesData3.push(element.numOfProject)
        });
        this.setState({
            options :{
                xaxis: {
                    categories: catData
                }
            },
            series: [
                {                   
                    data: seriesData1
                },
                {                   
                    data: seriesData2
                },
                {                    
                    data: seriesData3
                },
            ]
        })

    }
    render() {
        // console.log(new Date().getFullYear());
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bar-chart font-dark hide" />
                        <span className="caption-subject font-dark bold uppercase">Cash flow</span>
                    </div>

                </div>
                {/* chart here */}
                <div >
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        height="300px"
                    />
                </div>

            </div>
        );
    }
}


export default CashFlowPortlet;