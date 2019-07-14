import React, { Component } from 'react';
import Preloader from '../../Preloader'
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
        let loader = {}
        if (Object.keys(this.state).length > 0) {
            loader.cashInTemplate = 
                    <div className="details">
                        <div className="number">
                            <div className="desc"  style={{fontSize:"22px"}}> Cash going in</div>
                            <span data-counter="counterup" >{this.state.cashIn} M</span>
                        </div>
                    </div>
              
            loader.cashOutTemplate = 
                    <div className="details">
                        <div className="number">
                            <div className="desc"  style={{fontSize:"22px"}}> Cash going out</div>
                            <span data-counter="counterup" >{this.state.cashOut} M</span>
                        </div>
                    </div>

            loader.profitTemplate =
                    <div className="details">
                        <div className="number">
                            <div className="desc"  style={{fontSize:"22px"}}> Profit </div>
                            <span data-counter="counterup" />{this.state.profit} M </div>
                    </div>

            loader.projectTemplate = 
                    <div className="details">
                        <div className="number">
                            <div className="desc" style={{fontSize:"22px"}}> Projects </div>
                            <span data-counter="counterup" />{this.state.project} </div>
                    </div>

        } else {
            loader.cashInTemplate = <Preloader styleCustom={"unset"}/>
            loader.cashOutTemplate = <Preloader styleCustom={"unset"}/>
            loader.profitTemplate = <Preloader styleCustom={"unset"}/>
            loader.projectTemplate = <Preloader styleCustom={"unset"}/>
            
        }
        return (
            <div className="CashStats">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bar-chart font-dark hide" />
                        <span className="caption-subject font-dark bold uppercase" style={{fontSize:"18px"}}>Stats</span>
                    </div>
                    <br />
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 purple " style={{background: "#10ac84"}}>
                            <div className="visual">
                                <i className="fa fa-bar-chart-o" />
                            </div>
                            {loader.cashInTemplate}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 green" style={{background: "#2e86de" }}>
                            <div className="visual">
                                <i className="fa fa-bar-chart-o" />
                            </div>
                            {loader.cashOutTemplate}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 purple" >
                            <div className="visual">
                                <i className="fa fa-bar-chart-o" />
                            </div>
                            {loader.profitTemplate}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 green" style={{background: "#1B1464"}}>
                            <div className="visual">
                                <i className="fa fa-bar-chart-o" />
                            </div>
                            {loader.projectTemplate}
                        </div>  
                    </div>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default CashStats;