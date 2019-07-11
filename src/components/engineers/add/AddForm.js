import React, { Component } from 'react';
import Select from 'react-select';
import AddEngineer from './../../../services/AddEngineer';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail, isEmpty, isNumeric } from 'validator';
import getTotal from './../../../services/GetListSkills';

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
    console.log(event.target.value);
    this.setState({
      [fieldName]: value
    });
  }
  submitAddForm = () => {
    //  event.preventDefault();  // stop loading        
    console.log(this.state);
    this.setState({
      status: Number(this.state.status),
      expYear: Number(this.state.expYear)
    });
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      englishName: this.state.englishName,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      email: this.state.email,
      skype: this.state.skype,
      expYear: this.state.expYear,
      status: this.state.status,
      skills: this.state.skills
    }
    console.log("data: " + data.address)
    AddEngineer(data).then((result) => {
      console.log(result);
      let rediect = false;
      if (!result.statusCode) {
        rediect = true;
        alert("Add successful!")
      } else {
        if (result.statusCode == 500) {
          this.setState({ msg: "Email or Skype was used by another account." })
        }
        // }
        // alert("Email or Skype was used by another account.");
        // else 
        // alert("Something wrong!")
      }
      if (rediect) {
        this.props.reloadData(true)  
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
  async componentDidMount() {
    const res = await getTotal();
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
                <div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">English Name</label>
                    <Input type="text" name="englishName" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">First Name</label>
                    <Input type="text" name="firstName" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Last Name</label>
                    <Input type="text" name="lastName" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Address</label>
                    <Input type="text" name="address" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Experiences</label>
                    <Input type="number" name="expYear" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Phone Number</label>
                    <Input type="text" name="phoneNumber" onChange={(event) => this.isChange(event)} validations={[required, phone]} className="form-control" /> </div>
                </div>
                <div className="col-md-6" style={{ height: "444px" }}>
                  <div className="form-group">
                    <label className="control-label">Email</label>
                    <Input type="text" name="email" onChange={(event) => this.isChange(event)} validations={[required, email]} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Skype</label>
                    <Input type="text" name="skype" onChange={(event) => this.isChange(event)} validations={[required]} className="form-control" /> </div>
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
                <div className="margiv-top-10" style={{textAlign: 'center' }}>
                    <button type="submit" className="btn green" onClick={this.submitAddForm} style={{ right: '220px', top: "50px" }}> Add + </button>
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
export default AddForm;