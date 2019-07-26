import { withSnackbar } from 'notistack';
import React, { Component } from 'react'
import { Fragment, Button } from "@material-ui/core";

import firebase from 'firebase'
import { initializeFirebase} from "../../../service/firebase";
initializeFirebase();

const db = firebase.firestore();

class Notification extends Component {

    constructor(props){
        super(props);
        this.state= {
            data: null
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.data) {
            
            const key = this.props.enqueueSnackbar(this.state.data.action, { 
                variant: this.state.data.status,
                autoHideDuration: 10500,
                action: (<div className="border-close border-close-notification">
                <div className="close" onClick={()=>this.props.closeSnackbar(key)}></div>
            </div>)
            //     action: ( <Button onClick={() => { this.props.closeSnackbar(key) }}>
            //     Close
            // </Button>)
            });
        } else {
            this.props.enqueueSnackbar("Welcome back, my love !", { 
                variant: 'success',
                autoHideDuration: 1000,
            }) 
        }
       
    }
    componentDidMount() {
        const noti = this;
        db.collection("activities").orderBy('time')
            .onSnapshot((querySnapshot) => {
                if(querySnapshot.docs.length == 0){
                    return;
                } 
                const lastActivity = querySnapshot.docs[querySnapshot.docs.length - 1].data()
                noti.setState({
                    data: lastActivity
                })
            });
    }
    
    render(){
        return null
    }
};

export default withSnackbar(Notification);