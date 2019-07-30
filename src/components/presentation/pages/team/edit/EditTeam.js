import React, { Component } from 'react';
import Select from 'react-select';
import EditEngineer from '../../../../container/team/EditTeam';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import getTotal from './../../../../container/team/GetListEngineers';
import getData from '../../../../container/team/GetTeamDetail';
import GetTotal from './API/GetDetailProject'
import { ClipLoader } from 'react-spinners';
import Member from './partials/Member';
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberSelectOptions: [],
      options: [],
      selectOptions: [],
      project: [],
      data: [],
      engineers: [],
      error: "",
      loading: true,
      saveLoading: false
    };
  }
  async componentWillMount() {
    let res0 = await getTotal();  //get total engineer list     
    this.setState({ memberOptions: res0 })
    let res1 = await GetTotal();    //get total project list 
    let listProject = res1.results
    listProject.forEach(e => {   //select project 
      e.value = e.id;
      e.label = e.name;
      delete e.id;
      delete e.name
    })
    this.setState({ options: listProject })
    const res = await getData(this.props.id);  //get detail team by id
    console.log(res)
    setTimeout(() => {
      this.setState({
        id: String(res.id),
        name: res.name,
        projectName: res.projectName,
        engineers: res
          .engineers
          .map(e => {
            return {
              member: {
                value: e.id,
                label: e.firstName
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
    this.setState({ selectOptions: [{ value: res.projects.id, label: res.projects.name }] })
  }
  isChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    this.setState({
      [fieldName]: value
    });
    this.setState({
      data: {
        [fieldName]: value
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
        data: {
          ...this.state.data,
          engineers: temp
        }
      })
    }
  }

  getData = async (items) => {
    await this.setState({
      engineers: items.map(e => e.data),
      data: {
        ...this.state.data,
        engineers: items.map(e => e.data)
      }
    })
  }

  handleChangeProjects = (selectOptions) => {
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

  submitSaveForm = async (event) => {
   // event.preventDefault() // prevent put default
    await this.setState({
      saveLoading: true
    })
    setTimeout(() => {
      EditEngineer(this.state.data, this.props.id).then((result) =>  {
          if (!result.statusCode) {
            this.props.changeMSG("Edit successful.")
            this.setState({ error: "", saveLoading: false })
            this
              .props
              .onClose();
            this
              .props
              .onOpenMSG();
          } else {
            this.setState({
              error: (
                <div class="alert alert-danger">
                  <strong>Error!</strong>
                  Something went wrong, please try again later.
                        </div>
              ),
              saveLoading: false
            })
          }
        })
    }, 500)

  }
  onSubmit = (e) => {
    e.preventDefault();
    this
      .form
      .validateAll();
  }
  // submitSaveForm = () => {
  //   console.log(this.state.data)
  //   EditEngineer(this.state.data, this.props.id).then((result) => {
  //     if (!result.statusCode) {
  //       this.props.onClose();
  //       this.props.onOpenMSG();
  //     } else {
  //       if (result.statusCode !== 500) {
  //         this.setState({ msg: "Error." })
  //       }
  //     }
  //   })
  // }
  // onSubmit = (e) => {
  //   e.preventDefault();
  //   this.form.validateAll();
  // }
  render() {
    console.log(this.state.engineers)
    return (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption caption-md">
            <i className="icon-globe theme-font hide" />
            <span className="caption-subject font-blue-madison bold uppercase">EDIT {this.state.name}'S TEAM </span>
          </div>
        </div>
        <div className="portlet-body">
          {this.state.loading
            ? (
              <div className='sweet-loading d-flex justify-center'>
                <ClipLoader
                  sizeUnit={"px"}
                  size={70}
                  color={'#7ed6df'}
                  loading={this.state.loading} />
              </div>
            )
            : (
              <div className="tab-content">
                <span style={{ color: "red" }}> {this.state.msg}</span>
                <div className="tab-pane active" id="tab_1_1">
                  <Form >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Team Name</label>
                          <Input type="text" name="name" value={this.state.name} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                        <div className="form-group">
                          <div className="form-check">
                            <label className="form-check-label"> Project:  </label>
                            <Select value={this.state.selectOptions} options={this.state.options} onChange={this.handleChangeProjects} />
                          </div>
                        </div>
                        <Member
                          memberSelected={this.state.engineers}
                          options={this.state.memberOptions}
                          getData={this.getData.bind(this)}
                        />
                      </div>
                    </div>
                  </Form>
                  <div className="row">
                    <div className="margin-top-20" style={{ textAlign: 'center' }}>
                      <button type="submit" className="btn green" onClick={() => this.submitSaveForm()} > SAVE </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}
export default EditForm;