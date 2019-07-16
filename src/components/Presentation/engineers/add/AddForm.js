import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom'
import Select from 'react-select';
import AddEngineer from '../../../Container/services/AddEngineer';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail, isEmpty, isNumeric } from 'validator';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import getTotalSkills from '../../../Container/services/GetListSkills';
// import Modal from './../../Modal';
// import MSGSuccess from './MSGSuccess';

const required = (value) => {
  if (isEmpty(value)) {
    return <small className="form-text text-danger">This field is required</small>;
  }
}
const phone = (value) => {
  if (!isNumeric(value, [{ no_symbols: false }])) {
    return <small className="form-text text-danger">The phone number contains only numbers.</small>;
  }
  else if (value.trim().length < 10) {
    return <small className="form-text text-danger">The phone number can't less than 10 letters.</small>;
  }
  else if (value.trim().length > 15) {
    return <small className="form-text text-danger">The phone number can't more than 15 letters.</small>;
  } if (value.trim().length < 10) {
    return <small className="form-text text-danger">The phone number can't less than 10 letters.</small>;
  }
}
const email = (value) => {
  if (!isEmail(value)) {
    return <small className="form-text text-danger">Invalid email format</small>;
  }
}
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMSGSuccess : false,
      birthday: "",
      dateIn: "",
      options: [],
      selectOptions: [],
      status: 1,
      skills: [],
      error: 0
    };
    // this.handleChange = this.handleChange.bind(this);
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      englishName: this.state.englishName,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      email: this.state.email,
      skype: this.state.skype,
      birthday : this.state.birthday,
      dateIn : this.state.dateIn,
      salary : this.state.salary,
      status: Number(this.state.status),
      skills: this.state.skills
    }
    AddEngineer(data).then((result) => {
      if (!result.statusCode) {      
        this.props.openMSGSuccess()
      } else {
        if (result.statusCode !== 200) {
          this.setState({ msg: 'Some error occured, please try again later' });
        }
      }
      // if (rediect) {
      //   // return <Redirect to ='/engineer' />
      //   this.setState({msg : "Add successful."})
      //   this.toggleMSGSuccess(); 
      // }

    })
  }
  handleChangeBirthday = (date) => {
    this.setState({
      birthday: date
    });
  }
  handleChangeDateIn = (date) => {
    this.setState({
      dateIn: date
    });
  }
  handleChange = (selectOptions) => {
    this.setState({ selectOptions });
    let temp = []
    if (selectOptions != null) {
      selectOptions.forEach(element => {
        temp.push(element.value)
      });
      this.setState({ skills: temp });
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.form.validateAll();
  }
  async componentDidMount() {
    const res = await getTotalSkills();
    // console.log(res)
    this.setState({ options: res });
  }
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption caption-md">
            <i className="icon-globe theme-font hide" />
            <span className="caption-subject font-blue-madison bold uppercase">Add Engineer </span>
          </div>
        </div>
        <div className="portlet-body">
          <div className="tab-content">
            <span style={{ color: "red" }}> {this.state.msg}</span>
            <div className="tab-pane active" id="tab_1_1">
              <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                {/* <div className="form-group" style={{ textAlign: 'center' }}>
                  <img height="130px" src="../assets/layouts/layout6/img/none-avatar.png" /><br /><br />
                </div> */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">English Name</label>
                      <Input type="text" name="englishName" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> 
                    </div>
                    <div className="form-group">
                      <label className="control-label">First Name</label>
                      <Input type="text" name="firstName" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> 
                    </div>
                    <div className="form-group">
                      <label className="control-label">Last Name</label>
                      <Input type="text" name="lastName" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" />
                    </div>
                    {/* <div className="form-group">
                      <label className="control-label">Image</label>
                        <Input type="file" name="avatar" className="form-control" /> 
                    </div> */}
                    <div className="form-group">
                      <label className="control-label">Address</label>
                      <Input type="text" name="address" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> 
                    </div>
                    <div className="form-group">
                      <label className="control-label">Phone Number</label>
                      <Input type="text" nam e="phoneNumber" onChange={(event) => this.isChange(event)} validations={[required, phone]} className="form-control" /> 
                    </div>
                    <div className="form-group">
                      <label className="control-label">Status</label>
                      <select className="form-control" onChange={(event) => this.isChange(event)} name="status" >
                        <option value={1} >Available</option>
                        <option value={0} >Unavailable</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
                      <label className="control-label">Birthday</label><br />
                      <DatePicker selected={this.state.birthday} onChange={this.handleChangeBirthday} className="form-control" /> 
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="control-label">Date in</label><br />
                        <DatePicker selected={this.state.dateIn} onChange={this.handleChangeDateIn}  className="form-control"/> 
                      </div>
                    </div>
                   <div className="form-group">
                    <div className="form-check">
                      <label className="form-check-label"> Skills:  </label>
                      <Select value={this.state.selectOptions} options={this.state.options} isMulti onChange={this.handleChange} />
                    </div>
                   </div>
                    
                  </div>
                </div>
              </Form>
              <div className="row">
                <div className="margin-top-20" style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn green" onClick={(event) =>this.submitAddForm(event)} > SAVE </button>
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