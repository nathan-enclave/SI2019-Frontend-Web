import React, {Component} from 'react'

import {DialogTitle, Dialog} from '@material-ui/core';

import ActionRow from './ActionRow'
import './AllAction.css'

import firebase from 'firebase'
import {initializeFirebase} from "../../../../../../service/firebase"
import {ClipLoader} from "react-spinners";
import {DialogContent} from '@material-ui/core';
initializeFirebase();
const db = firebase.firestore();

export default class AllAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentWillMount() {
        const actionList = this;

        db
            .collection("activities")
            .orderBy('time', 'desc')
            .onSnapshot((querySnapshot) => {
                const list = []
                querySnapshot.forEach(e => {
                    list.push(e.data())
                })
                setTimeout(() => {
                    actionList.setState({data: list})
                }, 250)

            });
    }
    render() {

        return (
            <div className="AllAction">
                <Dialog
                    fullWidth={true}
                    maxWidth={"md"}
                    scroll={"paper"}
                    onClose={this.props.handleClose}
                    open={this.props.open}>
                    <div className="d-flex space-between">
                        <DialogTitle id="simple-dialog-title">All activities</DialogTitle>
                        <div
                            className="CloseDialogForHistoryActivity d-flex flex-col justify-center"
                            onClick={this.props.onClose}>
                            <span className="glyphicon glyphicon-remove"></span>
                        </div>
                    </div>

                    <DialogContent>
                        {!this.state.data
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
                                <div className="mt-element-list">
                                    <div className="mt-list-container list-simple" style={{border: '1px solid #e7ecf1'}}>
                                        <ul className="AllActivityList">
                                            {this
                                                .state
                                                .data
                                                .map((e, idx) => (<ActionRow
                                                    key={idx}
                                                    role={e.role}
                                                    action={e.action}
                                                    user={e.fullName}
                                                    time={e.time}
                                                    type={e.status}/>))}

                                        </ul>
                                    </div>
                                </div>
                            )
}

                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}