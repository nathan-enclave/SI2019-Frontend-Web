import React, { Component } from 'react';
import TableData from './TableData';
import { Link } from 'react-router-dom';

class EngineerIndex extends Component {    
    render() {
        return (
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
                <Link to="/engineers/add" className="btn btn-outline btn-circle blue btn-sm blue">
                  <i className="fa fa-edit"></i> Add  </Link>
                </div>                
                <div className="search-form" style={{float:'right',width: '400px',backgroundColor:'#B9ECF0'}} >
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
        );
    }
}

export default EngineerIndex;