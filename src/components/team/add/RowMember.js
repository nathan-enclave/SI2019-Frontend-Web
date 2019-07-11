import React, { Component } from 'react';

class RowMember extends Component {
    addMember = ()=>{
        alert("Add done!");
    }
    render() {
        return (
            <tr>
            <td className="highlight">
              Hannah
            </td>        
            <td>
              <button onClick = {(event) =>this.addMember(event)} className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> Add </button>
                                     </td>
          </tr>
        );
    }
}

export default RowMember;