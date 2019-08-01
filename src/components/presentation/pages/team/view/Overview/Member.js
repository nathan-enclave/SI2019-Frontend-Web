import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './viewProject.css'

class Member extends Component {
    render() {
      let typeLabel = (this.props.role === "leader") ? "danger" : "success"
      let level = (this.props.expYear <= 3) ? 1 : (this.props.expYear <= 5) ? 2 : (this.props.expYear <= 7) ? 3 : 4
        return(
          <div className ="row">
            <div className="col-sm-6">
          {/* <div className="card" style={{ width: '18rem' }}> */}
            <img width="50px" alt="" height="50px" src={this.props.avatar} />
            <div className="card-body">
              <h5 className="card-title"> <Link to={`/engineer/${this.props.id}`} className="mt-action-author">{this.props.firstName} {this.props.lastName}
              </Link>
                <div> <span className={"label label-sm label-default label-mini"} > SW {level}</span> </div>
                <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span></h5>
                <li className="li-item-engineer" >
                               <i className="fa fa-money ss" aria-hidden="true"></i>
                                Salary: {this.props.salary} VND
                             </li>
                             <li className="li-item-engineer" >
                               <i className="fa fa-calendar ss" aria-hidden="true" ></i>
                                Date in: {this.props.dateJoin} 
                             </li>
  
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div className="col-sm-6">
          {/* <div className="card" style={{ width: '18rem' }}> */}
            <img width="50px" alt="" height="50px" src={this.props.avatar} />
            <div className="card-body">
              <h5 className="card-title"> <Link to={`/engineer/${this.props.id}`} className="mt-action-author">{this.props.firstName} {this.props.lastName}
              </Link>
                <div> <span className={"label label-sm label-default label-mini"} > SW {level}</span> </div>
                <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span></h5>
                <li className="li-item-engineer" >
                               <i className="fa fa-money ss" aria-hidden="true"></i>
                                Salary: {this.props.salary} VND
                             </li>
                             <li className="li-item-engineer" >
                               <i className="fa fa-calendar ss" aria-hidden="true" ></i>
                                Date in: {this.props.dateJoin} 
                             </li>
  
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div className="col-sm-6">
          {/* <div className="card" style={{ width: '18rem' }}> */}
            <img width="50px" alt="" height="50px" src={this.props.avatar} />
            <div className="card-body">
              <h5 className="card-title"> <Link to={`/engineer/${this.props.id}`} className="mt-action-author">{this.props.firstName} {this.props.lastName}
              </Link>
                <div> <span className={"label label-sm label-default label-mini"} > SW {level}</span> </div>
                <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span></h5>
                <li className="li-item-engineer" >
                               <i className="fa fa-money ss" aria-hidden="true"></i>
                                Salary: {this.props.salary} VND
                             </li>
                             <li className="li-item-engineer" >
                               <i className="fa fa-calendar ss" aria-hidden="true" ></i>
                                Date in: {this.props.dateJoin} 
                             </li>
  
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div className="col-sm-6">
          {/* <div className="card" style={{ width: '18rem' }}> */}
            <img width="50px" alt="" height="50px" src={this.props.avatar} />
            <div className="card-body">
              <h5 className="card-title"> <Link to={`/engineer/${this.props.id}`} className="mt-action-author">{this.props.firstName} {this.props.lastName}
              </Link>
                <div> <span className={"label label-sm label-default label-mini"} > SW {level}</span> </div>
                <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span></h5>
                <li className="li-item-engineer" >
                               <i className="fa fa-money ss" aria-hidden="true"></i>
                                Salary: {this.props.salary} VND
                             </li>
                             <li className="li-item-engineer" >
                               <i className="fa fa-calendar ss" aria-hidden="true" ></i>
                                Date in: {this.props.dateJoin} 
                             </li>
  
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
          </div>
  
                );
              }
            }
            
export default Member;