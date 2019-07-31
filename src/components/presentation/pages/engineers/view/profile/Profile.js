import React, { Component } from 'react'
import Language from './Language';
import moment from 'moment';
import numeral from 'numeral'
import './Profile.css'
import TeamInfo from './TeamInfo';
import { ClipLoader } from 'react-spinners';
import { getDataByIdApi } from "../../../../../../api/crud";
import Modal from '../../../../commons/modal/Modal';
import EditForm from '../../edit/EditForm';
import Message from '../../../../commons/msg/Message';
export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      isOpenEdit : false,
      isOpenMessage : false
    }
  }
  toggleModalEdit = () => {
    this.setState({
        isOpenEdit: !this.state.isOpenEdit
    });
}
  toggleMessage= () => {
  this.setState({
    isOpenMessage: !this.state.isOpenMessage
  });
}
handleReload =()=> {
  this.toggleMessage()
  this.componentWillMount()
}
  async componentWillMount() {
    const { id } = this.props.match.params
    console.log(id);
    let response = await getDataByIdApi('engineers', id)
    setTimeout(() => {
      this.setState({
        ...response
      })
      console.log(this.state);

      switch (Number(this.state.status)) {

        case 1:
          this.setState({ status: "Free" });
          break;
        case 2:
          this.setState({ status: "On vacation" });
          break;
        default:
          this.setState({ status: "In team" })
      }

      if (this.state.teams.length === 0) {
        this.setState({ teamData: "This engineer hasn't joined any team", loading: false })
      } else {
        const rowData = this
          .state
          .teams
          .map((e, key) => <TeamInfo 
          teamName={e.teamName}
           key={key}
            projectName={e.projectName}
            role = {e.role}
            //  teamId = {e.teamId}
             />)
        this.setState({
          teamData: <table className="table table-striped table-bordered table-advance table-hover">
            <thead>
              <tr>
                <th style={{textAlign : "left"}}>
                  <i className="fa fa-users font-blue-madison" />
                  <span className="margin-left-xs">
                    Team</span>
                </th>
                <th className="hidden-xs" style={{textAlign : "left"}}>
                  <i className="fa fa-briefcase font-blue-madison" />
                  <span className="margin-left-xs">
                    Projects</span>
                </th>
                <th style={{textAlign : "left"}}>
                  <i className="fa fa-bookmark font-red-flamingo" />
                  <span className="margin-left-xs">
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
  }
  render() {
    console.log(this.state.expYear)
    let level = (this.state.expYear<=3)?1:(this.state.expYear<=5)?2:(this.state.expYear<=7)?3:4    
    return (
      <div className="tab-content">
        <div className="tab-pane active" id="tab_1_1">
          {this.state.loading
            ? (
              <div className='sweet-loading d-flex justify-center middle-loading-custom'>
                <ClipLoader
                  sizeUnit={"px"}
                  size={70}
                  color={'#7ed6df'}
                  loading={this.state.loading} />
              </div>
            ) : (
              <div className="bordered-viewEngineer">
                 <div className="portlet box custom color-engineer">                 
              <div className="row">
                <div className="col-md-3 fix-col">
                  <div className="resize">
                  <ul className="list-unstyled profile-nav">
                    <li className="li-edit-button">
                      <img src={this.state.avatar} className="img-responsive pic-bordered" alt="" width="100%" style={{ borderRadius: "5px" }} />
                      <button onClick={()=>this.toggleModalEdit()} className="btn btn-outline green btn-sm green edit-engineer-button"> Edit profile</button>
                    </li>
                    <ul className="col-xs-24 ul-item-engineer">
                      <div className="li-item-engineer">
                      <li className="li-item-engineer" >
                      <i className="fa fa-thumb-tack ss" aria-hidden="true"></i>
                      Status: <span className={"label label-sm label-info label-mini resize-status"}> {this.state.status}</span>
                      </li>
                      <li className="li-item-engineer" >
                      <i className="fa fa-calendar ss" aria-hidden="true" ></i>
                        Date in: {moment(this.state.dateIn).format("DD/MM/YYYY")} 
                      </li>
                      <li className="li-item-engineer" >
                      <i className="fa fa-briefcase ss" aria-hidden="true"></i>
                      Experience years: {(this.state.expYear)} 
                      </li>
                      <li className="li-item-engineer" >
                      <i className="fa fa-money ss" aria-hidden="true"></i>
                        Salary: {numeral(this.state.salary).format("0,0")} VND
                      </li>
                      <li className="li-item-engineer" >
                      <i className="fa fa-birthday-cake ss" aria-hidden="true"></i>
                        Birthday: {moment(this.state.birthday).format("DD/MM/YYYY")} 
                      </li>
                      </div>                    
                    </ul>
                  </ul>
                  </div>
                </div>
                <div className="col-md-9">  
                  <div className="row">
                     <h3 className="sbold">{`${this.state.firstName} ${this.state.lastName} (${this.state.englishName}) `}<span className={"label label-sm label-success label-mini resize-label"}> SW {level}</span></h3>  
                    <div className="row">
                    <div className="col-md-6 profile-info">                   
                      <div className="tabbable-line tabbable-custom-profile">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <span className="caption-subject font-dark bold uppercase inline-block margin-top-15">Contact</span>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab_1_11">
                        <div className="tab-content-chart">
                        <ul className="col-xs-24 ul-item-engineer">
                      <li className="li-item-engineer" >
                        <img src="/assets/img-icon/skype.png" alt="" />{this.state.skype} </li>
                      <li className="li-item-engineer" >
                        <img src="/assets/img-icon/gmail.jpg" alt=""/>{this.state.email}</li> 
                      <li className="li-item-engineer" >
                        <img src="/assets/img-icon/mobile-phone.png" alt="" />
                        {this.state.phoneNumber}</li>
                      <li className="li-item-engineer" >
                        <img src="/assets/img-icon/location.png" alt="" /> {this.state.address} </li>
                    </ul>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-6 profile-info">                  
                      <Language data={this.state.skills} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="tabbable-line tabbable-custom-profile">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <span className="caption-subject font-dark bold uppercase inline-block margin-top-15">Activities</span>
                      </li>
                    </ul>
                    <div className="tab-content resize-table">
                      <div className="tab-pane active" id="tab_1_11">
                        <div className="portlet-body">
                          {this.state.teamData}
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <Modal show={this.state.isOpenEdit} onClose={this.toggleModalEdit}>
                        <EditForm  id = {this.state.id} englishName={this.state.englishName} onClose={this.toggleModalEdit} onOpenMSG = {this.toggleMessage} changeMSG = {(msg)=>{this.setState({msg : msg})}}/>
                    </Modal> 
                    <Modal show={this.state.isOpenMessage} onClose={()=>this.handleReload()} deleteStyleModel={true} >
                    <Message message={this.state.msg} />
                 </Modal>
              </div>
              </div>
              </div>
            )}
        </div>
      </div>
    )

  }
}
