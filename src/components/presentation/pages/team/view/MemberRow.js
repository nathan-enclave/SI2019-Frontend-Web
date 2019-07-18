import React, { Component } from 'react';

 class MemberRow extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let label = (this.props.id ==this.props.leadId)?"leader":"member"
        let typeLabel = (this.props.id ==this.props.leadId)?"danger":"success"
        return (
            <tr>
                <td>
                    <a href="abc"> {this.props.firstName} {this.props.lastName} <span className={"label label-sm label-"+ typeLabel +" label-mini"}> {label} </span></a>
                </td>
            </tr>
        );
    }
}
export default MemberRow; 