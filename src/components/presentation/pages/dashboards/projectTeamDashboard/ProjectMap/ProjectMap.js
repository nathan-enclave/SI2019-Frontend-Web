import React, {Component} from 'react'
import AnimatedMap from './AnimatedMap';
export default class ProjectMap extends Component {
    render() {
        return (
            <div className="ProjectMap col-sm-12">
                <div className="portlet light bordered">
                    <div className="portlet-title">
                        <div className="caption">
                            <span className="caption-subject bold uppercase font-dark">Abroad</span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <AnimatedMap/>
                    </div>
                </div>
            </div>
        )
    }
}
