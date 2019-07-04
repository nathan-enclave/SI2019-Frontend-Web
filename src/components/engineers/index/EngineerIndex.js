import React, { Component } from 'react';
import TableData from './TableData';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';

import DatePicker from "react-datepicker";

class EngineerIndex extends Component { 
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }   
    render() {
        return (
            <div className="row">
            <div className="col-md-24">
              <div className="portlet box green">
                <div className="portlet-title">
                  <div className="caption">
                    <i />Engineer Table </div>
                </div>
                <div className="portlet-body"> 
                <div style={{paddingBottom: '20px'}}>
                <div style={{width: '200px',float:'left'}}>
                <button onClick={this.toggleModal}>
                  <i className="fa fa-edit"></i> Add  </button>
                </div>                
                <div className="search-form" style={{float:'right',width: '400px',backgroundColor:'#B9ECF0'}} >
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search here" name="query" />
                        <span className="input-group-btn">
                          <a href="abc" className="btn md-skip submit">
                            <i className="fa fa-search" />
                          </a>
                        </span>
                      </div>
                </div>
                </div> 
                <br />
                 <TableData />
                </div>
              </div>
            </div>
            <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
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
                    <div className="form-group" style={{textAlign: 'center'}}>     
                      <img height="130px" src="../assets/layouts/layout6/img/none-avatar.png"  /><br /><br /> 
                      <div className="form-group"  style={{width: '100px', marginLeft: '615px'}}>
                        <input type = "text" name = "engName"  className="form-control"  placeholder="Eng name"/> </div>
                    </div> 
                    
                    <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">First Name</label>
                      <input type = "text" name= "firstName" className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Last Name</label>
                      <input type="text" name="lastName" className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Address</label>
                      <input type="text" name="address" className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Experiences</label>
                      <input type="text" name="exp" className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Phone Number</label>
                      <input type="text" name="phone" className="form-control" /> </div>
                    </div>   

                    <div className="col-md-6">                   
                    <div className="form-group">
                      <label className="control-label">Email</label>
                      <input type="text" name="email" className="form-control" /> </div>                    
                    <div className="form-group">
                      <label className="control-label">Skype</label>
                      <input type="text" name="skype" className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Birthday</label><br/>
                      <DatePicker        selected={this.state.startDate}        onChange={this.handleChange}      /> </div>
                      <div className="form-check">
        <label className="form-check-label"> Skills <br />
          <input type="checkbox" className="form-check-input" />
          JAVA<br />
          <input type="checkbox" className="form-check-input"/>
          React JS<br />
          <input type="checkbox" className="form-check-input"/>
          Node JS<br />
          <input type="checkbox" className="form-check-input"/>
          PHP<br />
        </label>
      </div>
                    <div className="form-group">
                      <label className="control-label">Status</label>
                      <select class="form-control" onChange={(event) =>this.isChange(event)} name="status" id="">
                        <option value="available">Available</option>
                        <option value = "Unavailable">Unavailable</option>
                      </select> 
                    </div>    
                    </div>            
                    <div className="margiv-top-10" style={{textAlign: 'center'}}>
                      <a  className="btn green" onClick = {(event) =>this.submitAddForm(event)}> Add </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
            </Modal>
          </div>
        );
    }
}

export default EngineerIndex;