import React, { Component } from 'react';
import ViewMember from './ViewMember';
import { Link } from "react-router-dom";

class TeamDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      status : 0
    }
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
                  <span className="caption-subject font-blue-madison bold uppercase">Team  ABC</span>
                </div>
              </div>
              <div className="portlet-body">
                <div className="tab-content">
                  {/* PERSONAL INFO TAB */}
                  <div className="tab-pane active" id="tab_1_1">
                    <form>                                                        
                      <div className="form-group">
                        <label className="control-label" style={{fontWeight: 'bold'}}>Name</label>
                        <input type="text" value = "team 1" name="name" className="form-control" disabled /> </div>
                        <label style={{fontWeight: 'bold'}} className="control-label">Members </label>   
                        <ViewMember />
                      <div className="margiv-top-10">
                        <Link to="/team" className="btn green"> BACK </Link>
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