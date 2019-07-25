import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

export default class TeamInfo extends Component {
    render() {
        let typeLabel = (this.props.role === "leader") ? "danger" : "success"
        return (
            
            <tr className="TeamInfo">
                <td>
                  <NavLink to={`/engineer/${this.props.id}`}> {this.props.firstName} { this.props.lastName} </NavLink>
                </td>
                <td className="font-blue-madison">
                  {this.props.exp}
                </td>
                <td>
                   <NavLink to={"mailto:" + this.props.email}>
                        {this.props.email} </NavLink>
                </td>
                <td>
                    <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span>
                </td>
            </tr>
        )
    }
}
