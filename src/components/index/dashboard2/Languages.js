import React, { Component } from 'react';
import Chart from "react-apexcharts";

class Languages extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options : {
            chart: {
                height: 380,
                type: 'bar'
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e', '#f48024', '#69d2e7','#FFFFA6','#8080C0','#FFC488'],
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff']
                },
                formatter: function(val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: 0,
                dropShadow: {
                  enabled: true
                }
            },           
            stroke: {
                width: 1,
              colors: ['#fff']
            },
            xaxis: {
                categories: [],
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            title: {
                text: 'Language',
                align: 'center',
                floating: true
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function() {
                            return ''
                        }
                    }
                }
            }
        },
        series: [{
          name: "number",
          data: []
      }]
        }
      }
   async componentDidMount(){
       const res =await fetch('https://si-enclave.herokuapp.com/api/v1/skills/statistic/ratio');
       const data = await res.json();
       console.log(data)    
        let categoriesData = []
       let seriesData = []
        data.forEach(element => {
            categoriesData.push(element.name);
            seriesData.push(element.count)
        });        
        this.setState({
            options: { 
                chart: {
                id: "basic-bar"
              },
                xaxis:{
                    categories: categoriesData
                }
            },
            series : [{
                name: "number",
                data: seriesData
            }]
        })
        
    }
    render() {
        console.log(this.state.series)
        return (
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
         
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="75%"
              height="500px"
            />
                </div>
            </div>
        );
    }
}

export default Languages;