import React, { Component } from 'react'

export default class MSGSuccess extends Component {
  render() {
    
    return (
      <div className="DeletePopUp">
        {/* <div class="modal-content"> */}
          <div className="modal-header">
              <h4 className="modal-title">Message</h4>
          </div>
          <div className="modal-body">Update profile successfully.</div>
          {/* <div class="modal-footer">
              <button type="button" onClick={this.props.onClose} class="btn red">OK</button>
          </div> */}
      {/* </div> */}
      </div>
    )
  }
}