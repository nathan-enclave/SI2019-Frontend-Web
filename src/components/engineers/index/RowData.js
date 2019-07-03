import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RowData extends Component {
  removeItem = ()=>{
    alert('Item deleted ! ');
  }
      render() {
        return (
            <tr>
            <td className="highlight">
              {this.props.firstName}
            </td>
            <td className="hidden-xs"> {this.props.lastName} </td>
            <td>{this.props.englishName}</td>
            <td> {this.props.phoneNumber} </td>
            <td> {this.props.email} </td>
            <td> {this.props.skype} </td>
            <td> {this.props.dayOffRemain} </td>
            <td>
              <Link to = {"/engineers/view/" + this.props.firstName} className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> View </Link>
              <Link to = "/engineer/edit" className="btn btn-outline btn-circle yellow btn-sm yellow">
                <i className="fa fa-trash-o" /> Edit </Link>
              <Link to = "/engineer" onClick={() => {if(window.confirm('Delete the item?')){this.removeItem()};}} className="btn btn-outline btn-circle dark btn-sm black">
                <i className="fa fa-trash-o" /> Delete </Link>
            </td>
          </tr>
        );
    }
}

export default RowData;