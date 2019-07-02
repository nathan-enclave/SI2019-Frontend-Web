import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RowMember extends Component {
    RemoveMember = ()=>{
        alert("Removed !");
    }
    render() {
        return (
            <tr>
            <td className="highlight">
              Hannah
            </td>        
            <td>
              <button onClick = {(event) =>this.RemoveMember(event)} className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> DELETE </button>
                                     </td>
          </tr>
        );
    }
}

export default RowMember;