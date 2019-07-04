import React, { Component } from 'react';

class Portlet extends Component {
    render() {
        return (
            <div className="portlet light bordered">
            <div className="portlet-title">
              <div className="caption">
                <i className="icon-bar-chart font-dark hide" />
                <span className="caption-subject font-dark bold uppercase">Overview</span>
                <span className="caption-helper">weekly stats...</span>
              </div>
              <div className="actions">
                <div className="btn-group btn-group-devided" data-toggle="buttons">
                  <label className="btn red btn-outline btn-circle btn-sm active">
                    <input type="radio" name="options" className="toggle" id="option1" />New list project</label>
                </div>
              </div>
            </div>
            <div className="portlet-body">
              <div id="site_statistics_loading">
                <img src="../assets/global/img/loading.gif" alt="loading" /> </div>
              <div id="site_statistics_content" className="display-none">
                <div id="site_statistics" className="chart"> </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Portlet;