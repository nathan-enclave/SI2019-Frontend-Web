import React, { Component } from 'react';
import EditProject from '../../../../container/project/EditProject';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import getData from '../../../../container/project/GetDetailProject';
import DatePicker from "react-datepicker";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // options: [],
      // selectOptions: [],
      status: 1,
      // skills: [],
      // dateOut : null,
      end : null,
      start : null,
      error: 0,
      // selectedStatus : null,
      data : {}
    };
  }
  async componentDidMount() {   
    // let res0 = await getTotal();    
    // this.setState({ options: res0 })
    const res = await getData(this.props.id);
    this.setState({
      id: String(res.id),
      name: res.name,
      technology: res.technology,
      description: res.description,
      // phoneNumber: String(res.phoneNumber),
      start: new Date(new Date(res.start).toDateString()),
      end: new Date(new Date(res.end).toDateString()),
      // avatar: res.avatar,
      // salary : String(res.salary),
      // address: res.address,
      // email: res.email,
      // skype: res.skype,
      // expYear: String(res.expYear),
      // dayOffRemain: res.dayOffRemain,
      // status: String(res.status),
  
      // skills: res.skills.id
    });
  //   res.skills.forEach(e => {
  //     e.value = e.id;
  //     e.label = e.name;
  //     delete e.id;
  //     delete e.name
  // })   
  // this.setState({selectOptions :res.skills })
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
  handleChangeStart = (date) => {
    this.setState({
      start: date,
      data :{
        start : date
      }
    });
  }
  handleChangeEnd = (date) => {
    this.setState({
      end: date,
      data : {
        end : date
      }
    });
  }
  handleChangeDateOut = (date) => {
    this.setState({
      dateOut: date,
      data : {
        dateOut : date
      }
    });
  }
  // handleChangeSkill = (selectOptions) => {
  //   this.setState({ selectOptions });
  //   let temp = []
  //   if (selectOptions != null) {
  //     selectOptions.forEach(element => {
  //       temp.push(element.value)
  //     });
  //     this.setState({
  //       data :{
  //         skills : temp
  //       }
  //     })     
  //   }
  // }  
  submitSaveForm = (event) => {
    event.preventDefault() // stop loading    
    console.log(this.state.data)    
    EditProject(this.state.data,this.props.id).then((result) => {
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
  displayStatus = ()=>{
    if(this.state.status === 0) this.setState({selectedStatus : "selected"})
  }
  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption caption-md">
            <i className="icon-globe theme-font hide" />
            <span className="caption-subject font-blue-madison bold uppercase">EDIT {this.props.name}'S PROFILE </span>
          </div>
        </div>
        <div className="portlet-body">
          <div className="tab-content">
            <span style={{ color: "red" }}> {this.state.msg}</span>
            <div className="tab-pane active" id="tab_1_1">
            <Form >
                  {/* <div className="form-group" style={{ textAlign: 'center' }}>
                    <img height="130px" src={this.state.avatar} alt=""/><br /><br />
                  </div> */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">Project Name</label>
                      <Input type="text" name="name" value ={this.state.name} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Technology</label>
                      <Input type="text" name="technology" value ={this.state.technology} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label"> Description</label>
                      <Input type="text" name="lastName" value ={this.state.description} onChange={(event) => this.isChange(event)}  className="form-control" /> </div>
                  </div>
                  <div className="col-md-6" style={{ height: "400px" }}>
                    <div className="form-group">
                      <label className="control-label">Start in</label><br/>
                      <DatePicker selected={this.state.start} onChange={this.handleChangeStart}  className="form-control" /> 
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="control-label">End in</label><br/>
                        <DatePicker selected={this.state.end} onChange={this.handleChangeEnd} className="form-control" /> 
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="control-label">Date out</label><br/>
                        <DatePicker selected={this.state.dateOut} onChange={this.handleChangeDateOut}  className="form-control" /> 
                      </div>
                    </div>
                    {/* <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label"> Skills:  </label>
                          <Select value={this.state.selectOptions} options={this.state.options} isMulti onChange={this.handleChangeSkill} />
                      </div>
                    </div> */}
                  </div>
                </div>
              </Form>
              <div className="row">
                <div className="margin-top-20" style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn green" onClick={(event) =>this.submitSaveForm(event)} > SAVE </button>
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