import React, { Component } from 'react';
import Select from 'react-select';

class AddTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      options: [],
      selectOptions: [],
    }
  }
  handleChange = (selectOptions) => {
    this.setState({ selectOptions });
    let temp = []
    if (selectOptions != null) {
      selectOptions.forEach(element => {
        temp.push(element.value)
      });
      this.setState({ skills: temp });
    }
  }
  async componentWillMount(){
    const res = await fetch('https://si-enclave.herokuapp.com/api/v1/engineers');
    let data = await res.json()
    let data2 = data.results
    let temp = []
    data2.forEach(element => {
      temp.push({"value":element.id,"label" : element.firstName})
    });
    console.log(temp) 
    this.setState({ options: temp });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="portlet light bordered">
              <div className="portlet-title tabbable-line">
                <div className="caption caption-md">
                  <i className="icon-globe theme-font hide" />
                  <span className="caption-subject font-blue-madison bold uppercase">Add team </span>
                </div>
              </div>
              <div className="portlet-body">
                <div className="tab-content">
                  <div className="tab-pane active" id="tab_1_1">
                    <form role="form" action="#">
                      <div className="form-group">
                        <label className="control-label">Name</label>
                        <input type="text" name="name" className="form-control" /> </div>
                        <div className="form-group">
                    <div className="form-check">
                      <label className="form-check-label"> Member:  </label>
                      <Select value={this.state.selectOptions} options={this.state.options} isMulti onChange={this.handleChange} />
                    </div>
                   </div> 
                      <div className="margiv-top-10">
                        <a href="" className="btn green"> SUBMIT </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}
export default AddTeam;