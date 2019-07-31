// import React, { Component } from 'react';
// import { getDataByIdApi, getAllApi } from "../../../../../../api/crud";
// import { NavLink } from 'react-router-dom';
// import Index from './Index'
// import { ClipLoader } from 'react-spinners';
// import moment from 'moment';

// export default class TestView extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       loading: true,
//       data: {
//         projects: "",
//         name: "",
//         engineers: [],
//         createdAt: null
//       },
//       data1 : {

//       }
//     }
//   }

//   async componentWillMount() {
//     const { id } = this.props.match.params
//     let response = await getDataByIdApi('teams', id)
//     console.log(response)
//     this.setState({
//       ...response,
//       data: response
//     })

//     let res = await getAllApi('engineers')
//     console.log(res)
//     this.setState({
//       ...res,
//       data1: res.results
//     })
//     let salary = []
//     res.results.forEach(element => {
//       salary.push(element.salary)
//     });
//     this.setState({
//       data1: salary
//     })

//     const rowData = this.state.engineers.map(e =>
//       <Index
//         id={e.id}
//         firstName={e.firstName + " " + e.lastName}
//         email={e.email}
//         role={e.role}
//         exp={e.expYear}
//       />
//     )

//     setTimeout(() => {
//       this.setState({
//         teamData: (<table className="table table-striped table-bordered table-advance table-hover">
//           <thead>
//             <tr>
//               <th>
//                 <i className="fa fa-users font-blue-madison" />
//                 <span>
//                   Team Members</span>
//               </th>
//               <th>
//                 <i className="fa fa-question" />
//                 <span>
//                   Experience</span>
//               </th>
//               <th className="hidden-xs">
//                 {/* <i className="fa fa-question"/> */}
//                 <i className="fa fa-briefcase font-blue-madison" />
//                 <span>
//                   Email</span>
//               </th>
//               <th>
//                 <i className="fa fa-bookmark font-red-flamingo" />
//                 <span>
//                   Role</span>
//               </th>

//             </tr>
//           </thead>
//           <tbody>
//             {rowData}
//           </tbody>
//         </table>),
//         loading: false

//       })
//     }, 1000)

//   }
//   render() {
//     console.log(this.state.data1)
//     let color = null
//     if (this.state.status === "done") {
//       color = 'label-info'
//     } else if (this.state.status === "inProgress") {
//       color = 'label-success'
//     } else if (this.state.status === 'pending') {
//       color = 'label-warning'
//     }
//     return (
//       <div className="tabbable-line tabbable-full-width">
//         <div className="tab-content">
//           <div className="tab-pane active" id="tab_1_1">
//             <div className="row">
//             <div className="col-lg-6 col-md-6">
//                 <div className="col-md-8 profile-info">
//                   <h1 className="font-green sbold uppercase">{this.state.name}</h1>

//                   <p>
//                     <NavLink className="nav-link nav-toggle" to="/enclaveit.com" > www.enclaveit.com </NavLink>
//                   </p>
//                   <ul className="list-inline">

//                     <li>
//                       <i className="fa fa-calendar" />  Create At <h4 className="font-red sbold uppercase">{moment(this.state.createdAt).format("DD/MM/YYYY")} </h4> </li>
//                     <li>
//                       <i className="fa fa-briefcase" /> Project Name <h4 className="font-red   sbold uppercase">{this.state.data.projects.name} </h4> </li>
//                   </ul>
//                 </div>
                
//                 <div className="tabbable-line tabbable-custom-profile">
//                   <div className="tab-content">
//                     <div className="tab-pane active">
//                       <div className="portlet-body">
//                         {this.state.loading ?
//                           (<div className='sweet-loading'>
//                             <ClipLoader
//                               sizeUnit={"px"}
//                               size={50}
//                               color={'#123abc'}
//                               loading={this.state.loading}
//                             />
//                           </div>) : this.state.teamData}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-xs-12 col-sm-12">
//                 <div className="portlet light bordered">
//                   <div className="portlet-title tabbable-line">
//                     <div className="caption">
//                       <i className="icon-bubbles font-dark hide" />
//                       <span className="caption-subject font-dark bold uppercase">BASIC INFORMATION</span>
//                     </div>
//                   </div>
//                   <div className="portlet-body3" >
//                     <div className="tab-content">
//                       <div className="portlet-body">
//                         <div className="general-item-list">
//                           <div className="item">
//                             <div className="item-head">
//                               <div className="item-details">
//                                 <span className="item-name" >Project name</span>
//                               </div>
//                             </div>
//                             <div className="mt-comment-text"> {this.state.name}    </div>
//                           </div>
//                           <div className="item">
//                             <div className="item-head">
//                               <div className="item-details">
//                                 <span className="item-name">Status</span>
//                               </div>
//                             </div>
//                             <div className="mt-comment-text">  <span className={"label label-sm " + color} style={{ fontSize: "15px" }}> {this.state.status} </span>   </div>
//                           </div>
//                           <div className="item">
//                             <div className="item-head">
//                               <div className="item-details">
//                                 <span className="item-name">Category</span>
//                               </div>
//                             </div>
//                             <div className="mt-comment-text"> {this.state.category}    </div>
//                           </div>
//                           <div className="item">
//                             <div className="item-head">
//                               <div className="item-details">
//                                 <span className="item-name">Description</span>
//                               </div>
//                             </div>
//                             <div className="mt-comment-text"> {this.state.description}    </div>
//                           </div>
//                           <div className="item">
//                             <div className="item-head">
//                               <div className="item-details">
//                                 <span className="item-name">Technology</span>
//                               </div>
//                             </div>
//                             <div className="mt-comment-text"> {this.state.technology}    </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }