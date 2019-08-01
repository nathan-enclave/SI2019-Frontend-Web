import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './viewProject.css'

class TeamMember extends Component {
  render() {
    let typeLabel = (this.props.role === "leader") ? "danger" : "success"
    let level = (this.props.expYear <= 3) ? 1 : (this.props.expYear <= 5) ? 2 : (this.props.expYear <= 7) ? 3 : 4
    return (
      <li className="row">
      <div className="col-sm-12">
        abc
          {/* <div className="card" >
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

              <Link to={`/engineer/${this.props.id}`} className="btn btn-primary">Go somewhere</Link   >
            </div>
          </div>
          <br /> */}

        </div>

      </li>


      //       <div className="mt-actions">
      //         <div className="mt-action">
      //           <div className="mt-action-img">
      //             <img width="50px" alt="" height="50px" src={this.props.avatar} /> </div>
      //           <div className="mt-action-body">
      //             <div className="mt-action-row">
      //               <div className="mt-action-info ">
      //                 <div className="mt-action-details ">
      //                     <Link to={`/engineer/${this.props.id}`} className="mt-action-author">{this.props.firstName} {this.props.lastName}
      //                     </Link>
      //                     <div> <span className={"label label-sm label-default label-mini"} > SW {level}</span> </div>
      //                     <span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span>
      //                 </div>
      //               </div>

      //               <div className="mt-action-buttons ">
      //                 {/* <i className=" icon-social-twitter font-dark hide" />
      //                 <div>
      //                   <span className="portlet-body5">Date Join</span>
      //                 </div>
      //                 <br></br>
      //                 <span>
      //                   <img
      //                     src="/assets/img-icon/calendar.png"
      //                     alt=""
      //                     style={{
      //                       width: 22,
      //                       position: 'relative',
      //                       bottom: '2px'
      //                     }} />
      //                     </span>
      //                   <span>  {this.props.dateJoin}   </span> */}

      // {/*                   
      //                    <li className="li-item-engineer" >
      //                       <i className="fa fa-calendar ss" aria-hidden="true" ></i>
      //                         Date in: {this.props.dateJoin} 
      //                       </li> */}



      //               </div>


      //                 <div className="mt-action-buttons ">
      //                   {/* <i className=" icon-social-twitter font-dark hide" />
      //                   <div>

      //                     <span className="portlet-body5"> Salary</span>
      //                   </div>
      //                   <br></br>

      //                   <span className="position-social">
      //                     <img
      //                       src="/assets/img-icon/wallet.png"
      //                       alt=""
      //                       style={{
      //                         width: 22,
      //                         position: 'relative',
      //                         bottom: '8px'
      //                       }} />
      //                   </span> */}
      //                   <li className="li-item-engineer" >
      //                       <i className="fa fa-money ss" aria-hidden="true"></i>
      //                         Salary: {this.props.salary} VND
      //                       </li>
      //                   {/* <span >  {this.props.salary}    </span> */}
      //                 </div>


      //                 <div className="mt-action-buttons">
      //                   <div className="btn-group">
      //                     <a type="button" href={"mailto:" + this.props.email} className="btn btn-outline red btn-sm">Send Email</a>
      //                   </div>
      //                 </div>


      //               </div>
      //             </div>
      //           </div>
      //         </div>
    );
  }
}

export default TeamMember;