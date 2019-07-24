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
import Preloader from '../../../../include/Preloader'
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: "",
      id: this.props.match.params.id,
      category: "",
      team: "",
      status: "",
      updatedAt: "",
      data: null,
      options: {
        labels: ['Earning', 'Total earning'],
        styles: {
          fontSize: '50px'
        },
        colors: ['#ee5253', '#ff9f43']
      },
      series: [20000000, 10513000000 - 20000000],
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
      team: res.team ? res.team.name : "Do not have team",
      teamId: res.team ? res.team.id : null,
      category: res.category.name,
      data: 0
    });
    if (res.team !== null) {
      const res2 = await fetch('https://si-enclave.herokuapp.com/api/v1/teams/' + res.team.id)
      let teamInf = await res2.json();
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
          />
        )
      })
      this.setState({ teamData: teamTable })
    }
  }
  render() {
    let color = null
    if (this.state.status === "done") {
      color = 'label-info'
    } else if (this.state.status === "inProgress") {
      color = 'label-success'
    } else if (this.state.status === 'pending') {
      color = 'label-warning'
    }
    let team = this.state.team === "Do not have team" ? (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption">
            <i className=" icon-social-twitter font-dark hide" />
            <span className={"label label-sm label-default"} style={{ fontSize: "15px" }}> {this.state.team} </span>
          </div>
        </div>
      </div>
    ) : (
        <div className="portlet light bordered">
          <div className="portlet-title tabbable-line">
            <div className="caption">
              <i className=" icon-social-twitter font-dark hide" />
             <Link to={"/teams/" + this.state.teamId} className={"label label-sm label-default"} style={{ fontSize: "15px" }}> {this.state.team} </Link>
            </div>
          </div>
          <div className="portlet-body4">
            <div className="tab-content">
              <div className="tab-pane active" id="tab_actions_pending">
                {this.state.teamData}
              </div>
            </div>
          </div>
        </div>
      )
    let loadData = (this.state.data !== null) ? (
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
              <div className="portlet-body3" >
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
                <div className="portlet-title tabbable-line">
                  <div className="caption">
                    <i className=" icon-social-twitter font-dark hide" />
                    <span className="caption-subject font-dark bold uppercase">finance</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <div className="tab-content">
                    <div className="table-main-pagination">
                      <div className="table-scrollable">
                        <table className="table table-striped table-bordered table-advance table-hover">
                          <thead>
                            <tr>
                              <th >Earning </th>
                              <th>Earning Per Month </th>
                            </tr>
                          </thead>
                          <tbody>
                              <th >{this.state.earningPerMonth} </th>                         
                              <th >{this.state.earning} </th>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="portlet light bordered">
                    <div className="portlet-title tabbable-line">
                      <div className="caption">
                        <i className="icon-bubbles font-dark hide" />
                        <span className="caption-subject font-dark bold uppercase">TIME</span>
                      </div>
                    </div>
                    <div className="portlet-body3" >
                      <div className="tab-content">
                        <div className="portlet-body">
                          <div className="general-item-list">
                            <div className="item-block">
                              <div className="item-head">
                                <div className="item-details">
                                  <span className="item-name" >Start</span>
                                </div>
                              </div>
                              <div className="mt-comment-text"> {this.state.start}    </div>
                            </div>
                            <div className="item-last">
                              <div className="mt-comment">
                                <div className="item-details">
                                  <span className="item-name">End</span>
                                </div>
                              </div>
                              <div className="mt-comment-text"> {this.state.end}    </div>
                            </div>
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
                    <span className="caption-subject font-dark bold uppercase">ratio</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <div className="tab-content">
                    <div>
                      <Chart options={this.state.options} series={this.state.series} type="pie" width="70%" />
                    </div>
                  </div>
                </div>
                {team}
              </div>
            </div>
          </div>
        </div>
        ) : <Preloader styleCustom={"unset"} />
        return (
      <div className="portlet light bordered">
          <div className="portlet red box">
            <div className="portlet-title">
              <div className="caption">
                {this.state.name}   </div>
            </div>
            {loadData}
          </div>
        </div>)
    }
  }
export default EditForm;