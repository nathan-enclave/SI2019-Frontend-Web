import { withSnackbar } from 'notistack';
import React, { Component } from 'react'
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
        const userData = JSON.parse(localStorage.getItem('userData')) 
        
        if(prevState.data) {
            if (this.state.data.userId === userData.id) {
                const key = this.props.enqueueSnackbar(`You have ${this.state.data.action}`, { 
                    variant: this.state.data.status,
                    autoHideDuration: 1500,
                    action: (<div className="border-close border-close-notification">
                    <div className="close" onClick={()=>this.props.closeSnackbar(key)}></div>
                </div>)
                });
            } else {
                const key = this.props.enqueueSnackbar(`${this.state.data.name} has ${this.state.data.action}`, { 
                    variant: this.state.data.status,
                    autoHideDuration: 1500,
                    action: (<div className="border-close border-close-notification">
                    <div className="close" onClick={()=>this.props.closeSnackbar(key)}></div>
                </div>)
                });
            }
          
        } else {
            this.props.enqueueSnackbar(`Welcome back, ${userData.englishName} !`, { 
                variant: 'success',
                autoHideDuration: 3000,
            }) 
        }
       
    }
    componentDidMount() {
        const noti = this;
        db.collection("activities").orderBy('time', 'desc')
            .onSnapshot((querySnapshot) => {
                if(0 === querySnapshot.docs.length){
                    return;
                } 
                const lastActivity = querySnapshot.docs[0].data()
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