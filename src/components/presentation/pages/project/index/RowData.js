import React, { Component } from 'react';
import Modal from './../../../commons/modal/Modal';
import EditForm from './../editProject/EditForm';
import DeletePopUp from './../deleteProject/DeletePopUp';
import DelEngineer from '../../../../container/project/DeleteProject';
import MSGDelete from '../../../../presentation/commons/msg/MSGDelete';
import MSGSuccess from '../../../commons/msg/MSGSuccess';
import { Link } from "react-router-dom";

class RowData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenView: false,
      isOpenEdit: false,
      isOpenDelete: false,
      isOpenMSGDelete: false,
      isOpenMSGSuccess: false

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
    DelEngineer(this.props.id).then((result) => {
      let rediect = false;
      console.log(result)
      if (!result.statusCode) {
        rediect = true;
        this.toggleModalMSGDelete();
        this.setState({ msg: "Delete successful." })
      } else {
        this.setState({ msg: "Something wrong." })
      }
      if (rediect) {
        this.props.reloadData()
      }
    })
    this.setState({ isOpenDelete: !this.state.isOpenDelete })
  }
  render() {
    
    return (
      <tr className="RowData">
        <td className="highlight" style={{textAlign:"center"}}>
        <Link to={`/project/${this.props.id}`}>
                        <span 
                            className=" margin-bottom-5 margin-top-5 link-name-data">
                            {this.props.name} 
                        </span>
                    </Link>
          {/* <a onClick={() => this.toggleModalView()} className=" margin-bottom-5 margin-top-5">
            {this.props.name} 
         </a> */}
        </td>
        <td className="highlight" style={{textAlign:"center"}}>
          {this.props.technology}
        </td>
        <td className="highlight" style={{textAlign:"center"}}>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(this.props.earning)} </td>
        <td className="highlight" style={{textAlign:"center"}}>
          <span className={"label label-sm " + this.props.color}> {this.props.status} </span>
        </td>
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
        <Modal show={this.state.isOpenEdit} onClose={this.toggleModalEdit}>
          <EditForm id={this.props.id} name={this.props.name} onClose={this.toggleModalEdit} onOpenMSG={this.toggleMSGSuccess} />
        </Modal>
        <Modal show={this.state.isOpenMSGSuccess} onClose={this.toggleMSGSuccess} deleteStyleModel={true}>
          <MSGSuccess id={this.props.id} name={this.props.name} message="Update the project successful."/>
        </Modal>
        <Modal show={this.state.isOpenMSGDelete} onClose={this.toggleModalMSGDelete} deleteStyleModel={true} >
          <MSGDelete message={this.state.msg} />
        </Modal>
        <Modal show={this.state.isOpenDelete} onClose={this.toggleModalDelete} deleteStyleModel={true}  >
          <DeletePopUp confirm={(redirect) => { this.removeItem(redirect) }} onClose={this.toggleModalDelete} name={this.props.name} />
        </Modal>
      </tr>
    );
  }
}

export default RowData;