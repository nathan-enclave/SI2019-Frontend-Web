import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './viewProject.css'

class TeamMember extends Component {
  render() {
    let typeLabel = (this.props.role === "leader") ? "danger" : "success"
    let level = (this.props.expYear <= 3) ? 1 : (this.props.expYear <= 5) ? 2 : (this.props.expYear <= 7) ? 3 : 4
    let years = (this.props.expYear <= 1) ? "year" : "years"
    return (
      <div className="mt-actions">
        <div className="mt-action">
          <div className="mt-action-img">
            <img width="50px" alt="" height="50px" src={this.props.avatar} /> </div>
          <div className="mt-action-body">
            <div className="mt-action-row">
              <div className="mt-action-info ">
                <div className="mt-action-details ">
                  <div className="style_prevu_kit" >
                    <Link to={`/engineer/${this.props.id}`} className="mt-action-author">{this.props.firstName} {this.props.lastName}
                    </Link>
                    <div> <span className={"label label-sm label-default label-mini"} > SW {level}</span> </div>
                    <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span>
                  </div>
                </div>
              </div>

              <div className="mt-action-buttons ">
                <i className=" icon-social-twitter font-dark hide" />
                <div>
                  <span className="caption-subject font-dark bold uppercase">Years Of Experience</span>
                </div>
                <br></br>
                <span>  {this.props.expYear} {years}   </span>
              </div>
              <div className="mt-action-buttons ">
                <i className=" icon-social-twitter font-dark hide" />
                <div>
                  <span className="caption-subject font-dark bold uppercase">Salary</span>
                </div>
                <br></br>
                <span >  {this.props.salary}    </span>
              </div>


              <div className="mt-action-buttons">
                <div className="btn-group">
                  <a type="button" href={"mailto:" + this.props.email} className="btn btn-outline red btn-sm">Send Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;