import React, { Component } from 'react';

class CashStats extends Component {
    render() {
        return (
            <div>
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bar-chart font-dark hide" />
                        <span className="caption-subject font-dark bold uppercase" style={{fontSize:"18px"}}>Stats</span>
                    </div>
                    <br />
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 green">
                            <div className="visual">
                                <i className="fa fa-bar-chart-o" />
                            </div>
                            <div className="details">
                                <div className="number">
                                    <div className="desc"  style={{fontSize:"22px"}}> Cash going in</div>
                                    <span data-counter="counterup" >{this.props.team}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 green">
                            <div className="visual">
                                <i className="fa fa-shopping-cart" />
                            </div>
                            <div className="details">
                                <div className="number">
                                    <div className="desc" style={{fontSize:"22px"}}> Cash going out </div>
                                    <span data-counter="counterup" >{this.props.project}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 green">
                            <div className="visual">
                                <i className="fa fa-globe" />
                            </div>
                            <div className="details">
                                <div className="number">
                                    <div className="desc"  style={{fontSize:"22px"}}> Profit/loss </div>
                                    <span data-counter="counterup" />{this.props.manager} </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat dashboard-stat-v2 green">
                            <div className="visual">
                                <i className="fa fa-globe" />
                            </div>
                            <div className="details">
                                <div className="number">
                                    <div className="desc" style={{fontSize:"22px"}}> Project </div>
                                    <span data-counter="counterup" />{this.props.manager} </div>
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