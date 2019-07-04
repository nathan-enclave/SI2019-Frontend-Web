import React, { Component } from 'react';
import TableData from './TableData';
import Modal from '../../Modal';
import AddForm from '../add/AddForm';

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
          <div>
            <div className="row">
            <div className="col-md-24">
              <div className="portlet box green">
                <div className="portlet-title">
                  <div className="caption">
                    <i />Engineer Table </div>
                </div>
                <div className="portlet-body"> 
                <div style={{paddingBottom: '20px'}}>
                <div style={{width: '200px',float:'left'}}>
                <button onClick={this.toggleModal}  className="btn btn-outline btn-circle green btn-sm green ">
                  <i className="fa fa-edit"></i> Add  </button>
                </div>                
                <div className="search-form" style={{float:'right',width: '200px',backgroundColor:'#B9ECF0'}} >
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search here" name="query" />
                        <span className="input-group-btn">
                          <a href="abc" className="btn md-skip submit">
                            <i className="fa fa-search" />
                          </a>
                        </span>
                      </div>
                </div>
                </div> 
                <br />
                 <TableData />
                </div>
              </div>
            </div>
            </div>
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal} endForm = "ADD+">
              <AddForm />
            </Modal>
          </div>
        );
    }
}

export default EngineerIndex;