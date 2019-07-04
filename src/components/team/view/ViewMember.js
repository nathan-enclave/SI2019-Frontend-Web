import React, { Component } from 'react';
import RowMember from './RowMember';

class EngineerIndex extends Component {
    
    render() {
        return (
            <div className="table-scrollable">
                
            <table className="table table-striped table-bordered table-advance table-hover"> 
                   
              <tbody>
                <RowMember />
                <RowMember />
                <RowMember />
              </tbody>
            </table>
          </div>
        );
    }
}

export default EngineerIndex;