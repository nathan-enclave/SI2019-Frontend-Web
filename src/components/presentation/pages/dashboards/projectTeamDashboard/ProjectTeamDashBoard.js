import React, {Component} from 'react'
import OveralView from './OveralView';
import ProjectsInYear from './ProjectsInYear';
import ProjectStatus from './ProjectStatus'
import ProjectCategory from './ProjectCategory';
import ProjectMap from './ProjectMap/ProjectMap';
import Deadline from './Deadline/Deadline';
import './index.css'

export default class ProjectTeamDashBoard extends Component {   
    render() {
        return (
            <div className="ProjectTeamDashBoard">
                <OveralView/>
                <div className="row">
                    <div className="col-sm-12">
                        <ProjectMap/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-xs-12 col-md-12">
                        <ProjectsInYear/>
                    </div>
                    <div className="col-lg-6 col-xs-12 col-md-12">
                        <ProjectStatus/>
                    </div>
                </div>
                <div className="row margin-bottom-md">
                    <div className="col-lg-6 col-xs-12 col-md-12">
                        <Deadline/>
                    </div>
                    <div className="col-lg-6 col-xs-12 col-md-12">
                        <ProjectCategory/>
                    </div>
                </div>

            </div>
        )
    }
}
