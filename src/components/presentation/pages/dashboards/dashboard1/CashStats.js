import React, { Component } from 'react'
import numeral from 'numeral'
import { getAllApi } from "../../../../../api/crud";
import { ClipLoader } from 'react-spinners';

class CashStats extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    async componentDidMount(){
        const data = await getAllApi('dashboard/cashflow/' + new Date().getFullYear())
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
            loader.cashInTemplate = <span data-counter="counterup" >{numeral(this.state.cashIn).format('0,0')} M</span>                                  
            loader.cashOutTemplate =<span data-counter="counterup" >{numeral(this.state.cashOut).format('0,0')} M</span>
            loader.profitTemplate =<span data-counter="counterup" >{numeral(this.state.profit).format('0,0')} M </span>
            loader.projectTemplate = <span data-counter="counterup" >{numeral(this.state.project).format('0,0')} </span>
        } else {
            loader.cashInTemplate 
            = loader.cashOutTemplate
            = loader.profitTemplate 
            = loader.projectTemplate 
            = ( <div className='sweet-loading d-flex justify-center' >
            <ClipLoader
                sizeUnit={"px"}
                size={40}
                color={'#7ed6df'}
                loading={true} />
        </div>)                  
        }
        return (
            <div className="CashStats">
                <div className="portlet-title">
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 purple " style={{background: "#10ac84"}}>
                            <div className="visual">
                                <i className="fa fa-money"/>
                            </div>
                            <div className="details">
                        <div className="number">
                            <div className="desc"  style={{fontSize:"22px"}}> Cash going in</div>
                            {loader.cashInTemplate}
                        </div>
                        </div>
                    </div>       
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 green" style={{background: "#2e86de" }}>
                            <div className="visual">
                            <i className="fa fa-money" />
                            </div>
                            <div className="details">
                        <div className="number">
                            <div className="desc"  style={{fontSize:"22px"}}> Cash going out</div>
                            {loader.cashOutTemplate}
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 red" >
                            <div className="visual">
                            <i className="fa fa-money" />
                            </div>
                            <div className="details">
                        <div className="number">
                            <div className="desc"  style={{fontSize:"22px"}}> Profit </div>
                            {loader.profitTemplate}
                            </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 green" style={{background: "#1B1464"}}>
                            <div className="visual">
                                <i className="fa fa-lightbulb-o" />
                            </div>
                            <div className="details">
                        <div className="number">
                            <div className="desc" style={{fontSize:"22px"}}> Projects </div>
                            {loader.projectTemplate}
                            </div>
                    </div>
                        </div>  
                    </div>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}
export default CashStats;