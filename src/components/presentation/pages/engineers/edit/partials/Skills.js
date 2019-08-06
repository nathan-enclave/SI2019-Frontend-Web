import React, {Component} from 'react'

import SkillOption from "./SkillOption";
import { ClipLoader } from 'react-spinners';

export default class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listSkills: [],
            error: "",
            numSkills: 0,
            isExpanded: false,
            loading:false         
        }
    }
    async handleExpand(status) {        
        const currentSkills = this.state.listSkills        
        const index = currentSkills.findIndex(e => e.index === status.index)
        if (index >= 0) {
            currentSkills[index] = status
        } else {
            currentSkills.push(status)
        }
        if (status.isDeleted) {
            const indexDel = currentSkills.findIndex(e => e.index === status.index)
            currentSkills.splice(indexDel, 1)
        }
        await this.setState({listSkills: currentSkills})
        this
            .props
            .getData(this.state.listSkills)
    }
    handleAddMore = (e) => {
        e.preventDefault()
        this.setState({
            numSkills: this.state.numSkills + 1
        })
    }
    async componentWillMount() {
        await this.setState({listSkills: this.props.skillSelected.map((e, idx)=>{
            return {
                data: {
                    id: e.skill.value,
                    expYear: e.expYear.value
                },
                index: idx
            }           
        }), numSkills: this.props.skillSelected.length})
    }
    render() {
        const dataRender = []
        for (let i = 0; i < this.state.numSkills; i += 1) {
            dataRender.push(<SkillOption
                keyIndex={i}
                key={i}
                data={this.props.skillSelected[i]}
                options={this.props.options}
                handleExpand={this
                .handleExpand
                .bind(this)}/>)
        };    
        
        return (        
            <div className="Skills">
                {this.state.loading ? 
                (<div className='sweet-loading d-flex justify-center'>
                <ClipLoader 
                  sizeUnit={"px"}
                  size={25}
                  color={'#123abc'}
                  loading={this.state.loading}
                />
                </div>): dataRender
                }               
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
