import React, {Component} from 'react';
import Select from 'react-select';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {ClipLoader} from 'react-spinners';
import Member from './partials/Member';
import TeamContainer from "../../../../container/team";
import EngineerContainer from "../../../../container/engineer";
import ProjectContainer from "../../../../container/project";
import CheckButton from 'react-validation/build/button';
import {isEmpty} from 'validator';

const required = (value) => {
    if (isEmpty(value)) {
        return (
            <div className="small-validate">
                This field is required!
            </div>
        );
    }
}
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberSelectOptions: [],
            options: [],
            selectOptions: [],
            project: [],
            data: [],
            engineers: [],
            error: "",
            loading: true,
            saveLoading: false
        };
    }

    async componentWillMount() {
        let engineerList = await EngineerContainer.getPagination(1000, 0, `"id", "firstName"`, "firstName")
        engineerList = engineerList.results
        engineerList.forEach(e => {
            e.value = e.id;
            e.label = e.firstName;
            delete e.id;
            delete e.firstName
        })
        this.setState({memberOptions: engineerList})
        let projectList = await ProjectContainer.getPending(1000, 0, `"id", "name"`);
        projectList = projectList.results
        projectList.forEach(e => {
            e.value = e.id;
            e.label = e.name;
            delete e.id;
            delete e.name
        })
        this.setState({options: projectList})
        const currentTeam = await TeamContainer.getById(this.props.id);
        setTimeout(() => {
            this.setState({
                id: String(currentTeam.id),
                name: currentTeam.name,
                projectName: currentTeam.projectName,
                engineers: currentTeam
                    .engineers
                    .map(e => {
                        return {
                            member: {
                                value: e.id,
                                label: e.firstName
                            },
                            role: {
                                value: e.role,
                                label: (e.role === 'leader') ? 'Leader' : (e.role === 'developer') ? 'Developer' : 'Quality Assurance'
                            }
                        }
                    }),
                loading: false
            })
        }, 1000);
        this.setState({
            selectOptions: [
                {
                    value: currentTeam.projects.id,
                    label: currentTeam.projects.name
                }
            ]
        })
    }
    isChange = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        this.setState({[fieldName]: value});
        this.setState({
            data: {
                ...this.state.data,
                [fieldName]: value
            }
        })
    }

    handleChangeMember = (memberSelectOptions) => {
        this.setState({memberSelectOptions});
        let temp = []
        if (memberSelectOptions !== null) {
            memberSelectOptions.forEach(element => {
                temp.push({id: element.value, role: "member"})
            });
            this.setState({
                data: {
                    ...this.state.data,
                    engineers: temp
                }
            })
        }
    }

    getData = async(items) => {
        await this.setState({
            engineers: items.map(e => e.data),
            data: {
                ...this.state.data,
                engineers: items.map(e => e.data)
            }
        })
    }

    handleChangeProjects = (selectOptions) => {
        this.setState({selectOptions});
        if (selectOptions != null) {
            this.setState({
                data: {
                    ...this.state.data,
                    projectId: selectOptions.value
                }
            })
        }
    }

    submitSaveForm = () => {
        this.setState({saveLoading: true})
        TeamContainer
            .update(this.props.id, this.state.data)
            .then((result) => {
                if (!result.statusCode) {
                    this
                        .props
                        .changeMSG("Edit successful.")
                    this
                        .props
                        .onClose();
                    this
                        .props
                        .onOpenMSG();
                } else {
                    if (result.statusCode !== 200) {
                        this.setState({msg: "Something's wrong. Please try it later.", saveLoading: false})
                    }
                }
            })
            .catch(error => {
                this.setState({msg: "Something's wrong. Please try it later.", saveLoading: false})
            })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this
            .form
            .validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            this.submitSaveForm()
        }
    }
    displayLoading = () => {
        return this.state.saveLoading
            ? (
                <div className='sweet-loading d-flex justify-center margin-top-md'>
                    <ClipLoader sizeUnit={"px"} size={30} color={'#123abc'} loading={true}/>
                </div>
            )
            : (
                <button type="submit" className="btn green">SAVE</button>
            )
    }
    render() {
        return (
            <div className="portlet light bordered">
                <div className="portlet-title tabbable-line">
                    <div className="caption caption-md">
                        <i className="icon-globe theme-font hide"/>
                        <span className="caption-subject font-blue-madison bold uppercase">EDIT TEAM {this.state.name}'S INFORMATION
                        </span>
                    </div>
                </div>
                <div className="portlet-body">
                    {this.state.loading
                        ? (
                            <div className='sweet-loading d-flex justify-center middle-loading-custom'>
                                <ClipLoader sizeUnit={"px"} size={70} color={'#7ed6df'} loading={true}/>
                            </div>
                        )
                        : (
                            <div className="tab-content">
                                <span
                                    style={{
                                    color: "red"
                                }}>
                                    {this.state.msg}</span>
                                <div className="tab-pane active" id="tab_1_1">
                                    <Form
                                        onSubmit={e => this.onSubmit(e)}
                                        ref={c => {
                                        this.form = c
                                    }}>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <label className="control-label">Team Name</label>
                                                    <Input
                                                        validations={[required]}
                                                        type="text"
                                                        name="name"
                                                        value={this.state.name}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            Project:
                                                        </label>
                                                        <Select
                                                            value={this.state.selectOptions}
                                                            options={this.state.options}
                                                            onChange={this.handleChangeProjects}/>
                                                    </div>
                                                </div>
                                                <Member
                                                    memberSelected={this.state.engineers}
                                                    options={this.state.memberOptions}
                                                    getData={this
                                                    .getData
                                                    .bind(this)}/>
                                            </div>
                                            <div className="row">
                                                <div
                                                    className="margin-top-20 col-xs-12"
                                                    style={{
                                                    textAlign: 'center'
                                                }}>
                                                    {this.displayLoading()}
                                                    <CheckButton
                                                        style={{
                                                        display: 'none'
                                                    }}
                                                        ref={c => {
                                                        this.checkBtn = c
                                                    }}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}
export default EditForm;