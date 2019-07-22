
import React, { Component } from 'react';
import EditProject from '../../../../container/project/EditProject';
import Select from 'react-select';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import getData from '../../../../container/project/GetDetailProject';
import getTotal from './../../../../container/categories/GetListCategories';
import DatePicker from "react-datepicker";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectOptions: [],
      category: [],
      end: null,
      start: null,
      done: "",
      inProgress: "",
      pending: ""
    };
  }
  async componentDidMount() {
    let res0 = await getTotal();
    this.setState({ options: res0 })
    const res = await getData(this.props.id);
    this.setState({
      id: String(res.id),
      name: res.name,
      technology: res.technology,
      description: res.description,
      start: new Date(new Date(res.start).toDateString()),
      end: new Date(new Date(res.end).toDateString()),
      earning: String(res.earning),
      earningPerMonth: String(res.earningPerMonth),
      status: res.status,
      categoryId: Number(res.category.name)
    });
    if (this.state.status === "inProgress") this.setState({ inProgress: "selected " })
    if (this.state.status === "done") this.setState({ done: "selected " })
    if (this.state.status === "pending") this.setState({ pending: "selected " })
    this.setState({ selectOptions: [{value : res.category.id,label : res.category.name}] })
  }
  isChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    this.setState({
      [fieldName]: value
    });
    this.setState({
      data: {
        ...this.state.data,
        [fieldName]: value
      }
    })
  }
  handleChangeStart = (date) => {
    this.setState({
      start: date,
      data: {
        start: date
      }
    });
  }
  handleChangeEnd = (date) => {
    this.setState({
      end: date,
      data: {
        end: date
      }
    });
  }
  handleChangeDateOut = (date) => {
    this.setState({
      dateOut: date,
      data: {
        dateOut: date
      }
    });
  }
  handleChangeCategory = (selectOptions) => {
    this.setState({ selectOptions });
    let temp = 0
    if (selectOptions != null) {
      temp = selectOptions.value
      this.setState({
        data: {
          categoryId: temp
        }
      })
    }
  }
  submitSaveForm = (event) => {
    event.preventDefault() // stop loading    
    console.log(this.state.data)
    EditProject(this.state.data, this.props.id).then((result) => {
      if (!result.statusCode) {
        this.props.onClose();
        this.props.onOpenMSG();
      } else {
        if (result.statusCode !== 200) {
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
    return (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption caption-md">
            <i className="icon-globe theme-font hide" />
            <span className="caption-subject font-blue-madison bold uppercase">{this.props.name} </span>
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
                      <label className="control-label">Project Name</label>
                      <Input type="text" name="name" value={this.state.name} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Technology</label>
                      <Input type="text" name="technology" value={this.state.technology} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label"> Description</label>
                      <Input type="text" name="description" value={this.state.description} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label"> Earning</label>
                      <Input type="text" name="earning" value={this.state.earning} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label"> Income Per Month</label>
                      <Input type="text" name="earningPerMonth" value={this.state.earningPerMonth} onChange={(event) => this.isChange(event)} className="form-control" /> </div>
                  </div>
                  <div className="col-md-6" style={{ height: "400px" }}>
                    <div className="form-group">
                      <label className="control-label">Start in</label><br />
                      <DatePicker selected={this.state.start} onChange={this.handleChangeStart} className="form-control" />
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="control-label">End in</label><br />
                        <DatePicker selected={this.state.end} onChange={this.handleChangeEnd} className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="control-label">Date out</label><br />
                        <DatePicker selected={this.state.dateOut} onChange={this.handleChangeDateOut} className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label">Status</label>
                      <select className="form-control" onChange={(event) => this.isChange(event)} name="status" >
                        <option value="done" selected={this.state.done}>DONE</option>
                        <option value="inProgress" selected={this.state.inProgress} >IN PROGRESS</option>
                        <option value="pending" selected={this.state.pending} >PENDING</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label"> Categories:  </label>
                        <Select value={this.state.selectOptions} options={this.state.options} onChange={this.handleChangeCategory} />
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
              <div className="row">
                <div className="margin-top-20" style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn green" onClick={(event) => this.submitSaveForm(event)} > SAVE </button>
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