import React, { Component } from 'react';
import { getDataByIdApi } from "../../../../../../api/crud";
import { NavLink } from 'react-router-dom';
import Index from './Index'
import { ClipLoader } from 'react-spinners';
import moment from 'moment';
import DataChart from './DataChart'

export default class TestView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
       data: {
        projects: "",
        name: "",
        engineers: [],
        createdAt: null
      }
    }
  }

  async componentWillMount() {
    const { id } = this.props.match.params
    let response = await getDataByIdApi('teams', id)
    console.log(response)
    this.setState({
      ...response,
      data : response
    })
  
    const rowData = this.state.engineers.map(e =>
      <Index
        id = {e.id}
        firstName={e.firstName + " " + e.lastName}
        email={e.email}
        role = {e.role}
        exp = {e.expYear}
      />
    )
    
    setTimeout(()=>{
      this.setState({
        teamData: (<table className="table table-striped table-bordered table-advance table-hover">
          <thead>
            <tr>
              <th>
                <i className="fa fa-users font-blue-madison" />
                <span>
                  Team Members</span>
              </th>
              <th>
                <i className="fa fa-question" />
                <span>
                  Experience</span>
              </th>
              <th className="hidden-xs">
                {/* <i className="fa fa-question"/> */}
                <i className="fa fa-briefcase font-blue-madison" />
                <span>
                  Email</span>
              </th>
              <th>
                <i className="fa fa-bookmark font-red-flamingo" />
                <span>
                  Role</span>
              </th>
             
            </tr>
          </thead>
          <tbody>
            {rowData}
          </tbody>
        </table>),
          loading:  false
  
      })
    }, 1000)
   
  }
  render() {
    // if(Object.keys(this.state).length ===  0) {
    //   return <PreLoader/>}
    //   else{
    return (
      <DataChart />
      <div className="tabbable-line tabbable-full-width">
        <div className="tab-content">
          <div className="tab-pane active" id="tab_1_1">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-8 profile-info">
                    <h1 className="font-green sbold uppercase">{this.state.name}</h1>

                    <p>
                      <NavLink className="nav-link nav-toggle" to="/enclaveit.com" > www.enclaveit.com </NavLink>
                    </p>
                    <ul className="list-inline">

                      <li>
                        <i className="fa fa-calendar" />  Create At <h4 className="font-red sbold uppercase">{moment(this.state.createdAt).format("DD/MM/YYYY")} </h4> </li>
                      <li>
                        <i className="fa fa-briefcase" /> Project Name <h4 className="font-red   sbold uppercase">{this.state.data.projects.name} </h4> </li>
                    </ul>
                  </div>
                  {/*end col-md-8*/}

                </div>
                {/*end row*/}
                <div className="tabbable-line tabbable-custom-profile">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <NavLink to={`/engineer/${this.props.id}`}> Team's Information </NavLink>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane active">
                      <div className="portlet-body">
                        {this.state.loading ? 
                          (<div className='sweet-loading'>
                            <ClipLoader
                              sizeUnit={"px"}
                              size={50}
                              color={'#123abc'}
                              loading={this.state.loading}
                            />
                        </div>) : this.state.teamData}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}