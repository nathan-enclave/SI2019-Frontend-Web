import React, {Component} from 'react'
import moment from "moment";

export default class ActionRow extends Component {

    formatRole(role){
        if(role === 'HR') {
            return 'HR Manager'
        }
        if(role === 'PM') {
            return 'Project Manager'
        }
        return role
    }
    capitalize = (s) => {
        if (typeof s !== 'string') 
            return ''
        return s
            .charAt(0)
            .toUpperCase() + s.slice(1)
    }
    formatAction(action){
        const arr = action.split(' ');
        const method = arr[0]
        let result = this.capitalize(method.slice(0, method.length - 1));
        for (let i = 1; i < arr.length; i++) {
            result+= ' ' + arr[i]
        }
        return result
        
    }
    formatType(status) {
        if(status === 'info') {
            return <i className="icon-pencil ActionIconCreate"/>
        }
        if(status === 'success') {
            return <i className="icon-note ActionIconUpdate"/>
        }
        if(status === 'warning') {
            return <i className=" icon-close ActionIconDelete"/>
        }
        return <i className="icon-pencil ActionIconCreate"/>
    }
    render() {
        return (
            <li className="mt-list-item ActionRow d-flex space-between">
                <div className="head-activities d-flex">
                    <div className="list-icon-container done align-self-center">
                        {this.formatType(this.props.type)}
                    </div>
                    
                    <div className="list-item-content">
                        <h4>
                            <span><b>[{this.formatRole(this.props.role)}]</b> {this.props.user}: {this.formatAction(this.props.action)}</span>
                        </h4>
                    </div>
                </div>
                <div className="list-datetime align-self-center" style={{width: "150px"}}>
                {moment(this.props.time).format("MMM Do, YYYY")}
                </div>
            </li>
        )
    }
}
