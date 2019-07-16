import React, { Component } from 'react';
import numeral from 'numeral'

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
    let res1 =  fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/salary');
    let res2 =  fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/total');
    [res1, res2] = await Promise.all([res1, res2])
    const data = await res1.json();
    const totalEng = await res2.json();
    this.setState({
      totalSalary :data.totalSalary/1000000,
      avgSalary :  parseFloat(data.avgSalary/1000000).toFixed(2),
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
                      <span className="caption-subject font-dark bold uppercase" style={{fontSize:"18px"}}>Statistic</span>
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
                      <span class="widget-thumb-subtitle">Engineers</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{numeral(this.state.total).format('0,0')}</span>
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
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{numeral(this.state.totalSalary).format('0,0')} M</span>
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
                      <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{numeral(this.state.avgSalary).format('0,0')} M</span>
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
                        <span class="widget-thumb-subtitle">Year olds</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{numeral(this.state.avgAge).format('0,0')}</span>
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