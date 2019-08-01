import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'react-tagsinput/react-tagsinput.css';
import Chart from "react-apexcharts";
import moment from 'moment';
import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";
import getData from '../../../../../container/project/GetDetailProject';
import numeral from 'numeral'
import './viewProject.css'
import TeamMember from './TeamMember';
import Timeline from './Timeline';
import { ClipLoader } from 'react-spinners';
import TeamContainer from "../../../../../container/team";
import ProjectContainer from "../../../../../container/project";
class ViewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: null,
      id: this.props.match.params.id,
      category: "",
      team: "",
      status: "",
      updatedAt: "",
      data: null,
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
            }
          },
          labels: {
            formatter: function (val) {
              return numeral(val).format('0,0')
            }
          }
        },
        colors: ['#33b2df', '#546E7A'],
        dataLabels: {
          formatter: function (val) {
            return numeral(val).format('0,0') + " VND"
          },
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
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
          categories: ["Earning", "Average "],
          labels: {
            style: {
              fontSize: '12px',
            },
            formatter: function (val) {
              return numeral(val).format('0,0')
            }
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              fontSize: "15px",
              color: "#0c5460"
            }
          }
        },
        // title: {
        //   text: 'Earning and the Average Earning',
        //   align: 'center',
        //   floating: true,
        //   style: {
        //     fontSize: "20px",
        //     color: "#0c5460"
        //   }
        // },
      },
      series: [{
        name: "number",
        data: []
      }]
    };
  }
  async componentDidMount() {
    const res = await getData(this.state.id);
    this.setState({
      id: res.id,
      name: res.name,
      technology: res.technology,
      description: res.description,
      start: moment(res.start).format('DD/MM/YYYY'),
      end: moment(res.end).format('DD/MM/YYYY'),
      earning: numeral(res.earning).format('0,0'),
      earningPerMonth: numeral(res.earningPerMonth).format('0,0'),
      status: res.status,
      updatedAt: moment(res.updatedAt).format('DD/MM/YYYY'),
      team: res.team ? res.team.name : null,
      teamId: res.team ? res.team.id : null,
      category: res.category.name,
      data: 0,
      timelineStart: moment(res.start).format('MM/DD/YYYY'),
      timelineEnd: moment(res.end).format('MM/DD/YYYY'),
    });
    if (res.team !== null) {
      const teamInf =  await TeamContainer.getById(res.team.id)
      let teamTable = teamInf.engineers.map((value, key) => {
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
          />
        )
      })
      this.setState({ teamData: teamTable })
    }
    // const ls = await ProjectContainer.getPagination(10000, 0,`"earning", "status"`)
    const listProject = await ProjectContainer.getPagination(10000, 0,`"earning", "status"`)
    let totalEarning = 0
    listProject.results.forEach(element => {
      totalEarning += element.earning
    });
    let averageEarning = Math.round(totalEarning / listProject.results.length)
    let color = res.status === "done" ? "#B5CEFD" : res.status === "inProgress" ? "#B8E7F5" : "#fab1a0"
    this.setState({
      options: {
        ...this.state.options,
        chart: {
          id: "basic-bar"
        },
        colors: [color, '#546E7A'],
      },
      series: [{
        name: "number",
        data: [res.earning, averageEarning]
      }]
    })
  }

  render() {
    let timeline = (this.state.status === "inProgress") ? (<div className="row">
      <div className="col-lg-12 col-xs-12 col-sm-12">
        <Timeline start={this.state.timelineStart} end={this.state.timelineEnd} startFor={this.state.start} endFor={this.state.end} />
      </div>
    </div>) : null
    let root = document.documentElement;
    if (this.state.status === "done") {
      root.style.setProperty('--bg', "#b5cefd7d")
      root.style.setProperty('--border', "#ff")
      root.style.setProperty('--boxColor', "#659be0")
    }
    if (this.state.status === "pending") {
      root.style.setProperty('--bg', "#fab1a047")
      root.style.setProperty('--border', "#ff")
      root.style.setProperty('--boxColor', "#ed6b75")
    }
    if (this.state.status === "inProgress") {
      root.style.setProperty('--bg', "#b8e7f596")
      root.style.setProperty('--border', "#ff")
      root.style.setProperty('--boxColor', "#36c6d3")
    }

    let color = null
    if (this.state.status === "done") {
      color = 'label-info'
    } else if (this.state.status === "inProgress") {
      color = 'label-success'
    } else if (this.state.status === 'pending') {
      color = 'label-danger'
    }
    let team = this.state.team === null ? (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption caption-md">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Team: </span>
          </div>
        </div>
        <div className="portlet-body">
          <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '338px' }}>
            <div className="scroller" style={{ height: '338px', overflow: 'hidden', width: 'auto' }}>
              <div className="general-item-list">
                Do not have team.
                    </div>
            </div></div>
        </div>
      </div>
    ) : (
        <div className="portlet light bordered ">
          <div className="portlet-title">
            <div className="caption caption-md">
              <i className="icon-bar-chart font-dark hide" />
              <span className="caption-subject font-dark bold uppercase">Team </span>
            </div>
          </div>
          <div className="team-btn"><Link to={"/team/" + this.state.teamId} className={"label label-sm " + color} style={{ fontSize: "13px" }}> {this.state.team} </Link></div>
          <div className="portlet-body scroll-member">
            <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '338px' }}>
              <div className="scroller" style={{ height: '338px', overflow: 'hidden', width: 'auto' }}>
                <div className="general-item-list mess">
                  {this.state.teamData}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    return (
      <div className="portlet light bordered ViewProject">
        {(this.state.data === null) ? (
          <div className='sweet-loading d-flex justify-center middle-loading-custom' >
            <ClipLoader
              sizeUnit={"px"}
              size={70}
              color={'#7ed6df'}
              loading={this.state.loading} />
          </div>
        ) : (
            <div className="portlet box custom color">
              <div className="portlet-title">
                <div className="head-name">
                  {this.state.name}   </div>
              </div>
              {timeline}
              <div className="portlet-body">
                <div className="row">
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light bordered">
                      <div className="portlet-title tabbable-line">
                        <div className="caption">
                          <i className="icon-bubbles font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">BASIC INFORMATION</span>
                        </div>
                      </div>
                      <div className="portlet-body-custom-color">
                        <div className="tab-content">
                          <div className="portlet-body">
                            <div className="general-item-list">
                              <div className="item">
                                <div className="item-head">
                                  <div className="item-details">
                                    <span className="item-name" >Project name</span>
                                  </div>
                                </div>
                                <div className="mt-comment-text"> {this.state.name}    </div>
                              </div>
                              <div className="item">
                                <div className="item-head">
                                  <div className="item-details">
                                    <span className="item-name">Status</span>
                                  </div>
                                </div>
                                <div className="mt-comment-text">  <span className={"label label-sm " + color} style={{ fontSize: "15px" }}> {this.state.status} </span>   </div>
                              </div>
                              <div className="item">
                                <div className="item-head">
                                  <div className="item-details">
                                    <span className="item-name">Category</span>
                                  </div>
                                </div>
                                <div className="mt-comment-text"> {this.state.category}    </div>
                              </div>
                              <div className="item">
                                <div className="item-head">
                                  <div className="item-details">
                                    <span className="item-name">Description</span>
                                  </div>
                                </div>
                                <div className="mt-comment-text"> {this.state.description}    </div>
                              </div>
                              <div className="item">
                                <div className="item-head">
                                  <div className="item-details">
                                    <span className="item-name">Technology</span>
                                  </div>
                                </div>
                                <div className="mt-comment-text"> {this.state.technology}    </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="portlet light bordered">
                        <div className="portlet light bordered">
                          <div className="portlet-title tabbable-line">
                            <div className="caption">
                              <i className="icon-bubbles font-dark hide" />
                              <span className="caption-subject font-dark bold uppercase">TIME</span>
                            </div>
                          </div>
                          <div className="portlet-bodyx">
                            <div className="tab-content">
                              <div className="table-main-pagination">
                                <div className="table-scrollable-custom">
                                  <table className="table table-striped table-bordered table-advance table-hover">
                                    <thead>
                                      <tr>
                                        <th width="50%">Start </th>
                                        <th>End </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th width="50%">{this.state.start} </th>
                                        <th >{this.state.end} </th>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 col-sm-12">
                    <div className="portlet light bordered">
                      <div className="portlet-title tabbable-line">
                        <div className="caption">
                          <i className=" icon-social-twitter font-dark hide" />
                          <span className="caption-subject font-dark bold uppercase">Earning </span>
                        </div>
                      </div>
                      <div className="portlet-bodyx">
                        <div className="tab-content">
                          <div className="tab-content">
                            <div className="table-main-pagination">
                              <div className="table-scrollable-custom">
                                <table className="table table-striped table-bordered table-advance table-hover">
                                  <thead>
                                    <tr>
                                      <th width="50%">Project budget </th>
                                      <th>Earning Per Month </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th width="50%">{this.state.earning} VND</th>
                                      <th >{this.state.earningPerMonth} VND</th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Chart
                              options={this.state.options}
                              series={this.state.series}
                              type="bar"
                              width="100%"
                              height="200px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {team}
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    )
  }
}
export default ViewProject;