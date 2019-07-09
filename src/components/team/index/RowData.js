import React, { Component } from 'react';
import { Link } from "react-router-dom";
class RowData extends Component {
  
  removeItem = ()=>{
    alert('Team deleted ! ');
  }
    render() {
        return (
            <tr>
            <td className="highlight">
              Team 1
            </td>
            <td className="hidden-xs"> Travel Blog </td>
            <td>5</td>
            <td> 30/11/1998 </td>
            <td> 30/12/1998 </td>                                                  
            <td>
              <Link  to="/teams/view" className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> Detail </Link>
                <Link  to="/teams/edit" className="btn btn-outline btn-circle yellow btn-sm yellow">
                <i className="fa fa-trash-o" /> Edit </Link>
                <Link  to="/team" onClick={() => {if(window.confirm('Delete the item?')){this.removeItem()};}} className="btn btn-outline btn-circle dark btn-sm black">
                <i className="fa fa-trash-o"  /> Delete </Link>
            </td>
          </tr>
        );
    }
}

export default RowData;