import React, { Component } from 'react';
import Select from 'react-select';
import EditEngineer from './../../../services/EditEngineer';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail, isEmpty, isNumeric } from 'validator';
import getTotal from './../../../services/GetListSkills';
import getData from '../../../services/GetDetailEng';
import moment from 'moment';
import 'moment-timezone';

const required = (value) => {
  if (isEmpty(value)) {
    return <small className="form-text text-danger">This field is required</small>;
  }
}
const phone = (value) => {
  if (!isNumeric(value, [{ no_symbols: true }])) {
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
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectOptions: [],
      status: 1,
      skills: [],
      error: 0
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {   
    const res = await getData(this.props.id);
    // let tagsTemp = []
    // res.skills.forEach(element => {
    //   this.setState({ tags: [...this.state.tags, element.name] })
    // });
    // this.setState({tags : tagsTemp})
    console.log(res)
    this.setState({
      id: String(res.id),
      firstName: res.firstName,
      lastName: res.lastName,
      englishName: res.englishName,
      phoneNumber: String(res.phoneNumber),
      address: res.address,
      email: res.email,
      skype: res.skype,
      expYear: String(res.expYear),
      // dayOffRemain: res.dayOffRemain,
      status: String(res.status),
      createdAt: moment(res.createdAt).format('DD/MM/YYYY'),
      updatedAt: moment(res.updatedAt).format('DD/MM/YYYY'),
      skills: res.skills.id
      // startDate: new Date("")
    });
    res.skills.map(e => {
      e.value = e.id;
      e.label = e.name;
      delete e.id;
      delete e.name
  })   
  this.setState({selectOptions :res.skills })
  }
  isChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    console.log(event.target.value);
    this.setState({
      [fieldName]: value
    });
  }
  submitSaveForm = () => {
    //  event.preventDefault();  // stop loading        
    console.log(this.state);
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      englishName: this.state.englishName,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      email: this.state.email,
      skype: this.state.skype,
      expYear: Number(this.state.expYear),
      status: Number(this.state.status),
      skills: this.state.skills
    }
    console.log("data: " + data)
    EditEngineer(data,this.props.id).then((result) => {
      console.log(result);
      let rediect = false;
      if (!result.statusCode) {
        rediect = true;
        alert("Edit successful!")
      } else {
        if (result.statusCode == 500) {
          this.setState({ msg: "Email or Skype was used by another account." })
        }
       
      }
      if (rediect) {
        window.location = "/engineer";
      }
    })
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
 
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption caption-md">
            <i className="icon-globe theme-font hide" />
            <span className="caption-subject font-blue-madison bold uppercase">EDIT {this.props.englishName}'S PROFILE </span>
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
                <div >
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">English Name</label>
                    <Input type="text" value = {this.state.englishName} name="englishName" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">First Name</label>
                    <Input type="text" value={this.state.firstName} name="firstName" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Last Name</label>
                    <Input type="text" value={this.state.lastName} name="lastName" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Address</label>
                    <Input type="text" name="address" value={this.state.address} onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Experiences</label>
                    <Input type="number" name="expYear" value={this.state.expYear} onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Phone Number</label>
                    <Input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={(event) => this.isChange(event)} validations={[required, phone]} className="form-control" /> </div>
                </div>
                <div className="col-md-6" style={{ height: "444px" }}>
                  <div className="form-group">
                    <label className="control-label">Email</label>
                    <Input type="text" name="email" value={this.state.email} onChange={(event) => this.isChange(event)} validations={[required, email]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Skype</label>
                    <Input type="text" name="skype" value={this.state.skype} onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  {/* <div className="form-group">
                    <label className="control-label">Birthday</label><br />
                    <DatePicker selected={this.state.startDate} onChange={this.handleChange} /> </div> */}                      
                  <div className="form-check">
                    <label className="form-check-label"> Skills:  </label>
                    <div className="col-md-12">
                      <Select value={this.state.selectOptions} options={this.state.options} isMulti onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label">Status</label>
                    <select className="form-control" onChange={(event) => this.isChange(event)} name="status" >
                      <option value={1} >Available</option>
                      <option value={0} >Unavailable</option>
                    </select>
                  </div>                  
                </div>
                </div>
                <div className="margiv-top-10" style={{ textAlign: 'center' }}>
                    <button type="submit" className="btn green" onClick={this.submitSaveForm} style={{  top: "50px" }}> SAVE </button>
                  </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditForm;