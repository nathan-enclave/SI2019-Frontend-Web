import React, { Component } from 'react';
import Select from 'react-select';
import addTeam from '../../../../container/team/AddTeamMethod';
import Member from './partials/Member'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmpty } from 'validator';
const required = (value) => {
  if (isEmpty(value)) {
      return (<div className="alert alert-danger">
          This field is required!
  </div>);
  }
}
class AddTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberOptions: [],
      projectOptions: [],
      projectSelected: null,
      engineers : {},
      msgProject : null,
      msgMember : null,
      projectId : null,
      submit : false
    }
  }
  handleChangeProject = (projectSelected) => {
    this.setState({ projectSelected })
    this.setState({ projectId: projectSelected.value, msgProject : null })
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
    const data = {
      name: this.state.name,
      projectId: this.state.projectId,
      engineers: this.state.engineers
    }
    console.log(data)
    addTeam(data).then((result) => {
      if (!result.statusCode) {
        this.props.openMessage()
      } else {
        if (result.statusCode !== 200) {
          this.setState({ msg: 'Some error occured, please try again later' });
        }
      }
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0 && this.state.projectId !== null && this.state.engineers !== {}) {
        if(this.state.submit){
          this.addTeam()
        }
    }   
    else {
      this.setState({submit: false})
      if (this.state.projectId === null) this.setState({ msgProject: "This field is required!" })
      if (typeof(this.state.engineers.length) === "undefined") this.setState({ msgMember: "This field is required!" }) 
  
    } 
}
  getData = async(items) => {
    await this.setState({
        engineers: items.map(e => e.data),
        msgMember : null
    })
}
 
  render() {
    let msgMember = this.state.msgMember === null ? null : (<div className="alert alert-danger">This field is required!</div>)
    let msgProject = this.state.msgProject === null ? null : (<div className="alert alert-danger">Member field is required!</div>)
    console.log(msgMember)
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
                  <Form
                                onSubmit={e => this.onSubmit(e)}
                                ref={c => {
                                    this.form = c
                                }}>
                      <div className="form-group">
                        <label className="control-label">Name</label>
                        <Input type="text" name="name" onChange={(e) => this.handleChangeName(e)} className="form-control" validations={[required]}/> </div>
                      <div className="form-group">
                        <label className="form-check-label"> Project:  </label>
                        <Select value={this.state.projectSelected} options={this.state.projectOptions} onChange={this.handleChangeProject} />
                        {msgProject}
                      </div>
                      <Member
                       options = {this.state.memberOptions}
                       getData={this.getData.bind(this)}
                       />
                       {msgMember}
                      <div className="margiv-top-10">
                        <button className="btn green" onClick = {()=>{this.setState({submit : true})}}> SUBMIT </button>
                        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                      </div>
                    </Form>
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