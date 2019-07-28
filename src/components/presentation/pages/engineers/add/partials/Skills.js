import React, {Component} from 'react'

import SkillOption from "./SkillOption";


export default class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listSkills: [],
            error: "",
            numSkills:1,
            isExpanded: false,
        }
    }
    async handleExpand(status) {
        const currentSkills = this.state.listSkills
        console.log(currentSkills);        
        const index = currentSkills.findIndex(e=>e.index === status.index)        
        if(index >=0) {
            currentSkills[index] = status
        } else {
            currentSkills.push(status)
        }        
        if(status.isDeleted) {
            const indexDel = currentSkills.findIndex(e=>e.index === status.index)
            currentSkills.splice(indexDel, 1)
        }
        await this.setState({
            listSkills:currentSkills
        })
        this.props.getData(this.state.listSkills)
    }
    handleAddMore =  (e) => {
        this.setState({
            numSkills: this.state.numSkills+1
        })
    }   
    render() {
        const dataRender = []
        for (let i = 0; i < this.state.numSkills; i += 1) {
            dataRender.push(<SkillOption keyIndex={i} key={i}
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
                            textAlign: 'center'
                        }}>
                            <button className="btn yellow" onClick={(event) => this.handleAddMore(event)}>
                                Add more skills
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}
