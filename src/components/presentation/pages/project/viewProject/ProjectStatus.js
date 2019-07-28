import React, { Component } from 'react';

class ProjectStatus extends Component {
    constructor(props) {
        super(props)
        this.state={
            
        }
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
        console.log(this.props.status);
        
        return (
            <tr>
                <td>
                    {/* <a href="abc"> {this.props.name} {this.props.lastName} */}
                        <span className={"label label-sm " + color}> {this.props.status} </span>
                </td>
            </tr>
        );
    }
}
export default ProjectStatus; 