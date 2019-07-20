import React, {Component} from 'react'

export default class TeamInfo extends Component {
    render() {
        return (
            <tr className="TeamInfo">
                <td>
                    {this.props.teamName}
                </td>
                <td>
                    {this.props.projectName}
                </td>
                <td>
                    <span className="label label-danger label-sm">
                        {this.props.role}
                    </span>
                </td>
            </tr>
        )
    }
}
