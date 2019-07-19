import React, { Component } from 'react';
import AddProject from './../../../../container/project/AddProject';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail, isEmpty, isNumeric } from 'validator';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const required = (value) => {
  if (isEmpty(value)) {
    return <small className="form-text text-danger">This field is required</small>;
  }
}

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMSGSuccess: false,
      start: "",
      end: "",
      // options: [],
      // selectOptions: [],
      // status: 1,
      // skills: [],
      // error: 0
    };
  }

  isChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    this.setState({
      [fieldName]: value
    });
  }
  submitAddForm = (e) => {
    e.preventDefault();  // stop loading        
    let data = {
      name: this.state.name,
      technology: this.state.technology,
      description: this.state.description,
      // phoneNumber: this.state.phoneNumber,
      // address: this.state.address,
      // email: this.state.email,
      // skype: this.state.skype,
      start: this.state.start,
      end: this.state.end,
      // salary: this.state.salary,
      // status: Number(this.state.status),
      // skills: this.state.skills
    }
    AddProject(data).then((result) => {
      if (!result.statusCode) {
        this.props.openMSGSuccess()
      } else {
        if (result.statusCode !== 200) {
          this.setState({ msg: 'Some error occured, please try again later' });
        }
      }
    })
  }
  handleChangeStart = (date) => {
    this.setState({
      start: date
    });
  }
  handleChangeEnd = (date) => {
    this.setState({
      end: date
    });
  }
  // handleChange = (selectOptions) => {
  //   this.setState({ selectOptions });
  //   let temp = []
  //   if (selectOptions != null) {
  //     selectOptions.forEach(element => {
  //       temp.push(element.value)
  //     });
  //     this.setState({ skills: temp });
  //   }
  // }
  onSubmit = (e) => {
    e.preventDefault();
    this.form.validateAll();
  }
  render() {
    console.log(this.state.start)
    return (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption caption-md">
            <i className="icon-globe theme-font hide" />
            <span className="caption-subject font-blue-madison bold uppercase">Add Project </span>
          </div>
        </div>
        <div className="portlet-body">
          <div className="tab-content">
            <span style={{ color: "red" }}> {this.state.msg}</span>
            <div className="tab-pane active" id="tab_1_1">
              <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">Project Name</label>
                      <Input type="text" name="name" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Technology</label>
                      <Input type="text" name="technology" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Description</label>
                      <Input type="text" name="description" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" />
                    </div>
                    {/* <div className="form-group">
                      <label className="control-label">Image</label>
                      <Input type="file" name="avatar" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Address</label>
                      <Input type="text" name="address" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Phone Number</label>
                      <Input type="text" name="phoneNumber" onChange={(event) => this.isChange(event)} validations={[required, phone]} className="form-control" />
                    </div> */}
                    {/* <div className="form-group">
                      <label className="control-label">Status</label>
                      <select className="form-control" onChange={(event) => this.isChange(event)} name="status" >
                        <option value={1} >Available</option>
                        <option value={0} >Unavailable</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="col-md-6">
                    {/* <div className="form-group">
                      <label className="control-label">Email</label>
                      <Input type="text" name="email" onChange={(event) => this.isChange(event)} validations={[required, email]} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Skype</label>
                      <Input type="text" name="skype" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Salary</label>
                      <Input type="number" name="salary" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" />
                    </div> */}
                    <div className="form-group">
                      <label className="control-label">Start</label><br />
                      <DatePicker selected={this.state.start} onChange={this.handleChangeStart} className="form-control" />
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="control-label">End</label><br />
                        <DatePicker selected={this.state.end} onChange={this.handleChangeEnd} className="form-control" />
                      </div>
                    </div>

                  </div>
                </div>
                </div>
              </Form>
              <div className="row">
                <div className="margin-top-20" style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn green" onClick={(event) => this.submitAddForm(event)} > SAVE </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddForm;