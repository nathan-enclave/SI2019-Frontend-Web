import React, { Component } from 'react';

class MoreInformatin extends Component {
    render() {
        return (
            <div className="col-md-6 profile-info">                   
            <div className="tabbable-line tabbable-custom-profile">
          <ul className="nav nav-tabs">
            <li className="active">
              <span className="caption-subject font-dark bold uppercase inline-block margin-top-15">Contact</span>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="tab_1_11">
              <div className="tab-content-chart">
              <ul className="col-xs-24 ul-item-engineer">
            <li className="li-item-engineer" >
              <img src="/assets/img-icon/skype.png" alt="" />{this.state.skype} </li>
            <li className="li-item-engineer" >
              <img src="/assets/img-icon/gmail.jpg" alt=""/>{this.state.email}</li> 
            <li className="li-item-engineer" >
              <img src="/assets/img-icon/mobile-phone.png" alt="" />
              {this.state.phoneNumber}</li>
            <li className="li-item-engineer" >
              <img src="/assets/img-icon/location.png" alt="" /> {this.state.address} </li>
          </ul>
              </div>
            </div>
          </div>
          </div>
          </div>
        );
    }
}

export default MoreInformatin;