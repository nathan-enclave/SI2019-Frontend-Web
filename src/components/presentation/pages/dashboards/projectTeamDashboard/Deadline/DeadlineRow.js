import React, {Component} from 'react'

export default class DeadlineRow extends Component {
    render() {
        return (
            <li className="row DeadlineRow">
                <div
                    className="col-xs-3 padding-bottom-sm padding-top-sm text-center deadline-project">
                    <span>
                        Project 1
                    </span>
                </div>
                <div className="col-xs-3 padding-bottom-sm padding-top-sm text-center">
                    <span>
                        Team 1
                    </span>

                </div>
                <div
                    className="col-xs-3 padding-bottom-sm padding-top-sm text-center padding-left-sm padding-right-sm  deadline-project">
                    <span>
                        Aug 24th 2019
                    </span>

                </div>
                <div className="col-xs-3 padding-bottom-sm padding-top-sm text-center">
                    <span className="label label-sm label-warning deadline-label">
                        Pending
                    </span>
                </div>
            </li>
        )
    }
}
