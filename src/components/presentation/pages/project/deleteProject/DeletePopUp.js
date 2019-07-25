import React, { Component } from 'react'
export default class DeletePopUp extends Component { 
  render() {    
    return (
      <div className="DeletePopUp">
          <div className="modal-header">
              <h4 style={{color:'red'}} className="modal-title">Delete : "<span >{this.props.name}"</span></h4>
          </div>
          <div className="modal-body">{this.props.message}</div>
        <button onClick={this.props.onClose} className="btn btn-outline btn-sm green" style={{float: 'right',margin:'10px'}} >
             Cancel
            </button>
            <button onClick={this.props.confirm} className="btn btn-outline btn-sm red" style={{float: 'right',margin:'10px'}} >
            Confirm
            </button>
      </div>
    )
  }
}