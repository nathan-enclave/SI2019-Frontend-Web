    
import React, { Component } from 'react';
import TableData from './TableData';

class TeamIndex extends Component {
  render() {
    return (
      <div className="EngineerIndex" >
      <div className="row">
      <div className="col-md-12">
          <div className="portlet box">
            <TableData/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default TeamIndex;