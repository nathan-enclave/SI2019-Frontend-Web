import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ViewForm from './../view/ViewForm';
import Modal from './../../Modal';
import EditForm from './../edit/EditForm';
import DelEngineer from '../../../services/DelEngineer';

class RowData extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isOpenView: false,
      isOpenEdit : false
    };
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
  
  removeItem = ()=>{
    DelEngineer(this.props.id).then((result) => {
      let rediect = false;
      if (!result.statusCode) {
        rediect = true;
        alert('Delete successful ! ');
      } else {
          this.setState({msg: "Something wrong." })
      }
      if(rediect){
        window.location = "/engineer";
      }
    }) 
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
              {this.props.firstName}  
              {this.props.lastName} 
            </td>          
            <td className="hidden-xs"> {this.props.email} </td>
            <td>{this.props.phoneNumber}</td>
            <td>{this.props.expYear}</td>
            <td>
              <button onClick={this.toggleModalView} className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> View </button>
                <button onClick={this.toggleModalEdit} className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-trash-o" /> Edit </button>
              <Link to = "/engineer" onClick={() => {if(window.confirm('Delete this engineer?')){this.removeItem()};}} className="btn btn-outline btn-circle dark btn-sm black">
                <i className="fa fa-trash-o" /> Delete </Link>
            </td>
            <Modal show={this.state.isOpenView}
          onClose={this.toggleModalView}>
                <ViewForm id = {this.props.id}/>
            </Modal>
            <Modal show={this.state.isOpenEdit}
          onClose={this.toggleModalEdit}>
                <EditForm  id = {this.props.id} englishName={this.props.englishName} />
            </Modal>
          </tr>
        );
    }
}

export default RowData;