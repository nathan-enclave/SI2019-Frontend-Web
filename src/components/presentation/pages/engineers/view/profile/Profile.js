import React, {Component} from 'react'
import Language from './Language';
import moment from 'moment';
import numeral from 'numeral'
import './Profile.css'
import TeamInfo from './TeamInfo';
// import PreLoader from "../../../../include/Preloader";
import {ClipLoader} from 'react-spinners';

import {getDataByIdApi} from "../../../../../../api/crud";
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    async componentWillMount() {
        const {id} = this.props.match.params
        console.log(id);
        
        let response = await getDataByIdApi('engineers', id)
        setTimeout(() => {
            this.setState({
                ...response
            })
            console.log(this.state);
            
            switch (Number(this.state.status)) {

                case 1:
                    this.setState({status: "Free"});
                    break;
                case 2:
                    this.setState({status: "On vacation"});
                    break;
                default:
                    this.setState({status: "In team"})
            }
    
            if (this.state.teams.length === 0) {
                this.setState({teamData: "This engineer hasn't joined any team",  loading: false})
            } else {
                const rowData = this
                    .state
                    .teams
                    .map((e,key) => <TeamInfo teamName={e.teamName} projectName={e.projectName}/>)
                this.setState({
                    teamData: <table className="table table-striped table-bordered table-advance table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <i className="fa fa-users font-blue-madison"/>
                                        <span  className="margin-left-xs">
                                            Team</span>
                                    </th>
                                    <th className="hidden-xs">
                                        <i className="fa fa-briefcase font-blue-madison"/>
                                        <span  className="margin-left-xs">
                                            Projects</span>
                                    </th>
                                    <th>
                                        <i className="fa fa-bookmark font-red-flamingo"/>
                                        <span  className="margin-left-xs">
                                            Role</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rowData}
                            </tbody>
                        </table>,
                    loading: false
                })
            }
        }, 500)
        // this.setState({     ...response })


    }
    render() {
        
        return (
            <div className="Profile">
                <div className="tabbable-line tabbable-full-width">

                    <div className="tab-content portlet bordered">
                        <div className="tab-pane active container">
                            <div className="row">
                                {this.state.loading
                                    ? (

                                        <div className='sweet-loading d-flex justify-center middle-loading-custom'>
                                            <ClipLoader
                                                sizeUnit={"px"}
                                                size={150}
                                                color={'##7ed6df'}
                                                loading={this.state.loading}/>
                                        </div>
                                    )
                                    : (
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-md-4 col-lg-3">
                                                    <ul className="list-unstyled profile-nav responsive-row-992">
                                                        <li className="margin-top-lg margin-bottom-md margin-left-xl margin-right-xl">
                                                            <div className="avatar-max-width-300">
                                                                <img src={this.state.avatar} className="img-responsive pic-bordered" alt=""/>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Language data={this.state.skills}/>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <div className="row margin-bottom-20">
                                                        <div className="col-md-12 profile-info profile-info-custom-responsive">
                                                            <h3 className="sbold uppercase">{`${this.state.firstName} ${this.state.lastName} (${this.state.englishName})`}</h3>
                                                            <div className="row">
                                                                <p className="col-xs-4">
                                                                    <span className="position-social">
                                                                        <i
                                                                            className="fa fa-skype font-blue"
                                                                            style={{
                                                                            fontSize: 25
                                                                        }}></i>
                                                                    </span>
                                                                    <span className="margin-left-xs">{this.state.skype}.</span>
                                                                </p>
                                                                <p className="col-xs-4">
                                                                    <span >
                                                                        <img
                                                                            src="/assets/img-icon/gmail.jpg"
                                                                            alt=""
                                                                            style={{
                                                                            width: 22,
                                                                            position: 'relative',
                                                                            bottom: '2px'
                                                                        }}/>
                                                                    </span>
                                                                    <span  className="margin-left-xs">
                                                                        {this.state.email}.</span>
                                                                </p>
                                                                <p className="col-xs-4">
                                                                    <span>
                                                                        <img
                                                                            src="/assets/img-icon/calendar.png"
                                                                            alt=""
                                                                            style={{
                                                                            width: 22,
                                                                            position: 'relative',
                                                                            bottom: '2px'
                                                                        }}/>
                                                                        <span className="bold">Since:
                                                                        </span>
                                                                        <span  className="margin-left-xs">
                                                                            {moment(this.state.dateIn).format("MMM Do, YYYY")}.</span>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div className="row">
                                                                <p className="col-xs-4">
                                                                    <span className="position-social">
                                                                        <img
                                                                            src="/assets/img-icon/wallet.png"
                                                                            alt=""
                                                                            style={{
                                                                            width: 22,
                                                                            position: 'relative',
                                                                            bottom: '8px'
                                                                        }}/>
                                                                    </span>
                                                                    <span  className="margin-left-xs">
                                                                        <b>VND</b> {numeral(this.state.salary).format("0,0")}</span>
                                                                </p>
                                                                <p className="col-xs-4">
                                                                    <span className="position-social">
                                                                        <img
                                                                            src="/assets/img-icon/mobile-phone.png"
                                                                            alt=""
                                                                            style={{
                                                                            width: 24,
                                                                            position: 'relative',
                                                                            bottom: '4px'
                                                                        }}/>
                                                                    </span>
                                                                    <span  className="margin-left-xs">
                                                                        {this.state.phoneNumber}.</span>
                                                                </p>
                                                                <p className="col-xs-4">
                                                                    <span
                                                                        className="btn yellow disabled"
                                                                        style={{
                                                                        opacity: 1
                                                                    }}>
                                                                        {this.state.status}
                                                                    </span>

                                                                </p>
                                                            </div>
                                                            <div className="row">
                                                                <p className="col-xs-4">
                                                                    <span className="position-social">
                                                                        <img
                                                                            src="/assets/img-icon/birthday-cake.png"
                                                                            alt=""
                                                                            style={{
                                                                            width: 22,
                                                                            position: 'relative',
                                                                            bottom: '8px'
                                                                        }}/>
                                                                    </span>
                                                                    <span  className="margin-left-xs">
                                                                        {moment(this.state.birthday).format("MMM Do, YYYY")}</span>
                                                                </p>
                                                                <p className="col-xs-4">
                                                                    <span className="position-social">
                                                                        <img
                                                                            src="/assets/img-icon/location.png"
                                                                            alt=""
                                                                            style={{
                                                                            width: 22,
                                                                            position: 'relative',
                                                                            bottom: '4px'
                                                                        }}/>
                                                                    </span >
                                                                    <span  className="margin-left-xs">{this.state.address}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/*end col-md-12*/}
                                                    </div>
                                                    {/*end row*/}
                                                    <div className="tabbable-line tabbable-custom-profile">
                                                        <ul className="nav nav-tabs">
                                                            <li className="active">
                                                                <span>
                                                                    Project
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content">
                                                            <div className="tab-pane active">
                                                                <div className="portlet-body">
                                                                    {this.state.teamData}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    )
}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )

    }
}
