import React, { Component } from 'react';
import Select from 'react-select';
import AddEngineer from './../../../services/AddEngineer';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options:  [
        { label: "Java", value: 1 },
        { label: "C/C++", value: 2 },
        { label: "NodeJS", value: 3 },
        { label: "React", value: 4 },
        { label: "Angular", value: 5 },
        { label: "PHP", value: 6 },
      ],
      selectOptions: [],
      skills : []
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
  submitAddForm = (event) => {
    event.preventDefault();  // stop loading        
    console.log(this.state);
    this.setState({
      status: Number(this.state.status),
      expYear: Number(this.state.expYear)
    });
    const data = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      englishName : this.state.englishName,
      phoneNumber : this.state.phoneNumber,
      address : this.state.address,
      email : this.state.email,
      skype : this.state.skype,
      expYear : this.state.expYear,
      status : this.state.status,
      skills : this.state.skills

    }
    console.log("data: " +data.address)
    AddEngineer(data);
  }
  handleChange = (selectOptions) => {
    this.setState({ selectOptions });
    let temp = []
    selectOptions.forEach(element => {
      temp.push(element.value)
    });   
   
    this.setState({skills : temp});
    // console.log("skills: " +this.state.skills);
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
            <div className="tab-pane active" id="tab_1_1">
              <form role="form" action="abc">
                <div className="form-group" style={{ textAlign: 'center' }}>
                  <img height="130px" src="../assets/layouts/layout6/img/none-avatar.png" /><br /><br />

                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">English Name</label>
                    <input type="text" name="englishName" onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">First Name</label>
                    <input type="text" name="firstName" onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Last Name</label>
                    <input type="text" name="lastName" onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Address</label>
                    <input type="text" name="address" onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Experiences</label>
                    <input type="number"  name="expYear" onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                </div>

                <div className="col-md-6" style={{ height: "444px" }}>
                  <div className="form-group">
                    <label className="control-label">Email</label>
                    <input type="text" name="email" onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Skype</label>
                    <input type="text" name="skype" onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                  {/* <div className="form-group">
                    <label className="control-label">Birthday</label><br />
                    <DatePicker selected={this.state.startDate} onChange={this.handleChange} /> </div> */}
                  <div className="form-check">
                    <label className="form-check-label"> selectOptions:  </label>
                    <div className="col-md-12">
                      <Select value ={this.state.selectOptions} options={this.state.options} isMulti  onChange={this.handleChange} />
                    </div>
                  
                  </div>
                  <div className="form-group">
                    <label className="control-label">Status</label>
                    <select className="form-control" onChange={(event) => this.isChange(event)} name="status"   >
                      <option value={2} >--------------</option>
                      <option value={1} >Available</option>
                      <option value={0} >Unavailable</option>
                    </select>
                  </div>
                </div>

              </form>

            </div>
            <div className="margiv-top-10" style={{ textAlign: 'center' }}>
              <a className="btn green" onClick={(event) => this.submitAddForm(event)} style={{ right: '220px', top: "50px" }}> Add + </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;