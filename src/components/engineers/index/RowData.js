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
              Hannah
            </td>
            <td className="hidden-xs"> hannah@gmail.com </td>
            <td>0123456789</td>
            <td> 1 years </td>
            <td> JAVA,PHP,Android </td>
            <td>
              <Link to = "/engineer/view" className="btn btn-outline btn-circle green btn-sm purple">
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