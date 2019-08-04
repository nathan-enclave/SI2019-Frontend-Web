import React, {Component} from 'react'
import Select from 'react-select';

const role = [
    {
        value : "developer",
        label : "Developer"
    },
    {
        value : "quality assurance",
        label : "Quality Assurance"
    },
    {
        value : "leader",
        label : "Leader"
    }
]
export default class MemberOptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listEngineers: [],
            engineerSelected: null,
            roleSelected: "developer",
            error: "",
            checkValidate: false,
            role: role
        }
    }
    handleSkillChange = async (selectOption) => {
        this.setState({error: null})
        await this.setState({engineerSelected: selectOption.value})
        this
        .props
        .handleExpand({
            data: {
                id: this.state.engineerSelected,
                role: this.state.roleSelected
            },
            index:this.props.keyIndex
        });
    }
    handleExpChange = async (selectOption) => {
        
        await this.setState({roleSelected: selectOption.value})
        this
        .props
        .handleExpand({
            data: {
                id: this.state.engineerSelected,
                role: this.state.roleSelected
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
                id: this.state.engineerSelected,
                role: this.state.roleSelected
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
                                    Engineer:
                                </label>
                                {this.state.error}
                                <Select
                                    options={this.props.options}
                                    onChange={this.handleSkillChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                   Roles:
                                </label>
                                <Select
                                    defaultValue={role[0]}
                                    // value={this.props.selectOption}
                                    options={role}
                                    onChange={this.handleExpChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
