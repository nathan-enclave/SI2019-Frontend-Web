import React, { Component } from 'react'

export default class MSGSuccess extends Component {
  constructor(props){
      super(props);
  }
  render() {
    
    return (
      <div className="DeletePopUp">
        {/* <div class="modal-content"> */}
          <div class="modal-header">
              <h4 class="modal-title">Message</h4>
          </div>
          <div class="modal-body">{this.props.message}</div>
          {/* <div class="modal-footer">
              <button type="button" onClick={this.props.onClose} class="btn red">OK</button>
          </div> */}
      {/* </div> */}
      </div>
    )
  }
}