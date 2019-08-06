import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Stats extends Component {
    render() {
        return (
            <div className="Stats">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <Link to="/engineer">
                            <div className="dashboard-stat dashboard-stat-v2 blue">
                                <div className="visual">
                                    <img src="../assets/img-icon/work.png" width="70px" height="70px" alt=""/>
                                </div>
                                <div className="details">
                                    <div className="number">
                                        <span data-counter="counterup">{this.props.engineer}</span>
                                    </div>
                                    <div className="desc">
                                        Engineers
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <Link to="/team">
                            <div className="dashboard-stat dashboard-stat-v2 red">
                                <div className="visual">
                                    <img src="../assets/img-icon/group.png" width="70px" height="70px" alt=""/>
                                </div>
                                <div className="details">
                                    <div className="number">
                                        <span data-counter="counterup">{this.props.team}</span>
                                    </div>
                                    <div className="desc">
                                        Teams
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <Link to="/project">
                            <div className="dashboard-stat dashboard-stat-v2 green">
                                <div className="visual">
                                    <img
                                        src="../assets/img-icon/project-management.png"
                                        width="70px"
                                        height="70px"
                                        alt=""/>
                                </div>
                                <div className="details">
                                    <div className="number">
                                        <span data-counter="counterup">{this.props.project}</span>
                                    </div>
                                    <div className="desc">
                                        Projects
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <Link to="/">
                            <div className="dashboard-stat dashboard-stat-v2 purple">
                                <div className="visual">
                                    <img src="../assets/img-icon/network.png" width="70px" height="70px" alt=""/>
                                </div>
                                <div className="details">
                                    <div className="number">
                                        <span data-counter="counterup"/>{this.props.manager}
                                    </div>
                                    <div className="desc">
                                        Managers
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="clearfix"/>
            </div>
        );
    }
}
export default Stats;