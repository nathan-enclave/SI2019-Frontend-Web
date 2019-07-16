import React, { Component } from 'react';
// import Action from './Action';
import Stats from './Stats';
import getTotal from '../../Container/services/GetTotal';
import Action from './Action';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:null
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
    if(this.state.data) {
      return (
       
        <div className="Home">
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
    else {
      return (
        <div className="loading-error">
          <div className="loading-area" style={{position:"relative"}}>
            <div class="wrap">
              <div class="loading">
                <div class="bounceball"></div>
                <div class="text">NOW LOADING</div>
              </div>
            </div>

          </div>
        
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
}
export default Index;