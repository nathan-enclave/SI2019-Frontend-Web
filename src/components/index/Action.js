import React, { Component } from 'react';

class Action extends Component {
    render() {
        return (
           
        <div className="portlet light bordered">                                
          <div className="portlet-body">
            <div className="tab-content">
              <div className="tab-pane active" id="tab_actions_pending">
                <div className="mt-actions">
                  <div className="mt-action">
                    <div className="mt-action-img">
                      <img src="../assets/pages/media/users/avatar10.jpg" alt="" /> </div>
                    <div className="mt-action-body">
                      <div className="mt-action-row">
                        <div className="mt-action-info ">
                          <div className="mt-action-icon ">
                            <i className="icon-magnet" />
                          </div>
                          <div className="mt-action-details ">
                            <span className="mt-action-author">Natasha Kim</span>
                            <p className="mt-action-desc">Dummy text of the printing</p>
                          </div>
                        </div>
                        <div className="mt-action-datetime ">
                          <span className="mt-action-date">3 jun</span>
                          <span className="mt-action-dot bg-green" />
                          <span className="mt=action-time">9:30-13:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default Action;