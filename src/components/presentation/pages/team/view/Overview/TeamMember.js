import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './viewProject.css'

class TeamMember extends Component {
  render() {
    let typeLabel = (this.props.role === "leader") ? "danger" : "success"
    let level = (this.props.expYear <= 3) ? 1 : (this.props.expYear <= 5) ? 2 : (this.props.expYear <= 7) ? 3 : 4
    return (
      <div>
        <li className="row">
          <div
            className="col-xs-1 padding-bottom-sm padding-top-sm text-center " style={{
              'display': 'flex',
              'justifyContent': 'center',
          }} >
            <div className="avatar">
              <img width="50px" alt="" height="50px" src={this.props.avatar}/>
            </div>
          </div>

          <div className="col-xs-2 padding-bottom-sm padding-top-sm text-center">
            <div>
              <span>
                <Link to={`/engineer/${this.props.id}`} className="mt-action-author">
                {this.props.firstName} {this.props.lastName}
                </Link>
                <div> <span className={"label label-sm label-info label-mini"} > SW {level}</span> </div>
              </span>
            </div>
          </div>

          <div className="col-xs-2 padding-bottom-sm padding-top-sm text-center">
            <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span>
          </div>
          <div className="col-xs-3 padding-bottom-sm padding-top-sm text-center padding-left-sm padding-right-sm">
            <span>
              <div className="fa fa-money ss" aria-hidden="true"></div>
              Salary: {this.props.salary}
            </span>
          </div>

          <div className="col-xs-2 padding-bottom-sm padding-top-sm text-center">
            <span >
              <i className="fa fa-calendar ss" aria-hidden="true" ></i>
              Date Join: {this.props.dateJoin}
            </span>
          </div>

          <div className="col-xs-2 padding-bottom-sm padding-top-sm text-center">
            <div className="btn-group">
              <a type="button" href={"mailto:" + this.props.email} className="btn btn-outline red btn-sm">Send Email</a>
            </div>
          </div>

        </li>
      </div>
    );
  }
}

export default TeamMember;