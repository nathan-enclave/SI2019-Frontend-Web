import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import moment from 'moment';
import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";
import getData from '../../../../container/project/GetDetailProject';
import numeral from 'numeral'
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      tags: []
    };
  }
  handleChange = (tags) => {
    this.setState({ tags })
  }
  async componentDidMount() {
    const res = await getData(this.state.id);
      this.setState({
      id: res.id,
      name: res.name,
      technology: res.technology,
      description: res.description,
      start: new Date(new Date(res.start).toDateString()),
      end: new Date(new Date(res.end).toDateString()),
      earning : numeral(res.earning).format('0,0'),
      earningPerMonth : numeral(res.earningPerMonth).format('0,0'),
      status: res.status,
      updatedAt: moment(res.updatedAt).format('DD/MM/YYYY'),
    });
  }

  render() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title tabbable-line">
          <div className="caption caption-md">
            <i className="icon-globe theme-font hide" />
            <span className="caption-subject font-blue-madison bold uppercase">{this.state.name} </span>
          </div>
        </div>
        <div className="portlet-body">
          <div className="tab-content">
            <div className="tab-pane active" id="tab_1_1">
              <form>
                {/* <div className="form-group" style={{ textAlign: 'center' }}>
                  <img height="130px" src={this.state.avatar} alt="" /><br /><br />
                </div> */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">Name</label>
                      <input type="text" name="Engname" value={this.state.name} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">Technology</label>
                      <input type="text" name="firstName" value={this.state.technology} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">Description</label>
                      <input type="text" name="lastName" value={this.state.description} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">Start</label>
                      <input type="text" name="address" value={this.state.address} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">End</label>
                      <input type="text" name="exp" value={this.state.expYear + " exp year"} className="form-control" disabled /> </div>
                      <div className="form-group">
                      <label className="control-label">Salary (VND)</label>
                      <input type="text" name="skype" value={this.state.earning} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">Phone Number</label>
                      <input type="text" name="phone" value={this.state.phoneNumber} className="form-control" disabled /> </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">Status</label>
                      <input type="text" name="status"  value={this.state.status} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">Status</label>
                      <input type="text" name="skype"  value={this.state.skype} className="form-control" disabled /> </div>                   
                    <div className="form-group">
                      <label className="control-label">Start</label><br/>
                      <DatePicker className="form-control"  selected={this.state.start}  disabled />
                      </div>
                    <div className="form-group">
                      <label className="control-label">End</label><br/>
                      <DatePicker className="form-control"  selected={this.state.end}  disabled/>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label"> Skills</label> <br />
                        <TagsInput value={this.state.tags} onChange={(tags) => this.handleChange(tags)} disabled  className="form-control custom-padding-none"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-group">
                        <label className="control-label">Status</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label">Last update at</label>
                      <input type="text" name="updatedAt" value={this.state.updatedAt} className="form-control" disabled /> </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditForm;