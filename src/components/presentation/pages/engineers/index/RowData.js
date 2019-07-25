import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ViewForm from './../../engineers/view/ViewForm';
import Modal from './../../../../presentation/commons/modal/Modal';
import EditForm from './../../engineers/edit/EditForm';
import DeletePopUp from './../../engineers/delete/DeletePopUp';
import MSGDelete from '../../../commons/msg/MSGDelete';
import MSGSuccess from '../../../commons/msg/MSGSuccess';
// import { thisTypeAnnotation } from '@babel/types';
import EngineerContainer from "../../../../container/engineer";


class RowData extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpenView: false,
      isOpenEdit : false, 
      isOpenDelete: false,
      isOpenMSGDelete: false,
      isOpenMSGSuccess : false      
    };
  }
  toggleMSGSuccess = ()=>{
    this.setState({
      isOpenMSGSuccess : !this.state.isOpenMSGSuccess
    })
    this.props.reloadData();
  }
  toggleModalMSGDelete = ()=>{
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
  removeItem = ()=>{
    let redirect = false

    EngineerContainer.delete(this.props.id).then((result) => {
      if (!result.statusCode) {
        redirect = true;
        this.setState({isOpenDelete: !this.state.isOpenDelete}) 
        this.toggleModalMSGDelete();
        this.setState({msg: "Delete successful." })
        if(redirect){
          this.props.reloadData()  
        }
      } else {
          this.setState({msg: "Something wrong." })
      }
    })
  }
      render() {
        return (
            <tr className="RowData">
                <td className="highlight">
                    <Link to={`/engineer/${this.props.id}`}>
                        <span 
                            className=" margin-bottom-5 margin-top-5 link-name-data">
                            {this.props.englishName} 
                        </span>
                        <span>->>ID:{this.props.id}</span>
                    </Link>
                </td>
                <td className="highlight">
                    <span>{this.props.firstName} </span> {this.props.lastName}
                </td>
                <td className="highlight">
                    <a href={"mailto:" + this.props.email}>
                        {this.props.email}</a>
                </td>
                <td>{this.props.phoneNumber}</td>
                <td >{this.props.expYear}</td>
                <td>
                    <div className="flex-center">
                        {/* <button onClick={()=>this.toggleModalView()} className="btn btn-outline green btn-sm yellow margin-bottom-5 margin-top-5">
                  <i className="fa fa-eye" style={{fontSize:'15px'}}/>
                </button> */}
                <button onClick={()=>this.toggleModalEdit()} className="btn btn-outline green btn-sm green margin-bottom-5 margin-top-5" >
                  <i className="fa fa-edit" style={{fontSize:'15px'}} />
                </button>
                <button onClick={()=>this.toggleModalDelete()} className="btn btn-outline green btn-sm red margin-bottom-5 margin-top-5" >
                  <i className="fa fa-trash-o" style={{fontSize:'15px'}}/>
                </button>
              </div>
            </td>
            <Modal show={this.state.isOpenView} onClose={this.toggleModalView}>
              <ViewForm id = {this.props.id}/>
            </Modal>

            <Modal show={this.state.isOpenEdit} onClose={this.toggleModalEdit}>
              <EditForm  id = {this.props.id} englishName={this.props.englishName} onClose={this.toggleModalEdit} onOpenMSG = {this.toggleMSGSuccess}/>
            </Modal>
            <Modal show={this.state.isOpenMSGSuccess} onClose={this.toggleMSGSuccess} deleteStyleModel={true}>
              <MSGSuccess  id = {this.props.id} englishName={this.props.englishName}  />
            </Modal>        


            <Modal show={this.state.isOpenMSGDelete} onClose={this.toggleModalMSGDelete} deleteStyleModel={true} >
              <MSGDelete message = {this.state.msg} />
            </Modal>
            <Modal show={this.state.isOpenDelete} onClose={this.toggleModalDelete} deleteStyleModel={true}  >
              <DeletePopUp  confirm = {(redirect) =>{this.removeItem(redirect)}}  name ={this.props.englishName} object="engineer"/>  
            </Modal>
            <Modal show={this.state.isOpenMSGDelete} onClose={this.toggleModalMSGDelete} deleteStyleModel={true} >
              <MSGDelete message = {this.state.msg} />
            </Modal>
            {/* Model for deleting */}

          </tr>
        );
    }
}
export default RowData;