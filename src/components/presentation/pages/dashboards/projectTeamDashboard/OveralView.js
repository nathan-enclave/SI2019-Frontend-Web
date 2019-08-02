import React, {Component} from 'react'
import DashboardContainer from "../../../../container/dashboard";
import {ClipLoader} from "react-spinners";
export default class OveralView extends Component {
    constructor() {
        super()
        this.state = {
            totalProject: null,
            pending: null,
            teamInProgress: null,
            engineerInTeam: null
        }
    }
    componentWillMount() {
        DashboardContainer
            .getStatistic('dashboard/statistic/teamProject')
            .then(e => {
                this.setState({totalProject: e.countProject, pending: e.countProjectPending, teamInProgress: e.countTeamInProgress, engineerInTeam: e.countEngineerInTeam})
            })
    }
    render() {
        return (
            <div className="row OverallView">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">
                        <div className="display">
                            <div className="number">
                                <h3 className="font-green-sharp">
                                    <span>{this.state.totalProject}</span>
                                    <small className="font-green-sharp"></small>
                                </h3>
                                <small>Total project</small>
                            </div>
                            <div className="icon">
                                <i className="icon-briefcase"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">
                        <div className="display">
                            <div className="number">
                                <h3 className="font-red-haze">
                                    <span>{this.state.pending}</span>
                                </h3>
                                <small>Pending</small>
                            </div>
                            <div className="icon">
                                <i className="icon-hourglass"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">
                        <div className="display">
                            <div className="number">
                                <h3 className="font-blue-sharp">
                                    <span>{this.state.teamInProgress}</span>
                                </h3>
                                <small>Current team</small>
                            </div>
                            <div className="icon">
                                <i className="icon-users"/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">
                        <div className="display">
                            <div className="number">
                                <h3 className="font-purple-soft">
                                    <span>{this.state.engineerInTeam}</span>
                                </h3>
                                <small>Engineer in team</small>
                            </div>
                            <div className="icon">
                                <i className="icon-user"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
