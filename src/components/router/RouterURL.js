import React, { Component } from 'react';
import { Route } from "react-router-dom";
import TeamIndex from '../team/index/TeamIndex';
import EngineerIndex from '../engineers/index/EngineerIndex';
import Index from '../index/Index';
import AddForm from '../engineers/add/AddForm';
import EditForm from '../engineers/edit/EditForm';
import ViewForm from '../engineers/view/ViewForm';
import Profile from '../engineers/view/profile/Profile';
import AddTeam from '../team/add/AddTeam';
import EditTeam from '../team/edit/EditTeam';
import TeamDetail from '../team/view/TeamDetail';
import LoginFunc from '../login/LoginFunc'
import Overview from '../project/editProject/Overview';
import Managers from '../managers/Managers';
import ProjectIndex from '../project/index/ProjectIndex';
import Dashboard1 from '../index/dashboard1/Dashboard1';
import Dashboard2 from '../index/dashboard2/Dashboard2';

class RouterURL extends Component {
  render() {
    return (
        <div className="MainRouter">
          <Route  exact path="/login" component={LoginFunc} /> 
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Index} />
          <Route exact path="/dashboard1" component={Dashboard1} />
          <Route exact path="/dashboard2" component={Dashboard2} />

          
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
          <Route exact path="/projects/edit" component={Overview} />
          <Route exact path="/user" component={Managers} />
          <Route/>

        </div>
    );
  }
}

export default RouterURL;