import React, { Component } from 'react';
import RowEditMember from './RowEditMember';

class EditMember extends Component {
    render() {
        return (
            <div className="table-scrollable" >
            <table className="table table-striped table-bordered table-advance table-hover"  width="400px">              
              <tbody>
                <RowEditMember />
                <RowEditMember />
                <RowEditMember />
              </tbody>
            </table>
          </div>
        );
    }
}

export default EditMember;