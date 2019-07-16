import React, { Component } from 'react'

export default class Preloader extends Component {
  render() {
    return (
      <div className="Preloader" style={{position: this.props.styleCustom? this.props.styleCustom: 'relative'}}>
          <div className="wrap">
            <div className="loading">
              <div className="bounceball" style={{}}></div>
              <div className="text">NOW LOADING</div>
            </div>
          </div>
      </div>
    )
  }
}
