import React, { Component } from 'react'
import DashboardContainer from "../../../../container/dashboard";
import { ClipLoader } from "react-spinners";
export default class OveralView extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentWillMount() {
        DashboardContainer
            .getStatistic('dashboard/statistic/teamProject')
            .then(e => {
                this.setState({ totalProject: e.countProject, pending: e.countProjectPending, teamInProgress: e.countTeamInProgress, engineerInTeam: e.countEngineerInTeam })
            })
    }
    render() {
        let loadStatistic = {}
        if (Object.keys(this.state).length > 0) {
            loadStatistic.totalProject = <h3 className="font-green-sharp">
                <span>{this.state.totalProject}</span>
                <small className="font-green-sharp"></small>
            </h3>
            loadStatistic.pending = <h3 className="font-red-haze">
                <span>{this.state.pending}</span>
            </h3>
            loadStatistic.currentTeam = <h3 className="font-blue-sharp">
                <span>{this.state.teamInProgress}</span>
            </h3>
            loadStatistic.engineerInTeam = <h3 className="font-purple-soft">
                <span>{this.state.engineerInTeam}</span>
            </h3>
        } else {
            loadStatistic.totalProject
                = loadStatistic.pending
                = loadStatistic.currentTeam
                = loadStatistic.engineerInTeam
                = (
                    <div className='sweet-loading d-flex justify-center' >
                        <ClipLoader
                            sizeUnit={"px"}
                            size={40}
                            color={'#7ed6df'}
                            loading={true} />
                    </div>
                )
        }
        return (
            <div className="row OverallView">
                  <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bar-chart font-dark hide" />
                        <span className="caption-subject font-dark bold uppercase" style={{fontSize:"16px"}}>Overview</span>
                    </div>
                    <br />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">
                        <div className="display">
                            <div className="number">
                                {loadStatistic.totalProject}
                                <small>Total project</small>
                            </div>
                            <div className="icon">
                                <i className="icon-briefcase" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">

                        <div className="display">
                            <div className="number">
                                {loadStatistic.pending}
                                <small>Pending</small>
                            </div>
                            <div className="icon">
                                <i className="icon-hourglass" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">

                        <div className="display">
                            <div className="number">
                                {loadStatistic.currentTeam}

                                <small>Current team</small>
                            </div>
                            <div className="icon">
                                <i className="icon-users" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">

                        <div className="display">
                            <div className="number">
                                {loadStatistic.engineerInTeam}
                                <small>Engineer in team</small>
                            </div>
                            <div className="icon">
                                <i className="icon-user" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
