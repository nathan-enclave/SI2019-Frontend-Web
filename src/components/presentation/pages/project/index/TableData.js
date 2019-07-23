import React, { Component } from 'react';
import RowData from './RowData';
import Pagination from "react-js-pagination";
import getDataPag from '../../../../container/project/GetProjectPagination';
import Modal from '../../../commons/modal/Modal';
import AddForm from '.../../../src/components/presentation/pages/project/addProject/AddForm';
import MSGSuccess from './../../../commons/msg/MSGSuccess';
import Preloader from '../../../include/Preloader'
import getData from '../../../../container/project/GetViewProject'

class TableData extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpenMSGSuccess : false,
      data: [],
      itemsCountPerPage: 10,
      totalItemsCount: 0,
      pageRangeDisplayed: 5,
      activePage : 0,
      isOpen: false
    }
  }
  toggleMSGSuccess = ()=>{
    this.setState({isOpenMSGSuccess: !this.state.isOpenMSGSuccess})
    this.reloadData()
  }
  handlePageChange =(pageNumber)=> {
    console.log('active page is: ' + pageNumber);
    this.setState({activePage: pageNumber-1})
    this.componentWillMount();
    // this.setState({activePage: pageNumber});
  }
  async componentWillMount(){
    const res0 = await getData();
    this.setState({totalItemsCount : res0.total})
    let offset = ((this.state.activePage)*(this.state.itemsCountPerPage))
    const res = await getDataPag(this.state.itemsCountPerPage,offset);
    // this.setState({totalItemsCount : res.total})
    let dataRender = res.results.map((value,key) => {
      let color = null
        if (value.status==="done") {
        color = 'label-info'
      }else if(value.status==="inProgress") {
        color = 'label-success'
      }else if(value.status==='pending'){
        color = 'label-warning'
      }
      return (
        <RowData  
          key = {key}
          id = {value.id}
          name={value.name} 
          technology= {value.technology}
          color = {color}
          earning={value.earning}
          start= {new Date(new Date(value.start)).toDateString()}
          end= {new Date(new Date(value.end)).toDateString()}
          status = {value.status}
          reloadData = {() =>{this.reload()}}
          />
        )
    }
  )
  this.setState({
    data : dataRender
  })
} 
toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen
  })
}
reloadData = ()=>{
  this.setState({isOpen : false})
  this.componentWillMount()
}
reload = ()=>{
  this.componentWillMount()
}
getProject = (e)=>{
  let id = ["done","all","inProgress","pending"]
  id.forEach(element => {
    if(element === e.target.id)  {
      if(element === "done"){
      document.getElementById(element).className = "label label-sm label-info" 
      }
      else if(element === "inProgress"){
      document.getElementById(element).className = "label label-sm label-success" 
      }
      else if (element === "pending"){
      document.getElementById(element).className = "label label-sm label-warning" 
      }
      else if (element === "all"){
        document.getElementById(element).className = "label label-sm label-danger" 
        }
    }
    else  {
      document.getElementById(element).className = "label label-sm label-default" 
    }
  });
}
  render() {
    const  loader = this.state.data.length > 0 ? 
            <div className="table-main-pagination">
              <div className="table-scrollable">
                <table className="table table-striped table-bordered table-advance table-hover">
                  <thead>
                    <tr>
                      <th style={{fontWeight: 'bold',textAlign:"center"}}>Name </th>
                      <th style={{fontWeight: 'bold',textAlign:"center"}}>Technology </th>
                      <th style={{fontWeight: 'bold',textAlign:"center"}}>Earning </th>
                      <th style={{fontWeight: 'bold',textAlign:"center"}}>Status </th>
                      <th style={{fontWeight: 'bold',textAlign:"center"}}>Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data}
                  </tbody>
                </table>
              </div>
              <div className="PaginationArea"style={{textAlign:"center"}}>
                <Pagination
                activePage={this.state.activePage +1}
                itemsCountPerPage={this.state.itemsCountPerPage}
                totalItemsCount={this.state.totalItemsCount}
                pageRangeDisplayed={this.state.pageRangeDisplayed}
                onChange={this.handlePageChange}
                itemClass = 'page-item'         
                />
              </div>
            </div> : <Preloader/>
    return (
      <div className="TableArea"> 
        <div className="portlet-title">
          <div className="caption" style={{color: 'black', fontSize: '25px', paddingBottom:'13px '}}>Projects List <span style={{fontSize: '20px',float: "right"}} className="label label-sm label-danger" > Total: {this.state.totalItemsCount}  </span></div>    
          <div style={{paddingBottom: '20px'}}> 
            <div style={{ width: '200px', float: 'left' }}>
              <button onClick={this.toggleModal} className="btn btn-outline btn-circle green btn-sm green ">
                <i className="fa fa-edit"></i> Add  </button>
            </div>                     
            <div className="search-form" style={{float:'right',width: '200px',backgroundColor:'#B9ECF0'}} >
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search here" name="query" />
                <span className="input-group-btn">
                  <a href="abc" className="btn md-skip submit">
                    <i className="fa fa-search" />
                  </a>
                </span>
              </div>
            </div>           
          </div>
          <div class="form-group">
            <a onClick={(e) =>this.getProject(e)} style={{fontSize: '10px',margin : "10px"}} className="label label-sm label-danger" id="all"> All  </a>
            <a onClick={(e) =>this.getProject(e)} style={{fontSize: '10px',margin : "10px"}} className="label label-sm label-default" id="pending"> Pending  </a>
            <a onClick={(e) =>this.getProject(e)} style={{fontSize: '10px',margin : "10px"}} className="label label-sm label-default" id="inProgress"> In Progress  </a>
            <a onClick={(e) =>this.getProject(e)} style={{fontSize: '10px',margin : "10px"}} className="label label-sm label-default" id="done" > Done  </a>
            </div>
          <br />
          <div className="portlet-body">
            {loader}
          </div>         
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            <AddForm reloadData = {this.props.reload} onClose = {this.toggleModal} onReload = {this.reloadData}
             openMSGSuccess = {this.toggleMSGSuccess} />
          </Modal>
          <Modal show={this.state.isOpenMSGSuccess}
          onClose={this.toggleMSGSuccess} deleteStyleModel={true} >
                <MSGSuccess message = {"Add successfully new engineer."} />
            </Modal>
        </div>
      </div>
    );
  }
}

export default TableData;