import React, { Component } from 'react';
import getTeamDetail from '../../../../container/team/GetTeamDetail';
import MemberRow from './MemberRow';

class TeamDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        projectName: "",
        name: "",
        engineers: [],
        createdAt: null
      }
    }
  }
  async componentDidMount() {
    const res = await getTeamDetail(this.props.id)
    this.setState({
      data: res
    })
    let dataRender = res.engineers.map((value, key) => (
      <MemberRow
        key={key}
        id={value.id}
        firstName={value.firstName}
        lastName={value.lastName}
        role={value.role}
      />
    ))
    this.setState({ member: dataRender })
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="portlet light bordered">
            <div className="portlet-title tabbable-line">
              <div className="caption caption-md">
                <i className="icon-globe theme-font hide" />
                <span className="caption-subject font-blue-madison bold uppercase">{this.state.data.name}</span>
              </div>
            </div>
            <div className="portlet-body">
              <div className="tab-content">
                <div className="tab-pane active" id="tab_1_1">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="control-label" style={{ fontWeight: 'bold' }}>Member</label>
                      {/* <div className="table-scrollable"> */}
                      <table className="table table-striped table-bordered table-advance table-hover">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.member}
                        </tbody>
                      </table>
                      {/* </div> */}
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label" style={{ fontWeight: 'bold' }}>Name</label>
                        <input type="text" value={this.state.data.name} className="form-control" disabled /> </div>
                      <div className="form-group">
                        <label className="control-label" style={{ fontWeight: 'bold' }}>Project's name</label>
                        <input type="text" value={this.state.data.projectName} className="form-control" disabled /> </div>
                      <div className="form-group">
                        <label className="control-label" style={{ fontWeight: 'bold' }}>Create at</label>
                        <input type="text" value={new Date(this.state.data.createdAt).toISOString().slice(0, 10)} className="form-control" disabled /> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}
export default TeamDetail;