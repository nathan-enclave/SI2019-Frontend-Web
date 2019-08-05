import React, {Component} from 'react'
import DeadlineRow from './DeadlineRow';
import { ClipLoader } from "react-spinners";
import DashBoardContainer from "../../../../../container/dashboard";
export default class Deadline extends Component {
    
    constructor(){
        super()
        this.state={
            deadlineData:null
        }
    }
    componentWillMount(){
        DashBoardContainer.getStatistic('dashboard/statistic/deadline').then(data=>{
            this.setState({deadlineData: data})
        })
    }
    render() {
        return (
            <div className="Deadline">
                <div className="col-sm-12">
                    <div className="portlet light bordered">
                        <div className="portlet-title">
                            <div className="caption">
                                <i className="icon-share font-dark hide"></i>
                                <span className="caption-subject font-dark bold uppercase">Deadline coming</span>
                            </div>
                        </div>
                        <div className="deadline-list">
                            <ul className="feeds DeadlineHeader">
                                <li className="row">
                                    <div
                                        className="col-xs-3 padding-bottom-sm padding-top-sm text-center deadline-project">
                                        <span>
                                            <b>Project</b>
                                        </span>
                                    </div>
                                    <div className="col-xs-3 padding-bottom-sm padding-top-sm text-center">
                                        <span>
                                            <b>Team</b>
                                        </span>
                                    </div>
                                    <div
                                        className="col-xs-3 padding-bottom-sm padding-top-sm text-center padding-left-sm padding-right-sm  deadline-project">
                                        <span>
                                            <b>Deadline</b>
                                        </span>
                                    </div>
                                    <div className="col-xs-3 padding-bottom-sm padding-top-sm text-center">
                                        <span>
                                            <b>Status</b>
                                        </span>
                                    </div>

                                </li>
                            </ul>
                        </div>
                        <div className="portlet-body">
                            <div
                                className="DeadlineScroll"
                                style={{
                                height: 300,
                                overflowY:"scroll",
                                overflowX: "hidden"
                            }}>
                                <ul className="feeds">
                                    {!this.state.deadlineData?( <div className='sweet-loading d-flex justify-center middle-loading-custom'>
                                    <ClipLoader
                                        sizeUnit={"px"}
                                        size={70}
                                        color={'#7ed6df'}
                                        loading={true}/>
                                </div>):this.state.deadlineData.map((e, idx)=><DeadlineRow key={idx} data={e}/>)}
                                {/* this.state.deadlineData.map(e=><DeadlineRow data={e}/>) */}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
