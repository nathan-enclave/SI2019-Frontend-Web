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
            prevActive : null,
            order : "-id",
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
        await this.setState({activePage: pageNumber, loading: true})
        this.componentWillMount();
    }
    async componentWillMount() {
        let offset = ((this.state.activePage - 1) * (this.state.itemsCountPerPage))
        const dataPagination = await EngineerContainer.getPagination(this.state.itemsCountPerPage, offset,this.state.order)
        this.setState({totalItemsCount: dataPagination.total})
        if (this.state.activePage > 0 && dataPagination.results.length === 0) {
            await this.setState({
                activePage: this.state.activePage - 1
            })
            this.componentWillMount()
        } else {
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

    }
    async changOrder(order){
        await this.setState({order:order})
        if(this.state.prevActive!==null) document.getElementById(this.state.prevActive).classList.remove("active-arrow")
        document.getElementById(order).classList.add("active-arrow")
        this.componentWillMount()
        this.setState({prevActive:order})
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
                        <div className="portlet-title">
                            <div className="caption">ENGINEER LIST
                                <span
                                    style={{
                                    fontSize: '20px',
                                    float: "right"
                                }}
                                    className="label label-sm label-warning">
                                    Total: {this.state.totalItemsCount}
                                </span>
                            </div>
                            <br/>
                            <div
                                style={{
                                marginBottom: '40px'
                            }}>
                                <div
                                    style={{
                                    width: '200px',
                                    float: 'left'
                                }}>
                                    <button
                                        onClick={this.toggleModal}
                                        className="btn btn-outline green btn-sm green ">Add</button>
                                </div>
                            </div>
                            <div className="portlet-body">
                                <div className="table-main-pagination">
                                    <div className="table-scrollable">
                                        <table className="table table-striped table-bordered table-advance table-hover">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <b>English Name</b>
                                                        <button className="button-left button-order" onClick={()=>this.changOrder("englishName")} >
                                                            <i id="englishName" className="fa fa-long-arrow-up " aria-hidden="true"></i>
                                                            </button>
                                                            <button  className="button-order" onClick={()=>this.changOrder("-englishName")}>
                                                            <i id="-englishName" className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                                            </button>
                                                    </th>
                                                    <th>
                                                        <b>Full Name</b>
                                                        <button className="button-left button-order" onClick={()=>this.changOrder("firstName,lastName")}>
                                                        <i id="firstName,lastName" className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                                        </button>
                                                        <button  className="button-order" onClick={()=>this.changOrder("-firstName,-lastName")}>
                                                        <i id="-firstName,-lastName" className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <b>Email</b>
                                                        <button  className="button-left button-order" onClick={()=>this.changOrder("email")}>
                                                        <i id="email" className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                                        </button>
                                                        <button  className="button-order" onClick={()=>this.changOrder("-email")}>
                                                        <i  id="-email"className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                                        </button>
                                                    </th>
                                                    <th>
                                                    <b>Phone Number</b>
                                                        <button className="button-left button-order" onClick={()=>this.changOrder("phoneNumber")}>
                                                        <i id="phoneNumber"className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                                        </button>
                                                        <button  className="button-order" onClick={()=>this.changOrder("-phoneNumber")}>
                                                        <i id="-phoneNumber" className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <b>Years of Experience</b>
                                                        <button className="button-left button-order" onClick={()=>this.changOrder("expYear")}>
                                                        <i id="expYear" className="fa fa-long-arrow-up" aria-hidden="true"></i>
                                                        </button>
                                                        <button className="button-order" onClick={()=>this.changOrder("-expYear")}>
                                                        <i id="-expYear" className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <b>Action</b>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="PaginationArea text-center">
                                        <Pagination
                                            activePage={this.state.activePage}
                                            itemsCountPerPage={this.state.itemsCountPerPage}
                                            totalItemsCount={this.state.totalItemsCount}
                                            pageRangeDisplayed={this.state.pageRangeDisplayed}
                                            onChange={this.handlePageChange}
                                            itemclassName='page-item'/>
                                    </div>
                                </div>
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
                                <Message message={"Added successfully new engineer."}/>
                            </Modal>
                        </div>
                    )}
            </div>
        );
    }
}

export default TableData;