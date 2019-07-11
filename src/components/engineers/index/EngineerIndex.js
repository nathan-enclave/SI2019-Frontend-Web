import React, { Component } from 'react';
import TableData from './TableData';

class EngineerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
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

export default EngineerIndex;