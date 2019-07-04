import React, { Component } from 'react';
import { Link } from "react-router-dom";

class RowMember extends Component {
      render() {
        return (
            <tr>
            <td className="highlight">
              Hannah
            </td>     
            <td>
              <Link to = "/engineer/view" className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> View </Link>              
            </td>
          </tr>
        );
    }
}

export default RowMember;