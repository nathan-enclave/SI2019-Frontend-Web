import React, { Component } from 'react';
import { Link } from "react-router-dom";


class MemberRow extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        let typeLabel = (this.props.role === "leader") ? "danger" : "success"
        return (
            <tr>
                <td>
                    <Link to={`/engineer/${this.props.id}`}> {this.props.firstName} {this.props.lastName} </Link>
                </td>
                <td><span className={"label label-sm label-" + typeLabel + " label-mini"}> {this.props.role} </span></td>
            </tr>
        );
    }
}
export default MemberRow;