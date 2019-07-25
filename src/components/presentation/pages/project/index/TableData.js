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
      isOpenMSGSuccess: false,
      data: [],
      itemsCountPerPage: 10,
      totalItemsCount: 0,
      pageRangeDisplayed: 5,
      activePage: 0,
      isOpen: false
    }
  }
  toggleMSGSuccess = () => {
    this.setState({ isOpenMSGSuccess: !this.state.isOpenMSGSuccess })
    this.reloadData()
  }
  handlePageChange = async (pageNumber) => {
    await this.setState({ activePage: pageNumber - 1 })
    this.componentWillMount();
  }
  async componentWillMount() {
    let offset = ((this.state.activePage) * (this.state.itemsCountPerPage))
    const res = await getDataPag(this.state.itemsCountPerPage, offset);
    await this.setState({ totalItemsCount: res.total })
    let dataRender = res.results.map((value, key) => {
      let color = null
      if (value.status === "done") {
        color = 'label-info'
      } else if (value.status === "inProgress") {
        color = 'label-success'
      } else if (value.status === 'pending') {
        color = 'label-danger'
      }
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
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  reloadData = () => {
    this.setState({ isOpen: false })
    this.componentWillMount()
  }
  reload = () => {
    this.componentWillMount()
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
          <div className="search-form" style={{ float: 'right', width: '200px', backgroundColor: '#B9ECF0' }} >
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
        <div className="portlet-body">
          <div className="table-main-pagination">
            <div className="table-scrollable">
              <table className="table table-striped table-bordered table-advance table-hover">
                <thead>
                  <tr>
                    <th style={{ fontWeight: 'bold', textAlign: "center", fontSize: "20px" }}>Name </th>
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
                activePage={this.state.activePage + 1}
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
            openMSGSuccess={this.toggleMSGSuccess} />
        </Modal>
        <Modal show={this.state.isOpenMSGSuccess}
          onClose={this.toggleMSGSuccess} deleteStyleModel={true} >
          <Message message={"Add successfully new project."} />
        </Modal>
      </div> : (
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