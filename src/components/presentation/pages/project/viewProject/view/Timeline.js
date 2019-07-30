import React, { Component } from 'react';
import moment from 'moment'
import './timeline.css'
class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start: this.props.start,
            end: this.props.end,
            current: moment(new Date()).format('MM/DD/YYYY')
        }
    }

    date_diff_indays = (date1, date2) => {
        let dt1 = new Date(date1);
        let dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }

    render() {
        let distance_start_current = this.date_diff_indays(this.state.start, this.state.current)
        let distance_start_end = this.date_diff_indays(this.state.start, this.state.end)
        // console.log(distance_start_current, distance_start_end)
        let distance = (distance_start_current / distance_start_end) * 500
        // console.log(distance);
        let root = document.documentElement;
        root.style.setProperty('--distance_start_current', distance + 'px')
        root.style.setProperty('--distance_to_dot', distance + 85 / 2 + 'px')
        return (            
                <div className="wrapp-timeline" >
                    <div data-radium="true" className="wrapp" >
                        <div className="wrapp-body" >
                            <div className="events-wrapper">
                                <div className="events" >
                                    <span aria-hidden="true" className="timeline-eventline" />
                                    <span aria-hidden="true" className="timeline-eventline2" />
                                    <ol className="events-bar">
                                        <li className="timeline-item-1" data-radium="true" >
                                            <span className="limit-point">{this.props.startFor}</span>
                                            <span className="timeline-dot-1" />
                                        </li>
                                        <li data-radium="true" className="timeline-item-2">                                           
                                            <span className="current-time">{moment(new Date()).format('DD/MM/YYYY')}</span>
                                            <img src="../assets/pages/img/placeholder.png" width="15px" height="15px" alt = "timeline point"/>
                                            <span data-radium="true" className="timeline-dot-2" />
                                        </li>
                                        <li className="timeline-item-3" data-radium="true" >
                                            <span className="limit-point-end">{this.props.endFor}</span>
                                            <span data-radium="true" className="timeline-dot-3" />
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Timeline;