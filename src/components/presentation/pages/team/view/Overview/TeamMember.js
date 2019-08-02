import React, {Component} from 'react';
import {Link} from "react-router-dom";
// import './viewProject.css'

class TeamMember extends Component {
    render() {
        let typeLabel = (this.props.role === "leader")
            ? "danger"
            : "success"
        let level = (this.props.expYear <= 3)
            ? 1
            : (this.props.expYear <= 5)
                ? 2
                : (this.props.expYear <= 7)
                    ? 3
                    : 4
        return (
            <li>
                <div class="col1">
                    <div class="cont">
                        <div class="cont-col1">
                            <div class="label label-sm label-info">
                                <i class="fa fa-check"></i>
                            </div>
                        </div>
                        <div class="cont-col2">
                            <div class="desc">
                                You have 4 pending tasks.
                                <span class="label label-sm label-warning ">
                                    Take action
                                    <i class="fa fa-share"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col2">
                    <div class="date">
                        Just now
                    </div>
                </div>
            </li>
        );
    }
}

export default TeamMember;