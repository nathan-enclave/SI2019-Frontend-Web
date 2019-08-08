import React, {Component} from 'react'
import Select from 'react-select';
import '../EditForm.css'

const yearsOfExp = []
for (let index = 0; index <= 30; index++) {
    if (index <= 1) {
        yearsOfExp.push({value: index, label: `${index} year`})
    } else {
        yearsOfExp.push({value: index, label: `${index} years`})
    }

}

export default class SkillOption extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listSkills: [],
            skillSelected: this.props.data? this.props.data.skill:null ,
            expYearSelected: this.props.data ? this.props.data.expYear: {value: 1, label: '1 year'} ,
            error: "",
            checkValidate: false,
            expYear: yearsOfExp
        }
    }

    handleSkillChange = async (selectOption) => {
        this.setState({error: null})
        await this.setState({skillSelected: selectOption})
        this
        .props
        .handleExpand({
            data: {
                id: this.state.skillSelected.value,
                expYear: this.state.expYearSelected.value
            },
            index:this.props.keyIndex
        });
    }
    handleExpChange = async (selectOption) => {
        
        await this.setState({expYearSelected: selectOption})
        this
        .props
        .handleExpand({
            data: {
                id: this.state.skillSelected.value,
                expYear: this.state.expYearSelected.value
            },
            index:this.props.keyIndex
        });
    
    }
   

    handleRemoveItem = (e) => {
        e.target.parentNode.parentNode.parentNode.remove()
        this
        .props
        .handleExpand({
            data: {
                id: this.state.skillSelected ? this.state.skillSelected.value: null,
                expYear: this.state.expYearSelected
            },
            index:this.props.keyIndex,
            isDeleted: true
        });
    }
    render() {
        return (
            <div className="SkillOption" id={`skill_select_${this.props.keyIndex}`}>
                <div className="row relative1">
                    {this.props.keyIndex !== 0
                        ? <div className="border-close">
                                <div className="close close-skill"  onClick={(e)=>this.handleRemoveItem(e)}></div>
                            </div>
                        : ''}

                    <div className="col-md-6 padding-right-md">
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    Skill
                                </label>
                                {this.state.error}
                                <Select
                                    value={this.state.skillSelected}
                                    options={this.props.options}
                                    onChange={this.handleSkillChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 padding-left-md">
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                Years of experience
                                </label>
                                <Select
                                    // defaultValue={yearsOfExp[1]}
                                    value={this.state.expYearSelected}
                                    options={yearsOfExp}
                                    onChange={this.handleExpChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
