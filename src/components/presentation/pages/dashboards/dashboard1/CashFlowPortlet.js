import React, { Component } from 'react';
import Chart from "react-apexcharts";
import DashboardContainer from '../../../../container/dashboard';
import { ClipLoader } from 'react-spinners';

class CashFlowPortlet extends Component {
    constructor(props) {
        super(props);
        this.state ={
            load : true,
                options: {
                    colors: ['#10ac84','#2e86de',  '#FF5B5B'],
                    xaxis: {
                        categories: []
                      },
                    yaxis:[
                        {
                        title: {
                            text: "Millions"
                            }
                        }
                    ],
                    stroke: {
                        width: [1,1,2]
                    }                    
                },
                series: [
                    {
                        name: 'Cash in',
                        type: 'column',
                        data: []
                    },
                    {
                        name: 'Cash out',
                        type: 'column',
                        data: []
                    },  
                    {
                        name: 'Profit',
                        type: 'line',
                        data : []
                    }      
                ]              
        }
    }
    async componentDidMount(){
        const data = await DashboardContainer.getStatistic('dashboard/cashflow/' + new Date().getFullYear())
        let catData = [], seriesData1 =[], seriesData2 = [],seriesData3 = [];
        data.forEach(element => {
            catData.push(element.month)
            seriesData1.push((element.cashIn)/1000000)
            seriesData2.push(element.cashOut/1000000)
            seriesData3.push(element.cashIn/1000000 -element.cashOut/1000000 )
        });
        this.setState({   
            load : false,
                options:{
                    xaxis: {
                        categories: catData
                      }
                },        
                series: [
                    {
                        name: 'Cash in',
                        type: 'column',
                        data: seriesData1
                    },
                    {
                        name: 'Cash out',
                        type: 'column',
                        data: seriesData2
                    },
                    {
                        name: 'Profit',
                        type: 'line',
                        data : seriesData3
                    }         
                ]              
        })
    }
    render() {
        return (
            <div className="portlet light bordered">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bar-chart font-dark hide" />
                        <span className="caption-subject font-dark bold uppercase">Cash flow - {new Date().getFullYear()}</span>
                    </div>
                </div>
                {/* chart here */}
                <div >
                {this.state.load === true ? (
          <div className='sweet-loading d-flex justify-center middle-loading-custom' >
            <ClipLoader
              sizeUnit={"px"}
              size={70}
              color={'#7ed6df'}
              loading={this.state.loading} />
          </div>
        ) : (
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        height="400px"
                    />
        )}
                </div>
            </div>
        );
    }
}
export default CashFlowPortlet;