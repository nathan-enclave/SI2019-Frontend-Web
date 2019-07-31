import React, { Component } from 'react';
import { Route } from "react-router-dom";
import TeamIndex from '../pages/team/index/TeamIndex';
import EngineerIndex from '../pages/engineers/index/EngineerIndex';
import Index from '../pages/dashboards/index/Index';
import AddForm from '../pages/engineers/add/AddForm';
import EditForm from '../pages/engineers/edit/EditForm';
import ViewForm from '../pages/engineers/view/ViewForm';
import Profile from '../pages/engineers/view/profile/Profile';
import AddTeam from '../pages/team/add/AddTeam';
import EditTeam from '../pages/team/edit/EditTeam';
import TeamDetail from '../pages/team/view/TeamDetail';
import Login from '../pages/login/Login'
import ProjectIndex from '../pages/project/index/ProjectIndex';
import Dashboard1 from '../pages/dashboards/dashboard1/Dashboard1';
import Dashboard2 from '../pages/dashboards/dashboard2/Dashboard2';
import ProjecTeamDashboard from '../pages/dashboards/projectTeamDashboard/ProjectTeamDashBoard'
import ForgetPW from '../pages/login/ForgetPW';
import ResetPassword from '../pages/login/ResetPassword';
import ResetSuccess from '../pages/login/ResetSuccess';
import ViewDetailTeam from '../pages/team/view/Overview/ViewDetailTeam'
import ViewProject from '../pages/project/viewProject/view/ViewProject'

class RouterURL extends Component {
  render() {
    return (
        <div className="MainRouter">
          <Route  exact path="/login" component={Login} /> 
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Index} />
          <Route exact path="/dashboard1" component={Dashboard1} />
          <Route exact path="/dashboard2" component={Dashboard2} />          
          <Route exact path="/project-team" component={ProjecTeamDashboard} />          
          <Route exact path="/engineer" component={EngineerIndex} />
          <Route exact path="/engineers/add" component={AddForm} />
          <Route exact path="/engineers/edit" component={EditForm} />
          <Route exact path="/engineers/view" component={ViewForm} />
          <Route exact path="/engineer/:id" component={Profile} />
          <Route exact path="/team" component={TeamIndex} />
          <Route exact path="/teams/view" component={TeamDetail} />
          <Route exact path="/teams/add" component={AddTeam} />
          <Route exact path="/teams/edit" component={EditTeam} />
          <Route exact path="/project" component={ProjectIndex} />    
          <Route exact path="/project/:id" component={ViewProject} />            
          <Route  path="/forgotPassword" component={ForgetPW} />
          <Route  path="/resetPassword" component={ResetPassword} />
          <Route  path="/resetSuccess" component={ResetSuccess} />
          <Route exact path="/team/:id" component={ViewDetailTeam} />
          <Route/>
        </div>
    );
  }
}

export default RouterURL;