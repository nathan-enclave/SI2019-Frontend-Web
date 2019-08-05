import React, {Component} from 'react'

import MemberOptions from "./MemberOptions"

export default class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listEngineers: [],
            error: "",
            numEngineers:1,
            isExpanded: false,
        }
    }
    async handleExpand(status) {
        const currentEngineers = this.state.listEngineers
        console.log(currentEngineers);        
        const index = currentEngineers.findIndex(e=>e.index === status.index)        
        if(index >=0) {
            currentEngineers[index] = status
        } else {
            currentEngineers.push(status)
        }        
        if(status.isDeleted) {
            const indexDel = currentEngineers.findIndex(e=>e.index === status.index)
            currentEngineers.splice(indexDel, 1)
        }
        await this.setState({
            listEngineers:currentEngineers
        })
        this.props.getData(this.state.listEngineers)
    }
    handleAddMore =  (e) => {
        e.preventDefault()
        this.setState({
            numEngineers: this.state.numEngineers+1
        })
    }   
    render() {       
        const dataRender = []
        for (let i = 0; i < this.state.numEngineers; i += 1) {
            dataRender.push(<MemberOptions keyIndex={i} key={i}
                options={this.props.options}
                handleExpand={this.handleExpand.bind(this)}
            />)
          };       
        return (            
            <div className="Skills">
                {dataRender}
                <div className="row">
                    <div className="col-12">
                   
                        <div
                            className="margin-top-10"
                            style={{
                            textAlign: 'right'
                        }}>
                            <p> {this.props.msg}</p>
                            <button className="btn yellow" onClick={(e) => this.handleAddMore(e)}>
                                Add more member
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}
