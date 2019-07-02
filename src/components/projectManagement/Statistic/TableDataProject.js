import React, { Component } from 'react'
import RowDataProject from './RowDataProject';

export default class TableDataProject extends Component {
    render() {
        return (
            <table className="table table-striped table-hover table-bordered" id="sample_editable_1">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Technology </th>
                    <th> Start </th>
                    <th> End </th>
                    <th> Time Start  </th>
                    <th> Time Update </th>
                    <th> Time Delete </th>
                    <th> Edit</th> 
                    <th> Delete</th>
                </tr>
            </thead>
            <tbody>
            <RowDataProject/>
            <RowDataProject/>
            <RowDataProject/>
            </tbody>
        </table>
        )
    }
}
