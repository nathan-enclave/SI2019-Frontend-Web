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

class RouterURL extends Component {
  render() {
    return (
        <div>
          <Route  exact path="/login" component={LoginFunc} /> 
          <Route exact path="/home" component={Index} />
          <Route  path="/engineer" component={EngineerIndex} />
          <Route  path="/engineer/add" component={AddForm} />
          <Route  path="/engineer/edit" component={EditForm} />
          <Route  path="/engineer/view" component={ViewForm} />
          <Route  path="/team" component={TeamIndex} />
          <Route  path="/team/view" component={TeamDetail} />
          <Route  path="/team/add" component={AddTeam} />
          <Route  path="/team/edit" component={EditTeam} />
        </div>
    );
  }
}

export default RouterURL;