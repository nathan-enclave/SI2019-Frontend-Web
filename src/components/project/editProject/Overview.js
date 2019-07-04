import React, { Component } from 'react'
import EditProject from './DefaultProject';
import DefaultProject from './DefaultProject';

export default class Overview extends Component {
    render() {
        return (
            <div className="row" style={{display: 'flex'}}>
                <DefaultProject teamName="Team A" teamSkills ="ReactJS" />
                <EditProject/>
            </div>
        )
    }
}
