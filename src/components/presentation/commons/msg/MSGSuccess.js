import React, { Component } from 'react'

export default class MSGSuccess extends Component {
  constructor(props){
      super(props);
      this.state={}
  }
  render() {
    
    return (
      <div className="DeletePopUp">
          <div class="modal-header">
              <h4 class="modal-title">Message</h4>
          </div>
          <div class="modal-body">Update profile successfully.</div>
      </div>
    )
  }
}