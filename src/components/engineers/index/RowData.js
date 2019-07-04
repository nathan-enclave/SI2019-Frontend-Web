import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RowData extends Component {
  constructor(props){
    super(props);
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
              <Link to = "/engineers/view" className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> View </Link>
              <Link to = "/engineers/edit" className="btn btn-outline btn-circle yellow btn-sm yellow">
                <i className="fa fa-trash-o" /> Edit </Link>
              <Link to = "/engineer" onClick={() => {if(window.confirm('Delete the item?')){this.removeItem()};}} className="btn btn-outline btn-circle dark btn-sm black">
                <i className="fa fa-trash-o" /> Delete </Link>
            </td>
          </tr>
        );
    }
}

export default RowData;