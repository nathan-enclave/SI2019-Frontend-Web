import React, { Component } from 'react';
import { NavLink ,Redirect} from "react-router-dom";
import 'react-tagsinput/react-tagsinput.css';
import moment from 'moment';
import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";
import getData from '../../../../../container/project/GetDetailProject';
// import numeral from 'numeral'
import './viewProject.css'
import TeamMember from '../../../team/view/Overview/TeamMember';
import Chart from "react-apexcharts";
import { ClipLoader } from 'react-spinners';
import numeral from 'numeral'

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {},
            loading: true,
            teamData: "",
            id: this.props.match.params.id,
            category: "",
            engineers: [],
            team: "",
            status: "",
            updatedAt: "",
            data: null,
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: []
                },
                colors: ['#1491ff']
            },
            series: [
                {
                    name: "Milions",
                    data: []
                }
            ]
        };
    }
    async componentDidMount() {
        const teamInfor = await fetch('https://si-enclave.herokuapp.com/api/v1/teams/' + this.state.id)
        let teamInfo = await teamInfor.json()
        if(typeof(teamInfo.statusCode)!="undefined"){
            this.setState({error : true})   
          }
          else{
        let totalSalary = 0
        teamInfo.engineers.forEach(element => {
            totalSalary += element.salary
            // console.log(new Date(element.birthday).getFullYear())
        });

        this.setState({
            name: teamInfo.name,
            createdAt: teamInfo.createdAt,
            projectsId: teamInfo.projects.id,
            engineers: teamInfo.engineers,
            cashOut: totalSalary
        })
        let res = await getData(this.state.projectsId)
        this.setState({
            project: {
                id: res.id,
                name: res.name,
                technology: res.technology,
                description: res.description,
                team: res.team ? res.team.name : "Do not have team",
                teamId: res.team ? res.team.id : null,
                category: res.category.name,
            }
        });
        let catData = [], seriesData1 = [];
        teamInfo.engineers.forEach((element) => {
            catData.push(element.firstName)
            seriesData1.push(parseInt(element.salary / 1000000));
        });
        let teamTable = teamInfo.engineers.map((value, key) => {
            this.setState({
                options: {
                    ...this.state.options,
                    xaxis: {
                        categories: catData
                    },
                    yaxis: [
                        {
                            title: {
                                text: "Millions"
                            }
                        }
                    ],
                },
                series: [
                    {
                        name: "Milions",
                        data: seriesData1
                    }
                ],
            })

            return (
                <TeamMember
                    key={key}
                    id={value.id}
                    avatar={value.avatar}
                    email={value.email}
                    firstName={value.firstName}
                    lastName={value.lastName}
                    role={value.role}
                    expYear={value.expYear}
                    dateJoin={moment(value.dateJoin).format('DD/MM/YYYY')}
                    salary={numeral(value.salary).format('0,0') + " VND"}
                />
            )
        })
        this.setState({
            teamData: teamTable,
        })
    }
    }
    render() {
        if(this.state.error === true) return (<Redirect to = "/error/404"/>)
        let team = this.state.team === "Do not have team" ? (
            <div>
            </div>
        ) : (
                <ul className="feeds">
                    {this.state.teamData}
                </ul>
            )
        setTimeout(() => {
            this.setState({
                loadData: (
                    <div className="TeamDetail">
                        <div className="row">
                            <div className="col-lg-12 col-xs-12 col-md-12">
                                <div className="portlet light bordered">
                                    <div className="portlet-title">
                                        <div className="caption">
                                            <i className="icon-share font-dark hide"></i>
                                            <span className="caption-subject font-dark bold uppercase">{this.state.name}</span>
                                        </div>
                                    </div>
                                    <div className="portlet-body">
                                        {this.state.engineers.length < 4 ? (
                                            <div
                                                className="scroller"
                                                style={{
                                                    height: 'auto'
                                                }}
                                                data-always-visible="1"
                                                data-rail-visible="0">

                                                <ul className="feeds">
                                                    {team}


                                                </ul>
                                            </div>) : (
                                                <div
                                                    className="scroller1"
                                                    style={{
                                                        height: '300px'
                                                    }}
                                                    data-always-visible="1"
                                                    data-rail-visible="0">

                                                    <ul className="feeds">
                                                        {team}
                                                    </ul>
                                                </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-xs-12 col-md-6 ">
                                <div className="portlet light bordered">
                                    <div className="portlet-title tabbable-line">
                                            <i className="icon-bubbles font-dark hide" />
                                            <span className="caption-subject font-dark bold uppercase">BASIC INFORMATION ABOUT PROJECT </span>
                                    </div>
                                    <div className="portlet-body3" >
                                        <div className="tab-content">
                                            <div className="portlet-body">
                                                <div className="general-item-list">
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <NavLink to={`/project/${this.state.id}`} className="caption">
                                                                    <i className="icon-bubbles font-dark hide" />
                                                                    <span className="item-name">Project's Name</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                        <div className="mt-comment-text"> {this.state.project.name} </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <span className="item-name">Cash-out</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-comment-text"> {new Intl.NumberFormat().format(this.state.cashOut)} VND  </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="item-head">
                                                            <div className="item-details">
                                                                <span className="item-name">Description</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-comment-text"> {this.state.project.description}    </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="item-head">
                                                        <div className="item-details">
                                                            <span className="item-name">Technology</span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-comment-text"> {this.state.project.technology}    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-xs-12 col-md-6">
                                <div className="portlet light bordered">

                                    <div className="portlet-title tabbable-line">
                                        <div className="caption">
                                            <i className="icon-bar-chart font-dark hide" />
                                            <span className="caption-subject font-dark bold uppercase">Salary</span>
                                        </div>
                                    </div>
                                    {/* chart here */}

                                    <div className="portlet-body">
                                        <div className="SalaryChart" >
                                            <Chart
                                                options={this.state.options}
                                                series={this.state.series}
                                                type="bar"
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ),
                loading: false
            })
        }, 1000);
        return (
            <div className="ViewTeamDetail">
                {this.state.loading ?
                    (<div className="sweet-loading d-flex justify-center middle-loading-custom">
                        <ClipLoader
                            sizeUnit={"px"}
                            size={50}
                            color={'#7ed6df'}
                            loading={this.state.loading}
                        />
                    </div>) : this.state.loadData}
            </div>
        )
    }
}
export default EditForm;