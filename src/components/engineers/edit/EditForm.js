import React, { Component } from 'react';
import Select from 'react-select';
import EditEngineer from './../../../services/EditEngineer';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail, isEmpty, isNumeric } from 'validator';
import getTotal from './../../../services/GetListSkills';
import getData from '../../../services/GetDetailEng';
import DatePicker from "react-datepicker";
// import moment from 'moment';
// import 'moment-timezone';

// const required = (value) => {
//   if (isEmpty(value)) {
//     return <small className="form-text text-danger">This field is required</small>;
//   }
// }
// const phone = (value) => {
//   if (!isNumeric(value, [{ no_symbols: true }])) {
//     return <small className="form-text text-danger">The phone number contains only numbers.</small>;
//   }
//   else if (value.trim().length < 10) {
//     return <small className="form-text text-danger">The phone number can't less than 10 letters.</small>;
//   }
//   else if (value.trim().length > 15) {
//     return <small className="form-text text-danger">The phone number can't more than 15 letters.</small>;
//   } if (value.trim().length < 10) {
//     return <small className="form-text text-danger">The phone number can't less than 10 letters.</small>;
//   }
// }
// const email = (value) => {
//   if (!isEmail(value)) {
//     return <small className="form-text text-danger">Invalid email format</small>;
//   }
// }
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectOptions: [],
      status: 1,
      skills: [],
      dateOut : "",
      dateIn : "",
      birthday : "",
      error: 0,
      selectedStatus : "",
      data : {}
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {   
    let res0 = await getTotal();    
    this.setState({ options: res0 })
    const res = await getData(this.props.id);
    // let tagsTemp = []
    // res.skills.forEach(element => {
    //   this.setState({ tags: [...this.state.tags, element.name] })
    // });
    // this.setState({tags : tagsTemp})
    // console.log(res)
    this.setState({
      id: String(res.id),
      firstName: res.firstName,
      lastName: res.lastName,
      englishName: res.englishName,
      phoneNumber: String(res.phoneNumber),
      birthday: new Date(new Date(res.birthday).toDateString()),
      dateIn: new Date(new Date(res.dateIn).toDateString()),
      avatar: res.avatar,
      salary : String(res.salary),
      address: res.address,
      email: res.email,
      skype: res.skype,
      expYear: String(res.expYear),
      // dayOffRemain: res.dayOffRemain,
      status: String(res.status),
      // createdAt: moment(res.createdAt).format('DD/MM/YYYY'),
      // updatedAt: moment(res.updatedAt).format('DD/MM/YYYY'),
      skills: res.skills.id
    });
    res.skills.map(e => {
      e.value = e.id;
      e.label = e.name;
      delete e.id;
      delete e.name
  })   
  // console.log(this.state)
  this.setState({selectOptions :res.skills })
  }
  isChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    // console.log(event.target.value);
    this.setState({
      [fieldName]: value
    });
    this.setState({
      data : {
        [fieldName] : value
      }
    })
  }
  handleChangeBirthday = (date) => {
    // console.log(date)
    this.setState({
      birthday: date,
      data :{
        birthday : date
      }
    });
  }
  handleChangeDateIn = (date) => {
    // console.log(date)
    this.setState({
      dateIn: date,
      data : {
        dateIn : date
      }
    });
  }
  handleChangeDateOut = (date) => {
    // console.log(date)
    this.setState({
      dateOut: date,
      data : {
        dayOut : date
      }
    });
  }
  handleChangeSkill = (selectOptions) => {
    this.setState({ selectOptions });
    let temp = []
    if (selectOptions != null) {
      selectOptions.forEach(element => {
        temp.push(element.value)
      });
      // this.setState({ skills: temp });
      this.setState({
        data :{
          skills : temp
        }
      })
      console.log(this.state.data.skills)
    }
  }
  
  submitSaveForm = (event) => {
    event.preventDefault() // stop loading        
    console.log(this.state)
    // console.log(this.state.data)
    // console.log("data: " + this.state.data.skills)
    EditEngineer(this.state.data,this.props.id).then((result) => {
      console.log(result);
      let rediect = false;
      if (!result.statusCode) {
        rediect = true;
        alert("Edit successful!")
      } else {
        if (result.statusCode != 500) {
          // this.setState({ msg: "Email or Skype was used by another account." })
          this.setState({ msg: "Error." })
        }
       
      }
      if (rediect) {
        // window.location = "/engineer";
      }
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.form.validateAll();
  }
  displayStatus = ()=>{
    if(this.state.status == 0) this.setState({selectedStatus : "selected"})
  }
 
  render() {
    console.log(this.state.selectOptions)
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
            <Form >
                <div className="form-group" style={{ textAlign: 'center' }}>
                  <img height="130px" src={this.state.avatar} /><br /><br />
                </div>
                <div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">English Name</label>
                      <Input type="text" name="englishName" value ={this.state.englishName} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">First Name</label>
                      <Input type="text" name="firstName" value ={this.state.firstName} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Last Name</label>
                      <Input type="text" name="lastName" value ={this.state.lastName} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>
                      {/* <div className="form-group">
                      <label className="control-label">Image</label>
                      <Input type="file" name="avatar" className="form-control" /> </div> */}
                    <div className="form-group">
                      <label className="control-label">Address</label>
                      <Input type="text" name="address" value ={this.state.address} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>
                   
                    {/* <div className="form-group">
                      <label className="control-label">Experiences</label>
                      <Input type="number" name="expYear" onChange={(event) => this.isChange(event)}  className="form-control" /> </div> */}
                    <div className="form-group">
                      <label className="control-label">Phone Number</label>
                      <Input type="text" name="phoneNumber" value ={this.state.phoneNumber} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>
                      <div className="form-group">
                      <label className="control-label">Salary</label>
                      <Input type="number" name="salary" value ={this.state.salary} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>
                  </div>
                  <div className="col-md-6" style={{ height: "444px" }}>
                    <div className="form-group">
                      <label className="control-label">Email</label>
                      <Input type="text" name="email" value ={this.state.email} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Skype</label>
                      <Input type="text" name="skype" value ={this.state.skype} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>
                   
                    <div className="form-group">
                      <label className="control-label">Birthday</label><br />
                      <DatePicker selected={this.state.birthday} onChange={this.handleChangeBirthday} /> </div>
                    <div className="form-check">
                      <label className="control-label">Date in</label><br />
                      <DatePicker selected={this.state.dateIn} onChange={this.handleChangeDateIn} /> </div>
                      <div className="form-check">
                      <label className="control-label">Date out</label><br />
                      <DatePicker selected={this.state.dateOut} onChange={this.handleChangeDateOut} /> </div>
                    <div className="form-check">
                      <label className="form-check-label"> Skills:  </label>
                      {/* <div className="col-md-12"> */}
                        <Select value={this.state.selectOptions} options={this.state.options} isMulti onChange={this.handleChangeSkill} />
                      {/* </div> */}
                    </div>
                    <div className="form-group">
                      <label className="control-label">Status</label>
                      <select className="form-control" onChange={(event) => this.isChange(event)} name="status" >
                        <option value={1} >Available</option>
                        <option value={0}  selected={this.state.selectedStatus}>Unavailable</option>
                      </select>
                    </div>
                  </div>
                  <div className="margiv-top-10" style={{ textAlign: 'center' }}>
                    <button type="submit" className="btn green" onClick={(event) =>this.submitSaveForm(event)} style={{ right:"180px",top: "100px" }}> SAVE </button>
                  </div>
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