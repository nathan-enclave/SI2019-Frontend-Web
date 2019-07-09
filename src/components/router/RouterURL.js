import React, { Component } from 'react';
import { Route } from "react-router-dom";
import TeamIndex from '../team/index/TeamIndex';
import EngineerIndex from '../engineers/index/EngineerIndex';
import Index from '../index/Index';
import AddForm from '../engineers/add/AddForm';
import EditForm from '../engineers/edit/EditForm';
import ViewForm from '../engineers/view/ViewForm';
import AddTeam from '../team/add/AddTeam';
import EditTeam from '../team/edit/EditTeam';
import TeamDetail from '../team/view/TeamDetail';
import LoginFunc from '../login/LoginFunc'
import Overview from '../project/editProject/Overview';
import Managers from '../managers/Managers';
import ProjectIndex from '../project/index/ProjectIndex'

class RouterURL extends Component {
  render() {
    return (
        <div>
          <Route  exact path="/login" component={LoginFunc} /> 
          <Route exact path="/home" component={Index} />
          <Route  path="/engineer" component={EngineerIndex} />
          <Route  path="/engineers/add" component={AddForm} />
          <Route  path="/engineers/edit" component={EditForm} />
          <Route  path="/engineers/view" component={ViewForm} />
          <Route  path="/team" component={TeamIndex} />
          <Route  path="/teams/view" component={TeamDetail} />
          <Route  path="/teams/add" component={AddTeam} />
          <Route  path="/teams/edit" component={EditTeam} />
          <Route  path="/project" component={ProjectIndex} />          
          <Route  path="/projects/edit" component={Overview} />
          <Route  path="/user" component={Managers} />


        </div>
    );
  }
}

export default RouterURL;