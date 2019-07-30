import React, {Component} from 'react';
import ActionRow from "./ActionRow";
import './ActionRow.css'
import firebase from 'firebase'
import {initializeFirebase} from "../../../../../../service/firebase"
import { ClipLoader } from "react-spinners";
initializeFirebase();
const db = firebase.firestore();

class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        const actionList = this;
        
        db.collection("activities").orderBy('time', 'desc').limit(5)
            .onSnapshot((querySnapshot) => {
                const list = []
                querySnapshot.forEach(e=>{
                    list.push(e.data())
                })
                actionList.setState({
                    data: list
                })
               
            });
    }
    render() {
        return (
            <div className="portlet light bordered">
                <div className="portlet-body">
                    <div className="tab-content">
                        <div className="tab-pane active" id="tab_actions_pending">
                            {this.state.data? this.state.data.map((e, idx)=>(
                                <ActionRow
                                    key={idx} 
                                    role={e.role}
                                    action={e.action}
                                    user={e.fullName}
                                    time={e.time}
                                    type={e.status}
                                />
                            )): <div className='sweet-loading d-flex justify-center'>
                                <ClipLoader
                                        sizeUnit={"px"}
                                        size={70}
                                        color={'#7ed6df'}
                                        loading={this.state.loading}/>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Action;