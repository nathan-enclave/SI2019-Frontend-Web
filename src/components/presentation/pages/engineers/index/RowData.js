import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ViewForm from './../../engineers/view/ViewForm';
import Modal from './../../../../presentation/commons/modal/Modal';
import EditForm from './../../engineers/edit/EditForm';
import DeletePopUp from './../../engineers/delete/DeletePopUp';
// import DelEngineer from "./../../../../container/engineer/DelEngineer";
// import MSGDelete from '../../../commons/msg/MSGDelete';
// import MSGSuccess from '../../../commons/msg/MSGSuccess';
// import { thisTypeAnnotation } from '@babel/types';
import EngineerContainer from "../../../../container/engineer";
import Message from '../../../commons/msg/Message';

export default class RowData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpenView: false,
            isOpenEdit : false, 
            isOpenDelete: false,           
            isOpenMessage : false      
        };
    }
    toggleMessage = ()=>{
        this.setState({
            isOpenMessage : !this.state.isOpenMessage
        })
        this.props.reloadData();
    }
    toggleModalView = () => {
        this.setState({
            isOpenView: !this.state.isOpenView
        });
    } 
    toggleModalEdit = () => {
        this.setState({
            isOpenEdit: !this.state.isOpenEdit
        });
    }
    toggleModalDelete = () => {
        this.setState({
            isOpenDelete: !this.state.isOpenDelete
        });
    }    
    removeItem = ()=>{
        EngineerContainer.delete(this.props.id).then((result) => {
            if (!result.statusCode) { 
                this.setState({isOpenDelete: !this.state.isOpenDelete}) 
                this.setState({msg: "Delete successfully." })
                this.setState({isOpenMessage: true});  
            } else {
                this.setState({msg: "Something wrong, please try again later." })
            }
        })
    }
    handleReload =()=> {
        this.toggleMessage()
        this.props.reloadData()
      }
    render() {
        return (
            <tr className="RowData RowDataEngineer">
                <td className="highlight">
                    <Link to={`/engineer/${this.props.id}`}>
                        <span 
                            className=" margin-bottom-5 margin-top-5 link-name-data">
                            {this.props.englishName} 
                        </span>
                    </Link>
                </td>
                <td className="highlight">
                    <span>{this.props.firstName} </span> {this.props.lastName}
                </td>
                <td className="highlight">
                    <a href={"mailto:" + this.props.email}>
                        {this.props.email}</a>
                </td>
                <td>{this.props.phoneNumber}</td>
                <td >{this.props.expYear}</td>
                <td>
                    <div className="flex-center">
                        <button onClick={()=>this.toggleModalEdit()} className="btn btn-outline green btn-sm green margin-bottom-5 margin-top-5" >
                        <i className="fa fa-edit" style={{fontSize:'15px'}} />
                        </button>
                        <button onClick={()=>this.toggleModalDelete()} className="btn btn-outline green btn-sm red margin-bottom-5 margin-top-5" >
                        <i className="fa fa-trash-o" style={{fontSize:'15px'}}/>
                        </button>
                    </div>
                </td>
                <td className="ActionArea">
                    <Modal show={this.state.isOpenView} onClose={this.toggleModalView}>
                        <ViewForm id = {this.props.id}/>
                    </Modal>
                    <Modal show={this.state.isOpenEdit} onClose={this.toggleModalEdit}>
                        <EditForm  id = {this.props.id} englishName={this.props.englishName} onClose={this.toggleModalEdit} onOpenMSG = {this.toggleMessage} changeMSG = {(msg)=>{this.setState({msg : msg})}}/>
                    </Modal>                
                    <Modal  show={this.state.isOpenDelete} 
                            onClose={this.toggleModalDelete} 
                            deleteStyleModel={true}  >
                            <DeletePopUp  
                                    confirm = {()=>this.removeItem()} 
                                    onClose = {this.toggleModalDelete} 
                                    name ={this.props.englishName} 
                                    object="engineer"/>  
                    </Modal>
                    <Modal show={this.state.isOpenMessage} onClose={()=>this.handleReload()} deleteStyleModel={true} >
                    <Message message={this.state.msg} />
            </Modal>
                </td>
            </tr>
        
        );
    }
}