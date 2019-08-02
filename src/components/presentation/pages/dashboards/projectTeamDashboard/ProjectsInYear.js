import React, {Component} from 'react'
import Chart from "react-apexcharts";
import DashboardContainer from "../../../../container/dashboard";
import { ClipLoader } from 'react-spinners';
export default class ProjectsInYear extends Component {
    constructor(props) {
        super(props)
        this.state = {
            load : true,
            options: {
                plotOptions: {
                    bar: {
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        }
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
                },
                yaxis: [
                    {
                        title: {
                            text: "Number of projects"
                        }
                    }
                ],
                fill: {
                    colors: ['#273c75']
                },
                title: {
                    text: 'Projects in 2019',
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
                    name: 'Number of projects',
                    data: [
                        3,
                        4,
                        6,
                        1,
                        4,
                        7,
                        9,
                        1,
                        2,
                        10,
                        22,
                        2
                    ]
                }
            ]
        }
    }
    async componentDidMount() {
        let projectInYear = await DashboardContainer.getStatistic(`dashboard/statistic/projects/perMonth?year=${new Date().getFullYear()}`)
        projectInYear = projectInYear.map(e => e.numProject)
        this.setState({
            load : false,
            series: [
                {
                    name: "Number of projects",
                    data: projectInYear
                }
            ]
        })
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
                            height="350"/>
        )}
                    </div>
                </div>
            </div>
        )
    }
}
