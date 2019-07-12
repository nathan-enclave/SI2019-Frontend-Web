import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ViewForm from './../view/ViewForm';
import Modal from './../../Modal';
import EditForm from './../edit/EditForm';
import DeletePopUp from './../delete/DeletePopUp';
import DelEngineer from '../../../services/DelEngineer';
import MSGDelete from '../delete/MSGDelete';

class RowData extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isOpenView: false,
      isOpenEdit : false, 
      isOpenDelete: false,
      isOpenMSGDelete: false,
      
    };
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
    DelEngineer(this.props.id).then((result) => {
      let rediect = false;
      console.log(result)
      if (!result.statusCode) {
        rediect = true;
        this.toggleModalMSGDelete();
        this.setState({msg: "Delete successful." })
      } else {
          this.setState({msg: "Something wrong." })
      }
      if(rediect){
      this.props.reloadData(true)  
      }
    })
    this.setState({isOpenDelete: !this.state.isOpenDelete}) 
  }
      render() {
        return (
            <tr>
            <td className="highlight">
              {this.props.id}
            </td>
            <td className="highlight">
              {this.props.englishName} 
            </td>
            <td className = "highlight">
              {this.props.firstName} {this.props.lastName} 
            </td>          
            <td className="highlight"> {this.props.email} </td>
            <td>{this.props.phoneNumber}</td>
            <td>{this.props.expYear}</td>
            <td>
              <button onClick={this.toggleModalView} className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> View </button>
                <button onClick={this.toggleModalEdit} className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-trash-o" /> Edit </button>
              <Link to = "/engineer" onClick={this.toggleModalDelete} className="btn btn-outline btn-circle dark btn-sm black">
                <i className="fa fa-trash-o" /> Delete </Link>

                {/* <Link to = "/engineer" onClick={this.toggleModalDelete} className="btn btn-outline btn-circle dark btn-sm black"></Link> */}
                  
            </td>
            <Modal show={this.state.isOpenView}
          onClose={this.toggleModalView}>
                <ViewForm id = {this.props.id}/>
            </Modal>
            <Modal show={this.state.isOpenEdit}
          onClose={this.toggleModalEdit}>
              <EditForm  id = {this.props.id} englishName={this.props.englishName} />
            </Modal>
            <Modal show={this.state.isOpenDelete} onClose={this.toggleModalDelete} deleteStyleModel={true}>
              <DeletePopUp />  
            </Modal>

            <Modal show={this.state.isOpenMSGDelete}
          onClose={this.toggleModalMSGDelete} deleteStyleModel={true} >
                <MSGDelete message = {this.state.msg} />
            </Modal>

            <Modal show={this.state.isOpenDelete} onClose={this.toggleModalDelete} deleteStyleModel={true}  >
              <DeletePopUp  confirm = {(redirect) =>{this.removeItem(redirect)}} onClose = {this.toggleModalDelete} name ={this.props.englishName}/>  
            </Modal>
          </tr>
        );
    }
}

export default RowData;