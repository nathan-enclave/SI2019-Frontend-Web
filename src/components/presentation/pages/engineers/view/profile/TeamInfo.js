import React, {Component} from 'react'
// import {Link} from 'react-router-dom'

export default class TeamInfo extends Component {
    
    render() {
        console.log(this.props.role)
        let color = (this.props.role ==="leader")?"danger":(this.props.role === "member")?"info":"success"
        return (
            <tr className="TeamInfo" >
                <td>
                   {/* <Link to={`/team/`+this.props.id}>  */}
                   {this.props.teamName}
                   {/* </Link> */}
                </td>
                <td>
                    {this.props.projectName}
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
