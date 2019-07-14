import React, { Component } from 'react';

class Stats extends Component {
  constructor(props){
    super(props)
    this.state = {
      totalSalary : 0,
      avgSalary : 0,
      avgAge : 0,
      total : 0 
    }
}
async componentDidMount(){
    const res = await fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/salary');
    const res2 = await fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/total');
    const data = await res.json();
    const totalEng = await res2.json();
    console.log(totalEng)
    // let totalSalary = 0, avgSalary = 0,avgAge = 0;
    this.setState({
      totalSalary : data.totalSalary,
      avgSalary : data.avgSalary,
      avgAge : data.avgAge,
      total : totalEng.engineer 
    })
    

}
    render() {
        return (
            <div className="overview-engineer">
              <div className="portlet-title">
                  <div className="caption">
                      <i className="icon-bar-chart font-dark hide" />
                      <span className="caption-subject font-dark bold uppercase" style={{fontSize:"18px"}}>Stats</span>
                  </div>
                  <br />
              </div>
              <div className="row overview-hr widget-row">
                {/* Total Engineer */}
                <div class="col-md-3">
                  <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
                    <h4 class="widget-thumb-heading">Total engineer</h4>
                    <div class="widget-thumb-wrap">
                      <i class="widget-thumb-icon bg-green fa fa-user"></i>
                      <div class="widget-thumb-body">
                      <span class="widget-thumb-subtitle">Engineer</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{this.state.total}</span>
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
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{this.state.totalSalary/1000000} M</span>
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
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{this.state.avgSalary/1000000} M</span>
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
                        <span class="widget-thumb-subtitle">Age</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{this.state.avgAge}</span>
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