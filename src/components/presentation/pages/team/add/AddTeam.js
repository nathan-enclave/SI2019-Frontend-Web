import React, { Component } from 'react';
import Select from 'react-select';
import addTeam from '../../../../container/team/AddTeamMethod';

class AddTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberOptions: [],
      memberSelectOptions: [],
      member: [],
      leaderOptions: [],
      leaderSelected: [],
      leader: null,
      projectOptions: [],
      projectSelected: null,
      isOpenMSGSuccess: false
    }
  }
  handleChangeMember = (memberSelectOptions) => {
    this.setState({ memberSelectOptions });
    let temp = []
    if (memberSelectOptions != null) {
      memberSelectOptions.forEach(element => {
        temp.push({ id: element.value, role: "member" })
      });
      this.setState({ member: temp });
    }
  }
  handleChangeProject = (projectSelected) => {
    this.setState({ projectSelected })
    this.setState({ projectId: projectSelected.value })
  }
  handleChangeLeader = (leaderSelected) => {
    this.setState({ leaderSelected })
    this.setState({ leader: leaderSelected.value })
  }
  handleChangeName = (e) => {
    this.setState({ name: e.target.value })
  }
  async componentWillMount() {
    const res = await fetch('https://si-enclave.herokuapp.com/api/v1/engineers?limit=1000&offset=0')
    let data = await res.json()
    let data2 = data.results
    let temp = []
    data2.forEach(element => {
      temp.push({ "value": element.id, "label": element.firstName })
    });
    this.setState({ leaderOptions: temp });
    this.setState({ memberOptions: temp });
    const res2 = await fetch('https://si-enclave.herokuapp.com/api/v1/projects?limit=1000&offset=0')
    let result = await res2.json()
    let result2 = result.results
    let projectOptions = []
    result2.forEach(element => {
      projectOptions.push({ "value": element.id, "label": element.name })
    });
    this.setState({ projectOptions: projectOptions })
  }

  addTeam = () => {
    let temp = this.state.member
    if (this.state.leader !== null) {
      temp.push({ id: this.state.leader, role: "leader" })
    }
    console.log(temp)
    const data = {
      name: this.state.name,
      projectId: this.state.projectId,
      engineers: temp
    }
    console.log(data)
    addTeam(data).then((result) => {
      if (!result.statusCode) {
        this.props.openMSGSuccess()
      } else {
        if (result.statusCode !== 200) {
          this.setState({ msg: 'Some error occured, please try again later' });
        }
      }
    })
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
                  <span className="caption-subject font-blue-madison bold uppercase">Add team </span>
                </div>
              </div>
              <div className="portlet-body">
                <div className="tab-content">
                  <div className="tab-pane active" id="tab_1_1">
                    <div>
                      <div className="form-group">
                        <label className="control-label">Name</label>
                        <input type="text" name="name" onChange={(e) => this.handleChangeName(e)} className="form-control" /> </div>
                      <div className="form-group">
                        <label className="form-check-label"> Project:  </label>
                        <Select value={this.state.projectSelected} options={this.state.projectOptions} onChange={this.handleChangeProject} />
                      </div>
                      <div className="form-group">
                        <label className="form-check-label"> Leader:  </label>
                        <Select value={this.state.leaderSelected} options={this.state.leaderOptions} onChange={this.handleChangeLeader} />
                      </div>
                      <div className="form-group">
                        <label className="form-check-label"> Member:  </label>
                        <Select value={this.state.memberSelectOptions} options={this.state.memberOptions} isMulti onChange={this.handleChangeMember} />
                      </div>
                      <div className="margiv-top-10">
                        <button onClick={this.addTeam} className="btn green"> SUBMIT </button>
                      </div>
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

export default AddTeam;