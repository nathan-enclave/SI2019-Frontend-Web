// import React, { Component } from 'react';
// import Select from 'react-select';
// import EditEngineer from '../../../../container/team/EditTeam';
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import getTotal from './../../../../container/team/GetListEngineers';
// import getData from '../../../../container/team/GetTeamDetail';
// import GetTotal from './API /GetDetailProject'
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
// import Skills from "./partials/Member";
// import {ClipLoader} from 'react-spinners';
// import {handleUpload} from "../../../../../service/upload/fileUploader";
// import ImageUploader from "../../../commons/input/ImageUploader";
// import Members from './Member';

// class EditForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       memberOptions: [],
//       memberSelectOptions: [],
//       member: [],
//       leaderOptions: [],
//       leaderSelected: [],
//       leader: null,
//       isOpenMSGSuccess: false,
//       options: [],
//       selectOptions: [],
//       project:[],
//       data:[],
//       engineers : [],
//       error: "",
//       loading: true,
//       saveLoading: false,
//     };
//   }
//   async componentWillMount() {   
//     let res0 = await getTotal();      
//     this.setState({ memberOptions: res0 })
//     const res = await getData(this.props.id);
//     let res1 = await GetTotal();
//     console.log(res1)
//     let listProject = res1.results
//     console.log(listProject)
//     listProject.forEach(e => {
//       e.value = e.id;
//       e.label = e.name;
//       delete e.id;
//       delete e.name
//   })

//   setTimeout(() => {
//       this.setState({
//         engineers: res
//         .engineers
//         .map(e => {
//             return {
//                 member: {
//                     value: e.id,
//                     label: e.firstName + " " + e.lastName
//                 },
//                 role: {
//                     value: e.role,
//                     label: e.role = "member"
                    
//                 }
//             }
//         }),
//     loading: false
//       })
//   }, 1000);
//     this.setState({ options: listProject })
//     this.setState({
//       id: String(res.id),
//       name: res.name,
//       projectName: res.projectName,
//       engineers: res.engineers.id    
//     });
//     res.engineers.forEach(e => {
//       e.value = e.id;
//       e.label = e.firstName + " "+ e.lastName;
//       delete e.id;
//       delete e.firstName
//   }) 
//   this.setState({memberSelectOptions :res.engineers })
//   this.setState({ selectOptions: [{value : res.projects.id,label : res.projects.name}] })
//   }
//   isChange = (event) => {
//     const fieldName = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [fieldName]: value
//     });
//     this.setState({
//       data : {
//         [fieldName] : value
//       }
//     })
//   }

//   handleChangeMember = (memberSelectOptions) => {
//     this.setState({ memberSelectOptions });
//     let temp = []
//     if (memberSelectOptions !== null) {
//       memberSelectOptions.forEach(element => {
//         temp.push({ id: element.value, role: "member" })
//       });
//       this.setState({
//         data:{
//           ...this.state.data,
//           engineers : temp
//       }
//       })
//     }
//   }

//   getData = async(items) => {

//     await this.setState({
//         engineers: items.map(e => e.data),
//         data: {
//             ...this.state.data,
//             engineers: items.map(e => e.data)
//         }
//     })
// }
 
//   handleChangeProjects= (selectOptions) => {
//     this.setState({ selectOptions });
//     if (selectOptions != null) {
//       this.setState({
//         data: {
//           ...this.state.data,
//           projectId: selectOptions.value
//         }
//       })
//     }
//   }
//   submitSaveForm = () => { 
//     console.log(this.state.data)
//     EditEngineer(this.state.data,this.props.id).then((result) => {
//       if (!result.statusCode) {
//         this.props.onClose();
//         this.props.onOpenMSG();
//       } else {
//         if (result.statusCode !== 500) {
//           this.setState({ msg: "Error." })
//         }       
//       }
//     })
//   }
//   onSubmit = (e) => {
//     e.preventDefault();
//     this.form.validateAll();
//   }
//   render() {
//     return (
//       <div className="portlet light bordered">
//         <div className="portlet-title tabbable-line">
//           <div className="caption caption-md">
//             <i className="icon-globe theme-font hide" />
//             <span className="caption-subject font-blue-madison bold uppercase">EDIT {this.state.name}'S TEAM </span>
//           </div>
//         </div>
//         <div className="portlet-body">
//           <div className="tab-content">
//             <span style={{ color: "red" }}> {this.state.msg}</span>
//             <div className="tab-pane active" id="tab_1_1">
//             <Form >
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label className="control-label">Team Name</label>
//                       <Input type="text" name="name" value ={this.state.name} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
//                       <div className="form-group">
//                       <div className="form-check">
//                         <label className="form-check-label"> Engineers:  </label>
//                           <Select value={this.state.memberSelectOptions} options={this.state.memberOptions} isMulti onChange={this.handleChangeMember} />
//                       </div>
//                     </div>
//                     <div className="form-group">
//                       <div className="form-check">
//                         <label className="form-check-label"> Project:  </label>
//                         <Select value={this.state.selectOptions} options={this.state.options} onChange={this.handleChangeProjects} />
//                       </div>
//                     </div>  
//                     <div className="form-group">
//                       <div className="form-check">
//                         <label className="form-check-label"> Role:  </label>
//                         <select className="form-control" value={this.state.status} onChange={(event) => this.isChange(event)} name="status" >
//                         <option value="leader">LEADER</option>
//                         <option value="member">MEMBER</option>
//                       </select>
//                       </div>
//                     </div> 
//                     <Members
//                         memberSelected={this.state.engineers}
//                         options={this.state.options}
//                         getData={this
//                         .getData
//                         .bind(this)}/> 
//                   </div>
//                 </div>
//               </Form>
//               <div className="row">
//                 <div className="margin-top-20" style={{ textAlign: 'center' }}>
//                   <button type="submit" className="btn green" onClick={()=>this.submitSaveForm()} > SAVE </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default EditForm;