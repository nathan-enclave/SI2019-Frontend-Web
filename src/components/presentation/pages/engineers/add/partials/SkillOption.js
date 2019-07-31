import React, {Component} from 'react'
import Select from 'react-select';

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
            skillSelected: null,
            expYearSelected: 1,
            error: "",
            checkValidate: false,
            expYear: yearsOfExp
        }
    }
    handleSkillChange = async (selectOption) => {
        this.setState({error: null})
        await this.setState({skillSelected: selectOption.value})
        this
        .props
        .handleExpand({
            data: {
                id: this.state.skillSelected,
                expYear: this.state.expYearSelected
            },
            index:this.props.keyIndex
        });
    }
    handleExpChange = async (selectOption) => {
        
        await this.setState({expYearSelected: selectOption.value})
        this
        .props
        .handleExpand({
            data: {
                id: this.state.skillSelected,
                expYear: this.state.expYearSelected
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
                id: this.state.skillSelected,
                expYear: this.state.expYearSelected
            },
            index:this.props.keyIndex,
            isDeleted: true
        });
    }
    render() {
        return (
            <div className="SkillOption" id={`skill_select_${this.props.keyIndex}`}>
                <div className="row relative">
                    {this.props.keyIndex !== 0
                        ? <div className="border-close">
                                <div className="close close-skill"  onClick={(e)=>this.handleRemoveItem(e)}></div>
                            </div>
                        : ''}
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    Skill:
                                </label>
                                {this.state.error}
                                <Select
                                    // value={this.state.selectOption}
                                    options={this.props.options}
                                    onChange={this.handleSkillChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                Experience years:
                                </label>
                                <Select
                                    defaultValue={yearsOfExp[1]}
                                    // value={this.props.selectOption}
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
