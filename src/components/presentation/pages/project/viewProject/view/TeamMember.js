import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './viewProject.css'

class TeamMember extends Component {
    render() {
        let typeLabel = (this.props.role === "leader") ? "danger" : "success"
        return (          
            <div className="mt-actions">
            <div className="mt-action">
              <div className="mt-action-img">
                <img width= "50px" alt="" height="50px" src={this.props.avatar} /> </div>
              <div className="mt-action-body">
                <div className="mt-action-row">
                  <div className="mt-action-info ">
                    <div className="mt-action-details ">
                    <div className ="style_prevu_kit" >
                      <Link to={`/engineer/${this.props.id}`} className="mt-action-author">{this.props.firstName} {this.props.lastName}</Link> <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span>
                    </div>
                    </div>
                  </div>
                  <div className="mt-action-buttons">
                    <div className="btn-group">
                      <a type="button" href={"mailto:" +this.props.email} className="btn btn-outline red btn-sm">Send Email</a>
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