import React, { Component } from 'react';
import DatePicker from "react-datepicker";
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
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData : "",
      id: this.props.match.params.id,
      category: "",
      team: "",
      options: {
        labels: ['Earning', 'Total earning'],
        styles: {
          fontSize: '50px'
        },
        colors: ['#ee5253', '#ff9f43']
      },
      series: [20000000, 10513000000-20000000],
    };
  }
  async componentDidMount() {
    const res = await getData(this.state.id);
    console.log(res.category)
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
      teamId : res.team?res.team.id:null,
      category: res.category.name
    });
    if(res.team !== null){
    const res2 = await fetch('https://si-enclave.herokuapp.com/api/v1/teams/' + res.team.id)
    let teamInf = await res2.json();
    console.log(teamInf)
    let teamTable = teamInf.engineers.map((value,key)=>{
      return (
        <TeamMember 
        key={key}
        id = {value.id}
        avatar = {value.avatar}
        email = {value.email}
        firstName = {value.firstName}
        lastName = {value.lastName}
        role = {value.role}
        />
      )
    })
    this.setState({teamData : teamTable})
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
    return (<div className="portlet light bordered">
      <div className="portlet red box">
        <div className="portlet-title">
          <div className="caption">
            {this.state.name}    <span className={"label label-sm " + color} style={{ fontSize: "15px" }}> {this.state.status} </span></div>
          <div className="actions">
            <a href="javascript:;" className="btn btn-default btn-sm">
              <i className="fa fa-pencil" /> Edit </a>
          </div>
        </div>
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
                <div className="portlet-body1" >
                  <div className="tab-content">
                    <div className="portlet-body">
                      <div className="general-item-list">
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <span className="item-name" >Project name</span>
                            </div>
                          </div>
                          <div className="item"> {this.state.name}    </div>
                        </div>
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <span className="item-name">Category</span>
                            </div>
                          </div>
                          <div className="item"> {this.state.category}    </div>
                        </div>
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <span className="item-name">Description</span>
                            </div>
                          </div>
                          <div className="item"> {this.state.description}    </div>
                        </div>
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <span className="item-name">Technology</span>
                            </div>
                          </div>
                          <div className="item"> {this.state.technology}    </div>
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
                    <div className="portlet-body3">
                      <div className="general-item-list">
                        <div className="item-block">
                          <div className="item-head">
                            <div className="item-details">
                              <span className="item-name" >Earning (VND)</span>
                            </div>
                          </div>
                          <div className="mt-comment-text"> {this.state.earning}    </div>
                        </div>
                        <div className="item-last">
                          <div className="mt-comment">
                            <div className="item-details">
                              <span className="item-name">Earning/month (VND)</span>
                            </div>
                          </div>
                          <div className="mt-comment-text"> {this.state.earningPerMonth}    </div>
                        </div>
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
                <div className="portlet-body2" >
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
              <div className="portlet light bordered">
                <div className="portlet-title tabbable-line">
                  <div className="caption">
                    <i className=" icon-social-twitter font-dark hide" />
                    <span className="caption-subject font-dark bold uppercase">TEAM <Link to={"/teams/" + this.state.teamId} className={"label label-sm label-default"} style={{ fontSize: "15px" }}> {this.state.team} </Link></span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
export default EditForm;