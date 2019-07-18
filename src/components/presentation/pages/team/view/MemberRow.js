import React, { Component } from 'react';

class MemberRow extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        let typeLabel = (this.props.role === "leader") ? "danger" : "success"
        return (
            <tr>
                <td>
                    <a href="abc"> {this.props.firstName} {this.props.lastName} </a>
                </td>
                <td><span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span></td>
            </tr>
        );
    }
}
export default MemberRow;