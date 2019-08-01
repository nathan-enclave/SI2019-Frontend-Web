import React, {Component} from 'react'

export default class OveralView extends Component {
    render() {
        return (
            <div className="row OverallView">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">
                        <div className="display">
                            <div className="number">
                                <h3 className="font-green-sharp">
                                    <span>235</span>
                                    <small className="font-green-sharp"></small>
                                </h3>
                                <small>Total project</small>
                            </div>
                            <div className="icon">
                                <i className="icon-pie-chart"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">
                        <div className="display">
                            <div className="number">
                                <h3 className="font-red-haze">
                                    <span>12</span>
                                </h3>
                                <small>Pending</small>
                            </div>
                            <div className="icon">
                                <i className="icon-like"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">
                        <div className="display">
                            <div className="number">
                                <h3 className="font-blue-sharp">
                                    <span>24</span>
                                </h3>
                                <small>Current team</small>
                            </div>
                            <div className="icon">
                                <i className="icon-basket"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="dashboard-stat2 bordered">
                        <div className="display">
                            <div className="number">
                                <h3 className="font-purple-soft">
                                    <span>102</span>
                                </h3>
                                <small>Engineer in team</small>
                            </div>
                            <div className="icon">
                                <i className="icon-user"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
