import React, {Component} from 'react'
import moment from "moment";
export default class ActionRow extends Component {
    formatRole(role) {
        if (role === 'HR') {
            return 'HR Manager'
        }
        if (role === 'PM') {
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

    formatAction(action) {
        const arr = action.split(' ');
        const method = arr[0]
        let result = this.capitalize(method.slice(0, method.length - 1));
        for (let i = 1; i < arr.length; i++) {
            result += ' ' + arr[i]
        }
        return result

    }
    formatType(status) {
        if (status === 'info') {
            return <i className="icon-pencil ActionIconCreate"/>
        }
        if (status === 'success') {
            return <i className="icon-note ActionIconUpdate"/>
        }
        if (status === 'warning') {
            return <i className=" icon-close ActionIconDelete"/>
        }
        return <i className="icon-pencil ActionIconCreate"/>
    }
    render() {
        return (
            <div className="ActionRow">
                <div className="mt-actions">
                    <div className="mt-action">
                        <div className="mt-action-body">
                            <div className="mt-action-row">
                                <div className="mt-action-info ">
                                    <div className="mt-action-icon ">
                                        {this.formatType(this.props.type)}
                                    </div>
                                    <div className="mt-action-details ">
                                        <span className="mt-action-author">[{this.formatRole(this.props.role)}] {this.props.user}</span>
                                        <p className="mt-action-desc">{this.formatAction(this.props.action)}</p>
                                    </div>
                                </div>
                                <div className="mt-action-datetime ">
                                    <span className="mt-action-date">{moment(this.props.time).calendar()}</span>
                                    <span className="mt-action-dot bg-green"/> {/* <span className="mt=action-time">9:30-13:00</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
