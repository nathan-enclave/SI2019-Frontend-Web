import React, {Component} from 'react';
import Stats from './Stats';
import getTotal from '../../../../container/dashboard/GetTotal';
import Action from './Action/ActionList';
import {ClipLoader} from 'react-spinners';
import AllAction from './AllAction/AllAction';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            isToggle: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleClose = this.handleClose.bind(this)
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
    toggleModal(){
        this.setState({
            isToggle: true
        })
    }
    handleClose(){
        this.setState({
            isToggle: false
        })
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
                    <div className="d-flex">
                        <div className="portlet-title d-flex justify-center flex-col"  >
                            <div className="caption">
                                <i className="icon-bar-chart font-dark hide"/>
                                <span className="caption-subject font-dark uppercase" style={{fontSize : "20px"}}>Recent activities</span>
                            </div>
                        </div>
                        <div className="margin-left-md">
                            <button
                                onClick={this.toggleModal}
                                className="btn btn-sm grey-mint">
                                History
                            </button>
                            <AllAction open={this.state.isToggle} onClose={this.handleClose}/>
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