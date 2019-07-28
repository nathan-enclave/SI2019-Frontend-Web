import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div className="DeletePopUp">
        <div className="modal-header">
          <h4 className="modal-title">Message</h4>
        </div>
        <div className="modal-body">{this.props.message}</div>

      </div>
    )
  }
}