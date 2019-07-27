import React, {Component} from 'react';
import RowData from './RowData';
import Pagination from "react-js-pagination";
import Modal from '../../../commons/modal/Modal';
import AddForm from '../../engineers/add/AddForm';
import MSGSuccess from './../../../commons/msg/MSGSuccess';
import {ClipLoader} from 'react-spinners';
import EngineerContainer from "../../../../container/engineer";
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
            isOpen: false,
            loading: true
        }
    }
    toggleMSGSuccess = () => {
        this.setState({
            isOpenMSGSuccess: !this.state.isOpenMSGSuccess
        })
        this.reloadData()
    }
    handlePageChange = async(pageNumber) => {
        await this.setState({
            activePage: pageNumber - 1,
            loading: true
        })
        this.componentWillMount();
    }
    async componentWillMount() {
        let offset = ((this.state.activePage) * (this.state.itemsCountPerPage))
        const dataPagination = await EngineerContainer.getPagination(this.state.itemsCountPerPage, offset)
        await this.setState({totalItemsCount: dataPagination.total})

        let dataRender = dataPagination
            .results
            .map((value, key) => (<RowData
                key={key}
                id={value.id}
                firstName={value.firstName}
                lastName={value.lastName}
                englishName={value.englishName}
                phoneNumber={value.phoneNumber}
                address={value.address}
                email={value.email}
                skype={value.skype}
                expYear={value.expYear}
                status={value.status}
                create={value.createdAt}
                update={value.updatedAt}
                dayOffRemain={value.dayOffRemain}
                reloadData=
                {() =>{this.reload()}}/>))

        setTimeout(() => {
            this.setState({data: dataRender, loading: false})
        }, 250)

    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    reloadData = () => {
        this.setState({isOpen: false})
        this.componentWillMount()
    }
    reload = () => {
        this.componentWillMount()
    }
    render() {
        return (
            <div className="TableArea">
                <div className="portlet-title">
                    <div
                        className="caption"
                        style={{
                        color: 'black',
                        fontSize: '25px',
                        paddingBottom: '13px '
                    }}>Engineer List ({this.state.totalItemsCount})
                    </div>
                    <div className="padding-bottom-lg d-flex space-between">
                        <div>
                            <button
                                onClick={this.toggleModal}
                                className="btn btn-outline btn-circle green btn-sm green ">
                                <i className="fa fa-edit"></i>
                                Add
                            </button>
                        </div>
                        <div className="search-form">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search here"
                                    name="query"/>
                                <span className="input-group-btn">
                                    <a href="/" className="btn md-skip submit green">
                                        <i className="fa fa-search"/>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="portlet-body">
                        {this.state.loading
                            ? (
                                <div className='sweet-loading d-flex justify-center middle-loading-custom'>
                                    <ClipLoader
                                        sizeUnit={"px"}
                                        size={150}
                                        color={'#7ed6df'}
                                        loading={this.state.loading}/>
                                </div>
                            )
                            : (
                                <div className="table-main-pagination">
                                    <div className="table-scrollable">
                                        <table className="table table-striped table-bordered table-advance table-hover">
                                            <thead>
                                                <tr>
                                                    <th
                                                        style={{
                                                        fontWeight: 'bold'
                                                    }}>English name
                                                    </th>
                                                    <th
                                                        style={{
                                                        fontWeight: 'bold'
                                                    }}>Full name
                                                    </th>
                                                    <th
                                                        style={{
                                                        fontWeight: 'bold'
                                                    }}>Email
                                                    </th>
                                                    <th
                                                        style={{
                                                        fontWeight: 'bold'
                                                    }}>Phone number
                                                    </th>
                                                    <th
                                                        style={{
                                                        fontWeight: 'bold'
                                                    }}>Years of experience</th>
                                                    <th
                                                        style={{
                                                        fontWeight: 'bold'
                                                    }}>Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div
                                        className="PaginationArea"
                                        style={{
                                        textAlign: "center"
                                    }}>
                                        <Pagination
                                            activePage={this.state.activePage + 1}
                                            itemsCountPerPage={this.state.itemsCountPerPage}
                                            totalItemsCount={this.state.totalItemsCount}
                                            pageRangeDisplayed={this.state.pageRangeDisplayed}
                                            onChange={this.handlePageChange}
                                            itemClass='page-item'/>
                                    </div>
                                </div>
                            )
}
                    </div>
                    <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                        <AddForm
                            reloadData={this.props.reload}
                            onClose={this.toggleModal}
                            onReload={this.reloadData}
                            openMSGSuccess={this.toggleMSGSuccess}/>
                    </Modal>
                    <Modal
                        show={this.state.isOpenMSGSuccess}
                        onClose={this.toggleMSGSuccess}
                        deleteStyleModel={true}>
                        <MSGSuccess message={"Add successfully new engineer."}/>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default TableData;