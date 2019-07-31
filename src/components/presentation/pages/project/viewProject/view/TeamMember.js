import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './viewProject.css'
class TeamMember extends Component {
    render() {
        let typeLabel = (this.props.role === "leader") ? "danger" : "success"
        let level = (this.props.expYear<=3)?1:(this.props.expYear<=5)?2:(this.props.expYear<=7)?3:4
        return (          
          <div className="item">
          <div className="item-head">
            <div className="item-details">
              <img className="item-pic rounded"  src={this.props.avatar} alt = ""/>
              <Link to={`/engineer/${this.props.id}`} className="mt-action-author">{this.props.firstName} {this.props.lastName} </Link> <span className={"label label-sm label-default label-mini"}>SW {level}</span> <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span>   
            </div>
            <span className="item-status" style={{marginTop: "-10px"}} >
            <a href={"mailto:" +this.props.email} ><img alt = "" height="30px" width="30px" src = "../assets/img-icon/ui.png"/></a></span>
          </div>
        </div>
        );
    }
}
export default TeamMember;