import React, { Component } from 'react';
// import Action from './Action';
import Stats from './Stats';
import getTotal from '../../services/GetTotal';
import Action from './Action';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        engineer: 0,
        project: 0,
        team: 0,
        manager: 5
      }
    }
  }
  async componentWillMount() {
    const res = await getTotal();
    this.setState({
      data: {
        engineer: res.engineer,
        project: res.project,
        team: res.team,
        manager: res.manager
      }
    });
  }
  render() {
    return (
      <div>
        <Stats engineer={this.state.data.engineer}
          project={this.state.data.project}
          team={this.state.data.team}
          manager={this.state.data.manager}
        />     
       <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption">
            <i className="icon-bar-chart font-dark hide" />
            <span className="caption-subject font-dark bold uppercase">Recent activities</span>
          </div>
        </div>
        <div >
       <Action />
        </div>

      </div>
      </div>
    );
  }
}
export default Index;