import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
export default class TeamInfo extends Component {
    
    render() {
        let color = (this.props.role === "leader") ? "danger" :(this.props.role ==="quality assurance")?"info": "success"
        return (
            <tr className="TeamInfo" >
                <td>
                  <div className="row">
                  <Link to={`/team/`+this.props.teamId}> 
                   {this.props.teamName}
                   </Link>
                  </div>
                  <div className="row">
                    <span className="small-note">Join at:  {moment(this.props.dateJoin).format('DD/MM/YYYY')}</span>
                  </div>
                </td>
                <td>
                <div className="row">
                <Link to={`/project/`+this.props.projectId}> 
                   {this.props.projectName}
                   </Link>
                </div>
                <div className="row">
                <span className="small-note">Start at: {moment(this.props.projectStartDay).format('DD/MM/YYYY')}</span>
                </div>
                </td>
                <td>
                    <span className={"label label-"+color +" label-sm"}>
                        {this.props.role}
                    </span>
                </td>
            </tr>
        )
    }
}
