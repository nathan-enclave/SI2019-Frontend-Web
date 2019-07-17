import React, { Component } from 'react';
import getTeamDetail from '../../../../container/team/GetTeamDetail';

class TeamDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      status : 0
    }
  }
  async componentDidMount(){
    const res = await getTeamDetail(this.props.id)
    console.log(res)
  }
    render() {
        return (
            <div>
        <div className="row">                            
          <div className="col-md-12">
            <div className="portlet light bordered">
              <div className="portlet-title tabbable-line">
                <div className="caption caption-md">
                  <i className="icon-globe theme-font hide" />
                  <span className="caption-subject font-blue-madison bold uppercase">{this.props.teamName}</span>
                </div>
              </div>
              <div className="portlet-body">
                <div className="tab-content">
                  {/* PERSONAL INFO TAB */}
                  <div className="tab-pane active" id="tab_1_1">
                    <form>                                                        
                      <div className="form-group">
                        <label className="control-label" style={{fontWeight: 'bold'}}>Name</label>
                        <input type="text" value = {this.props.teamName} name="name" className="form-control" disabled /> </div>
                        <label style={{fontWeight: 'bold'}} className="control-label">Members </label> gr                    
                      <div className="margiv-top-10">
                      </div>
                    </form>
                  </div>
                  {/* END PERSONAL INFO TAB */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        </div>
        <div className="clearfix" />
      </div>
        );
    }
}

export default TeamDetail;