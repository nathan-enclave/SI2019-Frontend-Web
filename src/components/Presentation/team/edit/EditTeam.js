import React, { Component } from 'react';

class AddTeam extends Component {
  constructor(props){
    super(props);
    this.state = {
      status : 0
    }
  }
  isClick = ()=>{
    if(this.state.status === 0) this.setState({status:1});
    else this.setState({status:0});
  }
  checkDisplay = ()=>{
    if(this.state.status === 0) return (<div className="form-group">
    <a onClick={(event)=>this.isClick(event)} className="btn violet"> Add members </a>
  </div>);
    else return (<div><div className="form-group">
    <a onClick={(event)=>this.isClick(event)} className="btn violet"> CLOSE </a>
  </div>
  </div>
   );
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
                  <span className="caption-subject font-blue-madison bold uppercase">Edit team </span>
                </div>
              </div>
              <div className="portlet-body">
                <div className="tab-content">
                  {/* PERSONAL INFO TAB */}
                  <div className="tab-pane active" id="tab_1_1">
                    <form>                                                        
                      <div className="form-group">
                        <label className="control-label">Name</label>
                        <input type="text" value = "team 1" name="name" className="form-control" /> </div>
                        {this.checkDisplay()}
                        {/* <EditMember /> */}
                      <div className="margiv-top-10">
                        <a href="abc" className="btn green"> SAVE </a>
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

export default AddTeam;