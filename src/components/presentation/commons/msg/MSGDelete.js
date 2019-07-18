import React, { Component } from 'react'

export default class MSGDelete extends Component {
 
  render() {
    
    return (
      <div className="DeletePopUp">
          <div class="modal-header">
              <h4 class="modal-title">Message</h4>
          </div>
          <div class="modal-body">{this.props.message}</div>
      </div>
    )
  }
}