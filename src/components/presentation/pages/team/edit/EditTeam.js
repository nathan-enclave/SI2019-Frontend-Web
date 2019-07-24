import React, { Component } from 'react';
import Select from 'react-select';
import EditEngineer from '../../../../container/team/EditTeam';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import getTotal from './../../../../container/team/GetListEngineers';
import getData from '../../../../container/team/GetTeamDetail';
import GetTotal from './API /GetDetailProject'

class EditForm extends Component {
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
      isOpenMSGSuccess: false,
      createdAt : null,
      options: [],
      selectOptions: [],
      projectId: [],
    };
  }
  async componentDidMount() {   
    let res0 = await getTotal();    
    this.setState({ memberOptions: res0 })
    const res = await getData(this.props.id);
    let res1 = await GetTotal();
    this.setState({ options: res1 })
    this.setState({
      id: String(res.id),
      name: res.name,
      projectName: res.projectName,
      createdAt: new Date(new Date(res.createdAt).toDateString()),
        engineers: res.engineers.id,
      // dateIn: new Date(new Date(res.dateIn).toDateString()),
      // avatar: res.avatar,
      // salary : String(res.salary),
      // address: res.address,
      // email: res.email,
      // skype: res.skype,
      // expYear: String(res.expYear),
      // status: String(res.status),
      projectId: Number(res.project.name)
    
    });
    res.engineers.forEach(e => {
      e.value = e.id;
      e.label = e.firstName + " "+ e.lastName;
      e.exp = e.expYear
      delete e.id;
      delete e.firstName
  }) 
  console.log(res.engineers)  
  this.setState({memberSelectOptions :res.engineers })
  }

  isChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    this.setState({
      [fieldName]: value
    });
    this.setState({
      data : {
        [fieldName] : value
      }
    })
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
  handleChangeCreateAt = (date) => {
    this.setState({
      createdAt: date,
      data: {
        createdAt: date
      }
    });
  }

  handleChangeProject= (selectOptions) => {
    this.setState({ selectOptions });
    let temp = 0
    if (selectOptions != null) {
      temp = selectOptions.value
      this.setState({
        data: {
          projectId: temp
        }
      })
    }
  }
  submitSaveForm = (event) => {
    event.preventDefault() // stop loading   
         console.log(this.state.data)
    EditEngineer(this.state.data,this.props.id).then((result) => {
      if (!result.statusCode) {
        this.props.onClose();
        this.props.onOpenMSG();
      } else {
        if (result.statusCode !== 500) {
          this.setState({ msg: "Error." })
        }       
      }
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.form.validateAll();
  }
  displayStatus = ()=>{
    if(Number(this.state.status) === 0) this.setState({selectedStatus : "selected"})
  }
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption caption-md">
            <i className="icon-globe theme-font hide" />
            <span className="caption-subject font-blue-madison bold uppercase">EDIT {this.state.name}'S TEAM </span>
          </div>
        </div>
        <div className="portlet-body">
          <div className="tab-content">
            <span style={{ color: "red" }}> {this.state.msg}</span>
            <div className="tab-pane active" id="tab_1_1">
            <Form >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">Team Name</label>
                      <Input type="text" name="name" value ={this.state.name} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                      <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label"> Engineers:  </label>
                          <Select value={this.state.memberSelectOptions} options={this.state.memberOptions} isMulti onChange={this.handleChangeMember} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label"> Project:  </label>
                        <Select value={this.state.selectOptions} options={this.state.options} onChange={this.handleChangeProject} />
                      </div>
                    </div>
                    {/* <div className="form-group">
                      <label className="control-label">Project Name</label>
                      <Input type="text" name="projectName" value ={this.state.projectName} onChange={(event) => this.isChange(event)}  className="form-control" /> </div> */}
                      {/* <div className="form-group">
                      <label className="control-label">Image</label>
                      <Input type="file" name="avatar" className="form-control" /> </div> */}
                    {/* <div className="form-group">
                      <label className="control-label">Address</label>
                      <Input type="text" name="address" value ={this.state.address} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>                    */}
                    {/* <div className="form-group">
                      <label className="control-label">Experiences</label>
                      <Input type="number" name="expYear" onChange={(event) => this.isChange(event)}  className="form-control" /> </div> */}
                    {/* <div className="form-group">
                      <label className="control-label">Phone Number</label>
                      <Input type="text" name="phoneNumber" value ={this.state.phoneNumber} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>
                      <div className="form-group">
                      <label className="control-label">Salary</label>
                      <Input type="number" name="salary" value ={this.state.salary} onChange={(event) => this.isChange(event)}  className="form-control" /> </div> */}
                  </div>
                  {/* <div className="col-md-6" style={{ height: "444px" }}>
                  <div className="form-group">
                      <div className="form-check">
                        <label className="control-label">Create At</label><br />
                        <DatePicker selected={this.state.createdAt} onChange={this.handleChangeCreateAt} className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label"> engineers:  </label>
                          <Select value={this.state.memberSelectOptions} options={this.state.memberOptions} isMulti onChange={this.handleChangeMember} />
                      </div>
                    </div>
                  </div> */}
                </div>
              </Form>
              <div className="row">
                <div className="margin-top-20" style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn green" onClick={(event) =>this.submitSaveForm(event)} > SAVE </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditForm;