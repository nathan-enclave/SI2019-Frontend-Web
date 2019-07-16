import React, { Component } from 'react';
import TableData from './TableData';

class TeamIndex extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-24">
                <div className="portlet-body">
                  <TableData />
                </div>
              </div>
          </div>
        );
    }
}
export default TeamIndex;