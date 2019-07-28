import React, { Component } from 'react'
import Spinner from 'react-spinner-material';

export default class Preloader extends Component {
  render() {
    return (
      // <div className="Preloader" style={{position: this.props.styleCustom? this.props.styleCustom: 'relative'}}>
          <div className="wrap">
            <div className="loading">
            <Spinner size={50} spinnerColor={"#2980b9"} spinnerWidth={3} visible={true} />
            </div>
         </div>
      // </div>
    )
  }
}
