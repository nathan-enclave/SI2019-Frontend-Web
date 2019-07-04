import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ViewForm from './../view/ViewForm';
import Modal from './../../Modal';
import EditForm from './../edit/EditForm';

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
    alert('Item deleted ! ');
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
              <Link to = "/engineer" onClick={() => {if(window.confirm('Delete the item?')){this.removeItem()};}} className="btn btn-outline btn-circle dark btn-sm black">
                <i className="fa fa-trash-o" /> Delete </Link>
            </td>
            <Modal show={this.state.isOpenView}
               onClose={this.toggleModalView} endForm = "Done">
               <ViewForm />
            </Modal>

            <Modal show={this.state.isOpenEdit}
          onClose={this.toggleModalEdit} endForm="Edit">
              <EditForm />
            </Modal>
          </tr>
        );
    }
}

export default RowData;