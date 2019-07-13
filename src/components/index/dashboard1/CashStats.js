import React, { Component } from 'react';

class CashStats extends Component {
    constructor(props){
        super(props)
        this.state = {
        }

    }
    async componentDidMount(){
        const res = await fetch('https://si-enclave.herokuapp.com/api/v1/dashboard/cashflow/' + new Date().getFullYear());
        const data = await res.json();
        let cashInData = 0, cashOutData = 0,projectData = 0;
        data.forEach(element => {
            cashInData += element.cashIn
            cashOutData += element.cashOut
            projectData += element.numOfProject
        });
        let profitData = cashInData/1000000 - cashOutData/1000000
        this.setState({
            cashIn : cashInData/1000000,
            cashOut : cashOutData/1000000,
            project : projectData,
            profit : profitData
        })

    }
    render() {
        return (
            <div className="overview-engineer">
              <div className="row overview-hr widget-row">
                {/* Total Engineer */}
                <div class="col-md-3">
                  <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
                    <h4 class="widget-thumb-heading">Cash going in</h4>
                    <div class="widget-thumb-wrap">
                      <i class="widget-thumb-icon bg-green fa fa-money"></i>
                      <div class="widget-thumb-body">
                      <span class="widget-thumb-subtitle">VND</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{this.state.cashIn} M</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-3">
                  <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
                    <h4 class="widget-thumb-heading">Cash going out</h4>
                    <div class="widget-thumb-wrap">
                      <i class="widget-thumb-icon bg-red fa fa-money"></i>
                      <div class="widget-thumb-body">
                        <span class="widget-thumb-subtitle">VND</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{this.state.cashOut} M</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-3">
                  <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
                    <h4 class="widget-thumb-heading">Profit</h4>
                    <div class="widget-thumb-wrap">
                      <i class="widget-thumb-icon bg-purple fa fa-money"></i>
                      <div class="widget-thumb-body">
                        <span class="widget-thumb-subtitle">VND</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{this.state.profit} M</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-3">
                  <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">
                    <h4 class="widget-thumb-heading">Number of Project</h4>
                    <div class="widget-thumb-wrap">
                      <i class="widget-thumb-icon bg-blue icon-bulb"></i>
                      <div class="widget-thumb-body">
                        <span class="widget-thumb-subtitle"></span>
                        <span class="widget-thumb-subtitle">project</span>
                        <span class="widget-thumb-body-stat" data-counter="counterup" data-value="7,644">{this.state.project}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
export default CashStats;