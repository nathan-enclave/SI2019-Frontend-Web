import {Link} from "react-router-dom";
import React, {Component} from 'react'
import moment from 'moment'
export default class DeadlineRow extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let style = 'pending-color'
        if (this.props.data.status === 'inProgress') {
            style = 'inProgress-color'
        }
        if (this.props.data.status === 'done') {
            style = 'done-color'
        }
        return (
            <li className="row DeadlineRow">
                <div
                    className="col-xs-3 padding-bottom-sm padding-top-sm text-center deadline-project custom-center-row padding-right-sm padding-left-sm">
                    <Link to={`/project/${this.props.data.project.id}`}>
                        <span>
                            {this.props.data.project.name}
                        </span>
                    </Link>

                </div>
                <div
                    className="col-xs-3 padding-bottom-sm padding-top-sm text-center custom-center-row">
                    {this.props.data.team
                        ? (
                            <Link to={`/team/${this.props.data.team.teamId}`}>
                                <span>
                                    {this.props.data.team
                                        ? this.props.data.team.teamName
                                        : 'No team'}
                                </span>
                            </Link>
                        )
                        : 'No team'}

                </div>
                <div
                    className="col-xs-3 padding-bottom-sm padding-top-sm text-center padding-left-xs padding-right-xs  deadline-project custom-center-row">
                    <span>
                        {moment(this.props.data.end).format("DD/MM/YYYY")}
                    </span>

                </div>
                <div
                    className="col-xs-3 padding-bottom-sm padding-top-sm text-center custom-center-row">
                    <span className={`label label-sm ${style} deadline-label`}>
                        {this.props.data.status}
                    </span>
                </div>
            </li>
        )
    }
}
