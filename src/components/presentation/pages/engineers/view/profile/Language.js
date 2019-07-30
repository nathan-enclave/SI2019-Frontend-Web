import React, {Component} from 'react';
import Chart from "react-apexcharts";
import './Profile.css'

export default class Language extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    bar: {
                        // barHeight: '200px',
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
                 title: {
                    text: 'Skills',
                    align: 'center',
                    floating: true
                },                       
                tooltip: {
                    theme: 'dark',
                    x: {
                        show: false,
                        title: 'years'
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
        let heightValue = (this.props.data.length*30 + 100) + "px"
        return (
            // <div className="portlet">       
            //  <div className="portlet text-center" >
            //             <span className="caption-subject font-dark bold uppercase inline-block margin-top-15">Skills</span>
            //     </div>         
            //     <div>
            //         <Chart
            //             options={this.state.options}
            //             series={this.state.series}
            //             type="bar"
            //             width="500px"
            //             height = {heightValue}
            //             />
            //     </div>
               
            // </div>
            <div className="tabbable-line tabbable-custom-profile">
            <ul className="nav nav-tabs">
              <li className="active">
              <span className="caption-subject font-dark bold uppercase inline-block margin-top-15">Skills</span>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="tab_1_11">
                <div className="tab-content-chart">
                <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        width="100%"
                        height = {heightValue}
                        />
                </div>
              </div>
            </div>
          </div>
        );
    }
}
