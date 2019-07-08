import React, { Component } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import AddSkills from './AddSkills';
import AddEngineer from './../../../services/AddEngineer';
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // startDate: ""
      skills: [1,2]
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // clickButton = (event)=>{
  //   this.setState({openSkillOption : !this.state.openSkillOption});
  // }
  // clickButtonAddSkill = (event) =>{
  //   let value = event.target.value;
  //   console.log(value);
  //   this.setState(
  //     {
  //       skills : [value]
  //     }
  //   )
  // }

  // checkDisplaySkillOption = ()=>{
  //   if(this.state.openSkillOption == true){
  //     return (<div><a name="addSkills"  className="btn btn-primary green" onClick={(event)=>this.clickButton(event)}>+</a></div>);
  //   }else{     
  //     return (<div>
  //       <a name="addSkills"  className="btn btn-primary green" onClick={(event)=>this.clickButton(event)}>-</a>
        
  //       </div>);
  //   }
  // }

  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }
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
    this.setState({
      status : Number(this.state.status),
      expYear : Number(this.state.expYear)
    });
    console.log(this.state);
    AddEngineer(this.state);
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
                    <input type="number" name="expYear"onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                  <div className="form-group">
                    <label className="control-label">Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                </div>

                <div className="col-md-6" style={{height:"444px"}}>
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
                    <label className="form-check-label"> Skills: {this.state.skills} </label>                    
                    {/* {this.checkDisplaySkillOption()} */}
                  </div>
                  <div className="form-group">
                    <label className="control-label">Status</label>
                    <select className="form-control"  onChange={(event) => this.isChange(event)} name="status" >
                    <option value="2" >--------------</option>
                      <option value="1" >Available</option>
                      <option value="0" >Unavailable</option>
                    </select>
                  </div>
                </div>
                
              </form>
              
            </div>
            <div className="margiv-top-10" style={{ textAlign: 'center'  }}>
                  <a className="btn green" onClick={(event) => this.submitAddForm(event)} style={{right:'220px',top:"50px"}}> Add + </a>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;