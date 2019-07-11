import React, { Component } from 'react';
import RowData from './RowData';
import getData from '../../../services/GetViewEng';
import Pagination from "react-js-pagination";
import getDataPag from '../../../services/GetEngineerPagination';
import Modal from '../../Modal';
import AddForm from '../add/AddForm';

class TableData extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: "",
      itemsCountPerPage: 10,
      totalItemsCount: 10,
      pageRangeDisplayed: 5,
      activePage : 0,
      isOpen: false
    }
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
    console.log("active page: " + this.state.activePage)
    let offset = ((this.state.activePage)*(this.state.itemsCountPerPage))
    const res = await getDataPag(this.state.itemsCountPerPage,offset);
    let dataRender = res.results.map((value,key) =>(
      <RowData  
      key = {key}
      id = {value.id}
      firstName={value.firstName} 
      lastName= {value.lastName}
      englishName={value.englishName}
      phoneNumber={value.phoneNumber}
      address={value.address}
      email={value.email}
      skype={value.skype}
      expYear = {value.expYear}
      status = {value.status}
      create = {value.createdAt}
      update = {value.updatedAt}
      dayOffRemain={value.dayOffRemain}
      />
    )
  )
  this.setState({
    data : dataRender
  })
} 
toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
    render() {
      
        return (
        <div className="TableArea"> 
          <div className="portlet-title">
            <div className="caption" style={{color: 'black', fontSize: '25px', paddingBottom:'13px '}}>Engineer Table </div>
          </div>
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
          <br />
          <div className="portlet-body">
            <div className="table-scrollable">
              <table className="table table-striped table-bordered table-advance table-hover">
                <thead>
                  <tr>                 
                    <th style={{fontWeight: 'bold'}}>Id </th>
                    <th style={{fontWeight: 'bold'}}>Name </th>
                    <th style={{fontWeight: 'bold'}}>Fullname </th>
                    <th style={{fontWeight: 'bold'}}>Email </th>
                    <th style={{fontWeight: 'bold'}}>Phone </th>
                    <th style={{fontWeight: 'bold'}}>Experiences </th>
                    <th style={{fontWeight: 'bold'}}>Actions </th>
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
          </div>

         
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            <AddForm />
          </Modal>


        </div>
        );
    }
}

export default TableData;