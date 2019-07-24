import React, {Component} from 'react'

import SkillOption from "./SkillOption";


export default class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listSkills: [],
            // skillSelected: null,
            // expYearSelected: 1,
            error: "",
            numSkills:1,
            isExpanded: false,
            // expYear: yearsOfExp
        }
    }
    async handleExpand(status) {
        const currentSkills = this.state.listSkills
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

        // if(status.checkValidate) {
        //     console.log(status.checkValidate);
            
        //     this.setState({
        //         isExpanded: status.checkValidate,
        //         numSkills: this.state.numSkills+1
        //     })
        // }




        // if(status){
        //     if(status.data) {
        //         list.push({
        //             id: status.data.skill.value,
        //             expYear: status.data.expYear
        //         })
        //     }
        //     if(status.validated) {
        //         this.setState({
        //             isExpanded: status.validated,
        //             numSkills: this.state.numSkills+1
        //         })
        //     }
        // }
        this.props.getData(this.state.listSkills)
      
        
    }

    handleAddMore =  (e) => {
        this.setState({
            numSkills: this.state.numSkills+1
        })
        // if (this.state.skillSelected) {
        //     await this.setState({error: "", checkValidate: true})
        //     const childData = {
        //         data: {
        //             id: this.state.skillSelected,
        //             expYear: this.state.expYearSelected
        //         },
        //         index: this.props.keyIndex,
        //         // checkValidate: this.state.checkValidate
        //     }
        //     this
        //         .props
        //         .handleExpand(childData)

        // } else {
        //     this.setState({
        //         error: <span>Please select skill</span>
        //     })
        // }
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
