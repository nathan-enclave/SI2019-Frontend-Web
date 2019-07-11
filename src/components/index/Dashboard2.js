import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Dashboard2 extends Component {
    constructor(props) {
        super(props);

        //percentage of language
        const optionsBar= {
          chart: {
            stacked: true,
            stackType: '100%',
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            width: 0,
          },
          xaxis: {
            categories: ['Ratio'],
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: "vertical",
              shadeIntensity: 0.35,
              gradientToColors: undefined,
              inverseColors: false,
              opacityFrom: 0.85,
              opacityTo: 0.85,
              stops: [90, 0, 100]
            },
          },
  
          legend: {
            position: 'bottom',
            horizontalAlign: 'right',
          }
        };
        const seriesBar =  [
          {
            name: 'PHP',
            data: [32]
          }, {
            name: 'Java',
            data: [41]
          }, {
            name: 'Javascript',
            data: [12]
          }, {
            name: 'Ruby',
            data: [65]
          }
        ]


        //available or not
        const optionsStatusEngineer = {
          colors:['#2da68a', '#bfacac'],
          labels:['On Team', 'Free']
        }
        const seriesStatusEngineer= [200, 25]


       
        //hired/left
        const optionsWorkingStatusColumn= {
            
          };
        const seriesWorkingStatusColumn= [
          {
            name: 'Hire',
            type: 'column',
            data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
          },
          {
            name: 'Left',
            type: 'column',
            data: [11.1, 13, 13.1, 14, 14.1, 14.9, 16.5, 18.5]
          },
          
        ];

        this.state = {
          languageRatio: {
            options: optionsBar,
            series: seriesBar
          },
          statusEngineer: {
            options:optionsStatusEngineer,
            series: seriesStatusEngineer
          },
          workingStatus: {
            options: optionsWorkingStatusColumn,
            series: seriesWorkingStatusColumn
          }
        };
      }
    render() {
        return ( 
          <div className="Dashboard2">
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
           
            <div className="row">
              <div class="col-lg-12 col-xs-12 col-sm-12">
                <div className="portlet light bordered">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="icon-bar-chart font-dark hide" />
                      <span className="caption-subject font-dark bold uppercase">Overview</span>
                      <span className="caption-helper">weekly stats...</span>
                    </div>
                  </div>
                {/* chart here */}
                  <div>
                    <Chart
                          options={this.state.workingStatus.options}
                          series={this.state.workingStatus.series}
                          type="bar"
                          width="100%"
                          height="400"
                        />
                  </div>
                </div>
              </div>
            </div>


            <div className="row">
              <div class="col-lg-6 col-xs-12 col-sm-12">
                <div className="portlet light bordered">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="icon-bar-chart font-dark hide" />
                      <span className="caption-subject font-dark bold uppercase">Programming languages</span>
                      <span className="caption-helper"></span>
                    </div>
                  </div>
                {/* chart here */}
                  <div>
                    <Chart
                          options={this.state.languageRatio.options}
                          series={this.state.languageRatio.series}
                          type="bar"
                          width="100%"
                          height="150"
                        />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xs-12 col-sm-12">
                <div className="portlet light bordered">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="icon-bar-chart font-dark hide" />
                      <span className="caption-subject font-dark bold uppercase">Engineer status</span>
                      <span className="caption-helper"></span>
                    </div>
                  </div>
                {/* chart here */}
                  <div>
                  <Chart options={this.state.statusEngineer.options} series={this.state.statusEngineer.series} type="donut" width="380"  width="80%" />
                  </div>
                </div>
              </div>
            </div>


          </div>

        );
    }
}

export default Dashboard2;