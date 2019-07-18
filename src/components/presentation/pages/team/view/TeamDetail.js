import React, { Component } from 'react';
import getTeamDetail from '../../../../container/team/GetTeamDetail';
import MemberRow from './MemberRow';

class TeamDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:{
        // projectName: "",
        // teamName :"",
        engineers: [],        
      }
      ,
      leadId : 0
    }
  }
  async componentDidMount(){
    const res = await getTeamDetail(this.props.id)
    console.log(res)
    this.setState({
      data : res,
      leadId : res.leader.id
    })

     let dataRender = res.engineers.map((value,key)=>(
      <MemberRow 
      key = {key} 
      id = {value.id}
      firstName = {value.firstName}
      lastName = {value.lastName}
      leadId = {this.state.leadId}
      />
    ))
    this.setState({member: dataRender})
  }
    render() {
        return (
      <div>
        <div className="row">                            
          <div className="col-md-6">
            <div className="portlet light bordered">
              <div className="portlet-title tabbable-line">
                <div className="caption caption-md">
                  <i className="icon-globe theme-font hide" />
                  <span className="caption-subject font-blue-madison bold uppercase">{this.state.data.teamName}</span>
                </div>
              </div>
              <div className="portlet-body">
                <div className="tab-content">
                  {/* PERSONAL INFO TAB */}
                  <div className="tab-pane active" id="tab_1_1">
                    <form>                                                        
                      <div className="form-group">
                        <label className="control-label" style={{fontWeight: 'bold'}}>Name</label>
                        <input type="text" value = {this.state.data.teamName} name="name" className="form-control" disabled /> </div>
                        <div className="form-group">
                        <label className="control-label" style={{ fontWeight: 'bold' }}>Project's name</label>
                        <input type="text" value={this.state.data.projectName} name="name" className="form-control" disabled /> </div>                     
                      <div className="col-md-12">
                        {/* BEGIN SAMPLE TABLE PORTLET*/}
                        <div className="portlet">
                          <div className="portlet-body">
                            <div className="table-scrollable">
                              <table className="table table-striped table-bordered table-advance table-hover">
                                <thead>
                                  <tr>
                                    <th>
                                      <i className="fa fa-user" /> Member </th>          
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.state.member}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        {/* END SAMPLE TABLE PORTLET*/}
                      </div>
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