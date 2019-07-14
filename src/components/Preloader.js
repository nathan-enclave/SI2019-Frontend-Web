import React, { Component } from 'react'

export default class Preloader extends Component {
  render() {
    return (
      <div className="Preloader" style={{position: this.props.styleCustom? this.props.styleCustom: 'relative'}}>
          <div class="wrap">
            <div class="loading">
              <div class="bounceball" style={{}}></div>
              <div class="text">NOW LOADING</div>
            </div>
          </div>
      </div>
    )
  }
}
