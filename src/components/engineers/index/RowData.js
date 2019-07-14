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
          <tr className="RowData">
            <td className="highlight">
              <a onClick={()=>this.toggleModalView()} className=" margin-bottom-5 margin-top-5">
                {this.props.englishName} 
              </a>
            </td>
            <td className = "highlight">
              {this.props.firstName} {this.props.lastName} 
            </td>          
            <td className="highlight"><a href={"mailto:" + this.props.email}> {this.props.email}</a> </td>
            <td>{this.props.phoneNumber}</td>
            <td >{this.props.expYear}</td>
            <td>
              {/* <button onClick={()=>this.toggleModalView()} className="btn btn-outline green btn-sm yellow margin-bottom-5 margin-top-5">
                <i className="fa fa-eye" style={{fontSize:'15px'}}/>
              </button> */}
              <button onClick={()=>this.toggleModalEdit()} className="btn btn-outline green btn-sm purple margin-bottom-5 margin-top-5" >
                <i className="fa fa-edit" style={{fontSize:'15px'}} />
              </button>
              <button onClick={()=>this.toggleModalDelete()} className="btn btn-outline green btn-sm red margin-bottom-5 margin-top-5" >
                <i className="fa fa-trash-o" style={{fontSize:'15px'}}/>
              </button>
            </td>
            <Modal show={this.state.isOpenView} onClose={this.toggleModalView}>
              <ViewForm id = {this.props.id}/>
            </Modal>
            <Modal show={this.state.isOpenEdit} onClose={this.toggleModalEdit}>
              <EditForm  id = {this.props.id} englishName={this.props.englishName} />
            </Modal>
        
            <Modal show={this.state.isOpenMSGDelete} onClose={this.toggleModalMSGDelete} deleteStyleModel={true} >
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