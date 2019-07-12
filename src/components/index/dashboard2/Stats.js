import React, { Component } from 'react';

class Stats extends Component {
    render() {
        return (
                 <div className="overview-engineer">
              <div className="row overview-hr widget-row">
                {/* Total Engineer */}
                <div class="col-md-3">
                  <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
                    <h4 class="widget-thumb-heading">Total engineer</h4>
                    <div class="widget-thumb-wrap">
                      <i class="widget-thumb-icon bg-green fa fa-user"></i>
                      <div class="widget-thumb-body">
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">200</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-3">
                  <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
                    <h4 class="widget-thumb-heading">Total salary</h4>
                    <div class="widget-thumb-wrap">
                      <i class="widget-thumb-icon bg-red fa fa-money"></i>
                      <div class="widget-thumb-body">
                        <span class="widget-thumb-subtitle">VND</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">100M</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-3">
                  <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
                    <h4 class="widget-thumb-heading">Average salary</h4>
                    <div class="widget-thumb-wrap">
                      <i class="widget-thumb-icon bg-purple fa fa-money"></i>
                      <div class="widget-thumb-body">
                        <span class="widget-thumb-subtitle">VND</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">10M</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-3">
                  <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
                    <h4 class="widget-thumb-heading">Average age</h4>
                    <div class="widget-thumb-wrap">
                      <i class="widget-thumb-icon bg-blue icon-bulb"></i>
                      <div class="widget-thumb-body">
                        <span class="widget-thumb-subtitle"></span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Stats;