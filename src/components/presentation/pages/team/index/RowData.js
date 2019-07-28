import React, { Component } from 'react';
import Modal from '../../../commons/modal/Modal';
import TeamDetail from '../view/TeamDetail';
import DeletePopUp from '../../engineers/delete/DeletePopUp';
import DelTeam from '../../../../container/team/DelTeam'
import EditForm from '../../../pages/team/edit/EditTeam'
import {NavLink } from 'react-router-dom'

class RowData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenView: false,
      isOpenEdit: false,
      isOpenDelete: false,
      isOpenMSGDelete: false,
      isOpenMSGSuccess: false,
      rediect: false
    };
  }
  toggleMSGSuccess = () => {
    this.setState({
      isOpenMSGSuccess: !this.state.isOpenMSGSuccess
    })
    this.props.reloadData();
  }
  toggleModalMSGDelete = () => {
    this.setState({
      isOpenMSGDelete: !this.state.isOpenMSGDelete
    })
  }
  toggleModalView = () => {
    this.setState({
      isOpenView: !this.state.isOpenView
    });
  }
  toggleModalEdit = () => {
    this.setState({
      isOpenEdit: !this.state.isOpenEdit
    });
  }
  toggleModalDelete = () => {
    this.setState({
      isOpenDelete: !this.state.isOpenDelete
    });
  }
  removeItem = () => {
    DelTeam(this.props.id).then((res) => {
      console.log(res)
      if (!res.statusCode) {
        this.toggleModalMSGDelete();
        this.setState({ msg: "Delete successful." })
        this.props.reloadData()
      } else {
        this.setState({ msg: "Something wrong." })
      }
    })
    this.setState({ isOpenDelete: !this.state.isOpenDelete })
  }
  render() {
    return (
      <tr>
        <td className="highlight">
          <NavLink to={`/team/${this.props.id}`} className=" margin-bottom-5 margin-top-5">
            {this.props.name}
          </NavLink>
          {/* <NavLink onClick={() => this.toggleModalView()} className=" margin-bottom-5 margin-top-5">
            {this.props.name}
          </NavLink> */}
        </td>
        <td className="hidden-xs">{this.props.totalMember} </td>
        <td className="hidden-xs">{this.props.projectName} </td>
        <td>
          <div className="flex-center">
            <button onClick={() => this.toggleModalEdit()} className="btn btn-outline green btn-sm green margin-bottom-5 margin-top-5" >
              <i className="fa fa-edit" style={{ fontSize: '15px' }} />
            </button>
            <button onClick={() => this.toggleModalDelete()} className="btn btn-outline green btn-sm red margin-bottom-5 margin-top-5" >
              <i className="fa fa-trash-o" style={{ fontSize: '15px' }} />
            </button>
          </div>
        </td>
        <Modal show={this.state.isOpenView} onClose={this.toggleModalView}>
          <TeamDetail name={this.props.name} id={this.props.id} />
        </Modal>
        <Modal show={this.state.isOpenEdit} onClose={this.toggleModalEdit}>
          <EditForm id={this.props.id} name={this.props.name} onClose={this.toggleModalEdit} onOpenMSG={this.toggleMSGSuccess} />
        </Modal>
        <Modal show={this.state.isOpenDelete} onClose={this.toggleModalDelete} deleteStyleModel={true}  >
          <DeletePopUp confirm={(redirect) => { this.removeItem(redirect) }} onClose={this.toggleModalDelete} name={this.props.name} object="team" />
        </Modal>
      </tr>
    );
  }
}

export default RowData;