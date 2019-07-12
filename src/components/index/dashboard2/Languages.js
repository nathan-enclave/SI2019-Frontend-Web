import React, { Component } from 'react';
import Chart from "react-apexcharts";
import getLang from './LanguegesFetch';

class Languages extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: []
            }
          },
          series: [
            {
              name: "series-1",
              data: []
            }
          ]
        };
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
              width="500"
            />
                </div>
            </div>
        );
    }
}

export default Languages;