import React, {Component} from 'react';
import RowData from './RowData';
import Pagination from "react-js-pagination";
import Modal from '../../../commons/modal/Modal';
import AddForm from '../../engineers/add/AddForm';
import {ClipLoader} from 'react-spinners';
import EngineerContainer from "../../../../container/engineer";
import Message from '../../../commons/msg/Message';
import './index.css'
import './style.css'
class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMessage: false,
            data: [],
            itemsCountPerPage: 10,
            totalItemsCount: 0,
            pageRangeDisplayed: 5,
            activePage: 1,
            isOpen: false,
            loading: true
        }
    }
    toggleMessage = () => {
        this.setState({
            isOpenMessage: !this.state.isOpenMessage
        })
        this.reloadData()
    }
    handlePageChange = async(pageNumber) => {
        await this.setState({
            activePage: pageNumber,
            loading: true
        })
        this.componentWillMount();
    }
    async componentWillMount() {       
        let offset = ((this.state.activePage-1) * (this.state.itemsCountPerPage))
        const dataPagination =  await EngineerContainer.getPagination(this.state.itemsCountPerPage, offset)
        this.setState({totalItemsCount: dataPagination.total})
        // let totalPage = dataPagination.total/this.state.itemsCountPerPage
        // console.log(totalPage)
        console.log("length " +dataPagination.results.length + "page " + this.state.activePage)
        if(this.state.activePage > 0 && dataPagination.results.length === 0) {
           await this.setState({activePage : this.state.activePage-1})
            this.componentWillMount()
        }
        else{
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
                {() =>{this.reload()}}/>)
                )
        setTimeout(() => {
            this.setState({data: dataRender, loading: false})
        }, 250)
    }

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
                <div className="caption" >ENGINEER LIST <span style={{ fontSize: '20px', float: "right" }} className="label label-sm label-warning" > Total: {this.state.totalItemsCount}  </span></div>                 
                    <div className="padding-bottom-lg d-flex space-between">
                        <div>
                            <button
                                onClick={this.toggleModal}
                                className="btn btn-outline green btn-sm green ">
                                Add
                            </button>
                        </div>
                    </div>
                    <br/>
                    <div className="portlet-body">
                        {this.state.loading
                            ? (
                                <div className='sweet-loading d-flex justify-center middle-loading-custom'>
                                    <ClipLoader
                                        sizeUnit={"px"}
                                        size={70}
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
                                                    }}>Experience years</th>
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
                                            activePage={this.state.activePage}
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
                            openMessage={this.toggleMessage}/>
                    </Modal>
                    <Modal
                        show={this.state.isOpenMessage}
                        onClose={this.toggleMessage}
                        deleteStyleModel={true}>
                        <Message message={"Add successfully new engineer."}/>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default TableData;