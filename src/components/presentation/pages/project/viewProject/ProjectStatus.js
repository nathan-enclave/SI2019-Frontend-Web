import React, { Component } from 'react';

class ProjectStatus extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let color = null
        if (this.props.status === "done") {
            color = 'label-info'
        } else if (this.props.status === "inProgress") {
            color = 'label-success'
        } else if (this.props.status === 'pending') {
            color = 'label-warning'
        }        
        return (
            <tr>
                <td>
                    <span className={"label label-sm " + color}> {this.props.status} </span>
                </td>
            </tr>
        );
    }
}
export default ProjectStatus; 