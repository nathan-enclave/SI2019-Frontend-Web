import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import 'react-tagsinput/react-tagsinput.css';
import moment from 'moment';
import 'moment-timezone';
import "react-datepicker/dist/react-datepicker.css";
import getData from '../../../../container/project/GetDetailProject';
import numeral from 'numeral'
import ProjectStatus from './ProjectStatus';
class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      // tags: []
      category:"",
      team: ""
    };
  }
  // handleChange = (tags) => {
  //   this.setState({ tags })
  // }
  async componentDidMount() {
    const res = await getData(this.state.id);

    console.log(res.category)
      this.setState({
      id: res.id,
      name: res.name,
      technology: res.technology,
      description: res.description,
      start:moment(res.start).format('DD/MM/YYYY'),
      end: moment(res.end).format('DD/MM/YYYY'),
      earning : numeral(res.earning).format('0,0'),
      earningPerMonth : numeral(res.earningPerMonth).format('0,0'),
      status: res.status,
      updatedAt: moment(res.updatedAt).format('DD/MM/YYYY'),
      team: res.team ? res.team.name: "Do not have team",
      category : res.category.name
    });
  }

  render() {
    return (
      <div className="portlet light bordered">         
        <div className="portlet yellow-crusta box">
          <div className="portlet-title">
            <div className="caption">
              <i className="fa fa-cogs" />{this.state.name}  </div>
            <div className="actions">
              <a href="javascript:;" className="btn btn-default btn-sm">
                <i className="fa fa-pencil" /> Edit </a>
            </div>
          </div>
          <div className="portlet-body">
            <div className="row static-info">
              <div className="col-md-5 name"> Description: </div>
              <div className="col-md-7 value"> {this.state.description}                
              </div>
            </div>
            <div className="row static-info">
              <div className="col-md-5 name">Team </div>
              <div className="col-md-7 value"> {this.state.team} </div>
            </div>
            <div className="row static-info">
              <div className="col-md-5 name"> Category: </div>
              <div className="col-md-7 value"> {this.state.category}</div>
            </div>
            <div className="row static-info">
              <div className="col-md-5 name">Status: </div>
              <div className="col-md-7 value">
              <ProjectStatus status={this.state.status} /> 
              </div>
            </div>
            <div className="row static-info">
              <div className="col-md-5 name">Start: </div>
              <div className="col-md-7 value"> {this.state.start} </div>
            </div>
            <div className="row static-info">
              <div className="col-md-5 name"> End: </div>
              <div className="col-md-7 value">  {this.state.end} </div>
            </div>
            <div className="row static-info">
              <div className="col-md-5 name"> Last update at: </div>
              <div className="col-md-7 value"> {this.state.updatedAt} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditForm;