import React, {Component} from 'react'
import AnimatedMap from './AnimatedMap';
import DashboardContainer from "../../../../../container/dashboard";
import {ClipLoader} from 'react-spinners'
export default class ProjectMap extends Component {
    constructor() {
        super()
        this.state = {
            mapData: null
        }
    }
    async componentWillMount() {
        const data = await DashboardContainer.getStatistic('dashboard/statistic/projects/location?year=2019')
        this.setState({
            mapData: data.map(e => ({name: `${e.city}, ${e.country}`, coordinates: e.coordinates, numProjects: e.numProjects}))
        })

    }
    render() {
        return (
            <div className="ProjectMap col-sm-12">
                <div className="portlet light bordered">
                    <div className="portlet-title">
                        <div className="caption">
                            <span className="caption-subject bold uppercase font-dark">Projects Abroad</span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        {!this.state.mapData
                            ? (
                                <div className='sweet-loading d-flex justify-center middle-loading-custom'>
                                    <ClipLoader
                                        sizeUnit={"px"}
                                        size={70}
                                        color={'#7ed6df'}
                                        loading={this.state.loading}/>
                                </div>
                            )
                            : (<AnimatedMap data={this.state.mapData}/>)}

                    </div>
                </div>
            </div>
        )
    }
}
