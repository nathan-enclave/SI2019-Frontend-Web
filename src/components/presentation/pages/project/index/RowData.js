import React, { Component } from 'react';
import Modal from './../../../commons/modal/Modal';
import EditForm from './../editProject/EditForm';
import DeletePopUp from './../deleteProject/DeletePopUp';
import { Link } from "react-router-dom";
import numeral from 'numeral'
import './index.css'
import Message from '../../../commons/msg/Message';
import ProjectContainer from "../../../../container/project";

export default class RowData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenView: false,
      isOpenEdit: false,
      isOpenDelete: false,
      isOpenMessage: false,
      msg: ''
    };
  }
  toggleMessage = () => {
    this.setState({
      isOpenMessage: !this.state.isOpenMessage      
    })       
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
   removeItem () {
     ProjectContainer.delete(this.props.id).then((result) => {
      if (!result.statusCode) {        
        this.setState({ isOpenDelete: false})
        this.setState({ msg: "Delete successful." })
        this.setState({isOpenMessage: true});           
      } else {
        this.setState({ msg: "Something wrong." })
      }      
    })
  }
  handleReload =()=> {
    this.toggleMessage()
    this.props.reloadData()
  }
  render() {    
    return (
      <tr className="RowData">
        <td className="highlight" style={{textAlign:"center"}}>
        <Link to={`/project/${this.props.id}`}>
                        <span 
                            className=" margin-bottom-5 margin-top-5 link-name-data">
                            {this.props.name} 
                        </span>
                    </Link>
        </td>
        <td className="highlight" style={{textAlign:"center"}}>
          {this.props.category}
        </td>
        <td className="highlight" style={{textAlign:"center"}}>
          {numeral(this.props.earning).format('0,0')} </td>
        <td className="highlight" style={{textAlign:"center"}}>
          <span className={"label label-sm " + this.props.color}> {this.props.status} </span>
        </td>
        <td>
          <div className="flex-center">
            <button onClick={() => this.toggleModalEdit()} className="btn btn-outline green btn-sm green margin-bottom-5 margin-top-5" >
              <i className="fa fa-edit" style={{ fontSize: '15px' }} />
            </button>
            <button onClick={() => this.toggleModalDelete()} className="btn btn-outline green btn-sm red margin-bottom-5 margin-top-5" >
              <i className="fa fa-trash-o" style={{ fontSize: '15px' }} />
            </button>
          </div>
        </td>
        <td>
        <Modal show={this.state.isOpenEdit} onClose={this.toggleModalEdit}>
          <EditForm id={this.props.id} name={this.props.name} onClose={this.toggleModalEdit} onOpenMSG={this.toggleMessage} changeMSG = {(msg)=>{this.setState({msg : msg})}}/>
        </Modal>
        <Modal show={this.state.isOpenMessage} onClose={()=>this.handleReload()} deleteStyleModel={true} >
          <Message message={this.state.msg} />
        </Modal>
        <Modal show={this.state.isOpenDelete} onClose={this.toggleModalDelete} deleteStyleModel={true}  >
          <DeletePopUp confirm={(redirect) => { this.removeItem(redirect) }} onClose={this.toggleModalDelete} message ="You will completely delete this project." name={this.props.name} />
        </Modal>
        </td>
      </tr>
    );
  }
}

 