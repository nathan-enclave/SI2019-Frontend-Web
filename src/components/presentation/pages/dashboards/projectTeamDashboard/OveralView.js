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
            loadStatistic.totalProject = <h3 className="font-blue-sharp" >
                <span style={{fontSize: "50px"}}>{this.state.totalProject}</span>
            </h3>
            loadStatistic.pending = <h3 className="font-yellow-crusta">
                <span style={{fontSize: "50px"}}>{this.state.pending}</span>
            </h3>
            loadStatistic.currentTeam = <h3 className="font-green-sharp">
                <span style={{fontSize: "50px"}}>{this.state.teamInProgress}</span>
            </h3>
            loadStatistic.engineerInTeam = <h3 className="font-purple-soft">
                <span style={{fontSize: "50px"}}>{this.state.engineerInTeam}</span>
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
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered" style={{padding:"20px"}} >
                        <div className="display" >
                            <div className="number" >
                              {loadStatistic.totalProject}
                                <small style={{fontSize: "17px"}}  >Total project</small>
                            </div>
                            <div className="icon">
                                <i className="icon-briefcase" style={{fontSize: "50px"}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered" style={{padding:"20px"}}>

                        <div className="display">
                            <div className="number">
                                {loadStatistic.pending}
                                <small style={{fontSize: "17px"}}>Pending</small>
                            </div>
                            <div className="icon">
                                <i className="icon-hourglass"  style={{fontSize: "50px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered" style={{padding:"20px"}}>

                        <div className="display">
                            <div className="number">
                                {loadStatistic.currentTeam}

                                <small style={{fontSize: "17px"}}>Current team</small>
                            </div>
                            <div className="icon">
                                <i className="icon-users" style={{fontSize: "50px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered" style={{padding:"20px"}}>

                        <div className="display">
                            <div className="number">
                                {loadStatistic.engineerInTeam}
                                <small style={{fontSize: "17px"}}>Engineers in team</small>
                            </div>
                            <div className="icon">
                                <i className="icon-user" style={{fontSize: "35px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
