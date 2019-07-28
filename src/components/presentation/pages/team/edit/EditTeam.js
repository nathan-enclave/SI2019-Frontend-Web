import React, { Component } from 'react';
import Select from 'react-select';
import EditEngineer from '../../../../container/team/EditTeam';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import getTotal from './../../../../container/team/GetListEngineers';
import getData from '../../../../container/team/GetTeamDetail';
import GetTotal from './API/GetDetailProject'
// import Skills from "./partials/Member";
// import {ClipLoader} from 'react-spinners';
import Member from './partials/Member';
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // memberOptions: [],
      memberSelectOptions: [],
      // member: [],
      // leaderOptions: [],
      // leaderSelected: [],
      // leader: null,
      // isOpenMSGSuccess: false,
      options: [],
      selectOptions: [],
      project:[],
      data:[],
      // engineers : [],
      listEng : [],
      error: "",
      loading: true,
      saveLoading: false
    };
  }
  async componentWillMount() {   
    let res0 = await getTotal();      
    this.setState({ memberOptions: res0 })
    let res1 = await GetTotal();   
    let listProject = res1.results
    console.log(listProject)
    listProject.forEach(e => {
      e.value = e.id;
      e.label = e.name;
      delete e.id;
      delete e.name
  })
  this.setState({ options: listProject })
  const res = await getData(this.props.id);  
  console.log(res)   
  setTimeout(() => {
      this.setState({
        id: String(res.id),
        name: res.name,
        projectName: res.projectName,
        listEng: res
        .engineers
        .map(e => {
            return {
                member: {
                    value: e.value,
                    label: e.label
                },
                role: {
                    value: e.role,
                    label: e.role                    
                }
            }
        }),
    loading: false
      })
  }, 1000);      
  this.setState({ selectOptions: [{value : res.projects.id,label : res.projects.name}] })
  }
  isChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    this.setState({
      [fieldName]: value
    });
    this.setState({
      data : {
        [fieldName] : value
      }
    })
  }

  handleChangeMember = (memberSelectOptions) => {
    this.setState({ memberSelectOptions });
    let temp = []
    if (memberSelectOptions !== null) {
      memberSelectOptions.forEach(element => {
        temp.push({ id: element.value, role: "member" })
      });
      this.setState({
        data:{
          ...this.state.data,
          listEng : temp
      }
      })
    }
  }

  getData = async(items) => {
    await this.setState({
      listEng: items.map(e => e.data),
        data: {
            ...this.state.data,
            listEng: items.map(e => e.data)
        }
    })
}
 
  handleChangeProjects= (selectOptions) => {
    this.setState({ selectOptions });
    if (selectOptions != null) {
      this.setState({
        data: {
          ...this.state.data,
          projectId: selectOptions.value
        }
      })
    }
  }
  submitSaveForm = () => { 
    console.log(this.state.data)
    EditEngineer(this.state.data,this.props.id).then((result) => {
      if (!result.statusCode) {
        this.props.onClose();
        this.props.onOpenMSG();
      } else {
        if (result.statusCode !== 500) {
          this.setState({ msg: "Error." })
        }       
      }
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.form.validateAll();
  }
  render() {
    console.log(this.state.listEng)
    return (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption caption-md">
            <i className="icon-globe theme-font hide" />
            <span className="caption-subject font-blue-madison bold uppercase">EDIT {this.state.name}'S TEAM </span>
          </div>
        </div>
        <div className="portlet-body">
          <div className="tab-content">
            <span style={{ color: "red" }}> {this.state.msg}</span>
            <div className="tab-pane active" id="tab_1_1">
            <Form >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">Team Name</label>
                      <Input type="text" name="name" value ={this.state.name} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label"> Project:  </label>
                        <Select value={this.state.selectOptions} options={this.state.options} onChange={this.handleChangeProjects} />
                      </div>
                    </div>  
                    <Member
                        memberSelected ={this.state.listEng}
                        options={this.state.memberOptions}
                        getData={this.getData.bind(this)}                        
                        /> 
                  </div>
                </div>
              </Form>
              <div className="row">
                <div className="margin-top-20" style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn green" onClick={()=>this.submitSaveForm()} > SAVE </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditForm;