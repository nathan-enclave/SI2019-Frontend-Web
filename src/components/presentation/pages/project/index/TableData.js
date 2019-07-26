import React, { Component } from 'react';
import RowData from './RowData';
import Pagination from "react-js-pagination";
import getDataPag from '../../../../container/project/GetProjectPagination';
import Modal from '../../../commons/modal/Modal';
import AddForm from '.../../../src/components/presentation/pages/project/addProject/AddForm';
import Preloader from '../../../include/Preloader'
import Message from '../../../commons/msg/Message';
class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: [],
      itemsCountPerPage: 10,
      totalItemsCount: 0,
      pageRangeDisplayed: 5,
      activePage: 1
    }
  }
  toggleMessage = () => {
    this.setState({ isOpenMessage: !this.state.isOpenMessage })
    this.reloadData()
  }
  toggleModal = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  reloadData = () => {
    this.setState({ isOpen: false })
    this.componentWillMount()
  }
  reload = () => {
    this.componentWillMount()
  }
  handlePageChange = async (pageNumber) => {
    await this.setState({ activePage: pageNumber  })
    this.componentWillMount();
  }
  async componentWillMount() {
    let offset = ((this.state.activePage-1) * (this.state.itemsCountPerPage))
    const res = await getDataPag(this.state.itemsCountPerPage, offset);
    if(this.state.activePage > 0 && res.results.length === 0) {
      this.setState({activePage : this.state.activePage-1})
      this.componentWillMount()
    }
    else{
    await this.setState({ totalItemsCount: res.total })
    let dataRender = res.results.map((value, key) => {   
      let color = (value.status === "done")?'label-info':(value.status === "inProgress")?'label-success':'label-danger'     
      return (
        <RowData         
          key={key}
          id={value.id}
          name={value.name}
          technology={value.technology}
          category={value.category.name}
          color={color}
          earning={value.earning}
          status={value.status}
          reloadData={() => { this.reload() }}
        />
      )
    }
    )
    this.setState({
      data: dataRender
    })
  }
  }
  render() {    
    const loader = this.state.data.length > 0 ?
      <div className="portlet-title">
        <div className="caption" style={{ fontSize: '25px', paddingBottom: '13px ', color: "#2ab4c0", fontWeight: 600 }}>PROJECT LIST <span style={{ fontSize: '20px', float: "right" }} className="label label-sm label-warning" > Total: {this.state.totalItemsCount}  </span></div>
        <br />
        <div style={{ marginBottom: '40px' }}>
          <div style={{ width: '200px', float: 'left' }}>
            <button onClick={this.toggleModal} className="btn btn-outline green btn-sm green ">Add</button>
          </div>        
        </div>
        <div className="portlet-body">
          <div className="table-main-pagination">
            <div className="table-scrollable">
              <table className="table table-striped table-bordered table-advance table-hover">
                <thead>
                  <tr>
                    <th style={{ fontWeight: 'bold', textAlign: "center" }}>Name </th>
                    <th style={{ fontWeight: 'bold', textAlign: "center" }}>Category </th>
                    <th style={{ fontWeight: 'bold', textAlign: "center" }}>Earning (VND)</th>
                    <th style={{ fontWeight: 'bold', textAlign: "center" }}>Status </th>
                    <th style={{ fontWeight: 'bold', textAlign: "center" }}>Action </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data}
                </tbody>
              </table>
            </div>
            <div className="PaginationArea" style={{ textAlign: "center" }}>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemsCountPerPage}
                totalItemsCount={this.state.totalItemsCount}
                pageRangeDisplayed={this.state.pageRangeDisplayed}
                onChange={this.handlePageChange}
                itemClass='page-item'
              />
            </div>
          </div>
        </div>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <AddForm reloadData={this.props.reload} onClose={this.toggleModal} onReload={this.reloadData}
            openMessage={this.toggleMessage} />
        </Modal>
        <Modal show={this.state.isOpenMessage}
          onClose={this.toggleMessage} deleteStyleModel={true} >
          <Message message={"Add successfully new project."} />
        </Modal>
      </div> : (this.totalItemsCount === 0)?(<div>Empty</div>):(
        <Preloader />
      )
    return (
      <div className="TableArea">
        {loader}
      </div>
    );
  }
}

export default TableData;