import React, {Component} from 'react';
import Stats from './Stats';
import getTotal from '../../../../container/dashboard/GetTotal';
import Action from './Action';
import {ClipLoader} from 'react-spinners';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true
        }
    }
    async componentWillMount() {
        const res = await getTotal();
        setTimeout(() => {
            this.setState({
                data: {
                    engineer: res.engineer,
                    project: res.project,
                    team: res.team,
                    manager: res.manager
                },
                loading: false
            });
        }, 1000)

    }
    render() {
        return (
            <div className="Home">
                {
                    this.state.loading
                    ? (
                        <div className='sweet-loading d-flex justify-center middle-loading-custom-home'>
                            <ClipLoader
                                sizeUnit={"px"}
                                size={50}
                                color={'#7ed6df'}
                                loading={this.state.loading}/>
                        </div>
                    )
                    : <Stats
                        engineer={this.state.data.engineer}
                        project={this.state.data.project}
                        team={this.state.data.team}
                        manager={this.state.data.manager}/>
                }

                <div className="portlet light bordered">
                    <div className="portlet-title">
                        <div className="caption">
                            <i className="icon-bar-chart font-dark hide"/>
                            <span className="caption-subject font-dark bold uppercase">Recent activities</span>
                        </div>
                    </div>
                    <div >
                        <Action/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Index;