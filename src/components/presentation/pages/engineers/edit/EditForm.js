import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail, isEmpty, isNumeric } from 'validator';
import SkillContainer from './../../../../container/skills';
import DatePicker from "react-datepicker";
import Skills from "./partials/Skills";
import { ClipLoader } from 'react-spinners';
import { handleUpload } from "../../../../../service/upload/fileUploader";
import EngineerContainer from "../../../../container/engineer";
import ImageUploader from "../../../commons/input/ImageUploader";
import CheckButton from 'react-validation/build/button';
import './EditForm.css'

const required = (value) => {
    if (isEmpty(value)) {
        return <div className="small-validate">This field is required</div>;
    }
}
const phone = (value) => {
    if (!isNumeric(value, [
        {
            no_symbols: false
        }
    ])) {
        return <div className="small-validate">The phone number contains only numbers.</div>;
    }
    else if (value.trim().length < 10) {
        return <div className="small-validate">The phone number can't less than 10 letters.</div>;
    }
    else if (value.trim().length > 15) {
        return <div className="small-validate">The phone number can't more than 15 letters.</div>;
    }
}
const email = (value) => {
    if (!isEmail(value)) {
        return <div className="small-validate">Invalid email format.</div>;
    }
}
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            status: 1,
            skills: [],
            dateOut: null,
            dateIn: null,
            birthday: null,
            error: "",
            selectedStatus: null,
            data: {},
            loading: true,
            saveLoading: false
        };
    }

   

    getImageName = (image) => {
        this.setState({ avatar: image })
    }
    async componentWillMount() {
        let listSkills = await SkillContainer.getAll();
        await this.setState({options: listSkills})
        const currentEngineer = await EngineerContainer.getById(this.props.id);
        console.log(currentEngineer)
        setTimeout(() => {
            this.setState({
                id: String(currentEngineer.id),
                firstName: currentEngineer.firstName,
                lastName: currentEngineer.lastName,
                englishName: currentEngineer.englishName,
                phoneNumber: String(currentEngineer.phoneNumber),
                birthday: new Date(new Date(currentEngineer.birthday).toDateString()),
                dateIn: new Date(new Date(currentEngineer.dateIn).toDateString()),
                avatar: currentEngineer.avatar,
                oldAvatar: currentEngineer.avatar,
                salary: String(currentEngineer.salary),
                address: currentEngineer.address,
                email: currentEngineer.email,
                skype: currentEngineer.skype,
                expYear: String(currentEngineer.expYear),
                status: String(currentEngineer.status),
                skills: currentEngineer
                    .skills
                    .map(e => {
                        return {
                            skill: {
                                value: e.id,
                                label: e.name
                            },
                            expYear: {
                                value: e.expYear,
                                label: e.expYear <= 1
                                    ? `${e.expYear} year`
                                    : `${e.expYear} years`
                            }
                        }
                    }),
                loading: false
            });
        }, 1000)

    }
    isChange = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        this.setState({
            [fieldName]: value,
            data: {
                ...this.state.data,
                [fieldName]: value
            }
        });

    }
    handleChangeBirthday = (date) => {
        this.setState({
            birthday: date,
            data: {
                ...this.state.data,
                birthday: date
            }
        });
    }
    handleChangeDateIn = (date) => {
        this.setState({
            dateIn: date,
            data: {
                ...this.state.data,
                dateIn: date
            }
        });

    }
    handleChangeDateOut = (date) => {
        this.setState({
            dateOut: date,
            data: {
                ...this.state.data,
                dateOut: date
            }
        });
    }
    submitSaveForm = async () => {
        await this.setState({
            saveLoading: true
        })
        if (this.state.avatar !== this.state.oldAvatar) {
            const avatar = await handleUpload(this.state.avatar)
            this.setState({
                avatar,
                data: {
                    ...this.state.data,
                    avatar,
                }
            })
        }
        setTimeout(() => {
            EngineerContainer
                .update(this.props.id, this.state.data)
                .then(result => {
                    if (!result.statusCode) {
                        this.props.changeMSG("Edit successfully.")
                        this.setState({ error: "", saveLoading: false })
                        this
                            .props
                            .onClose();
                        this
                            .props
                            .onOpenMSG();
                    } else {
                        this.setState({
                            error: (
                                <div class="alert alert-danger">
                                    <strong>Error!</strong>
                                    Something went wrong, please try again later.
                            </div>
                            ),
                            saveLoading: false
                        })
                    }
                }).catch(error => {
                    this.setState({
                        msg: "Error.",
                        saveLoading: false
                    })
                })
        }, 500)

    }
    onSubmit = (e) => {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            this.submitSaveForm()
        }
    }
    displayStatus = () => {
        if (Number(this.state.status) === 0)
            this.setState({ selectedStatus: "selected" })
    }

    getData = async (items) => {
        await this.setState({
            skills: items.map(e => e.data),
            data: {
                ...this.state.data,
                skills: items.map(e => e.data)
            }
        })
    }
    displayLoading = () => {
        return this.state.saveLoading ? (
            <div className='sweet-loading d-flex justify-center margin-top-md'>
                <ClipLoader
                    sizeUnit={"px"}
                    size={30}
                    color={'#123abc'}
                    loading={this.state.saveLoading} />
            </div>
        ) : (
                <button type="submit" className="btn green">SAVE</button>
            )
    }
    render() {
        return (
            <div className="portlet light bordered EditForm">
                <div className="portlet-title tabbable-line">
                    <div className="caption caption-md">
                        <i className="icon-globe theme-font hide" />
                        <span className="caption-subject font-blue-madison bold uppercase">EDIT {this.props.englishName}'S PROFILE
                        </span>
                    </div>
                </div>
                <div className="portlet-body">
                    {this.state.loading
                        ? (
                            <div className='sweet-loading d-flex justify-center middle-loading-custom'>
                                <ClipLoader
                                    sizeUnit={"px"}
                                    size={70}
                                    color={'#7ed6df'}
                                    loading={this.state.loading} />
                            </div>
                        )
                        : (
                            <div className="tab-content">
                                {this.state.error}
                                <div className="tab-pane active" id="tab_1_1">
                                    <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                        <div className="d-flex justify-center">
                                            <ImageUploader
                                                data={this.state.avatar}
                                                name="avatar"
                                                function={this
                                                    .getImageName
                                                    .bind(this)} status={'edit'} />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">English Name</label>
                                                    <Input
                                                        validations={[required]}
                                                        type="text"
                                                        name="englishName"
                                                        value
                                                        ={this.state.englishName}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">First Name</label>
                                                    <Input
                                                        validations={[required]}
                                                        type="text"
                                                        name="firstName"
                                                        value
                                                        ={this.state.firstName}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Last Name</label>
                                                    <Input
                                                        validations={[required]}
                                                        type="text"
                                                        name="lastName"
                                                        value
                                                        ={this.state.lastName}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Address</label>
                                                    <Input
                                                        validations={[required]}
                                                        type="text"
                                                        name="address"
                                                        value
                                                        ={this.state.address}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <label className="control-label">Phone Number</label>
                                                    <Input
                                                        validations={[required, phone]}
                                                        type="text"
                                                        name="phoneNumber"
                                                        value
                                                        ={this.state.phoneNumber}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control" />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label className="control-label">Salary</label>
                                                    <Input
                                                        validations={[required]}
                                                        type="number"
                                                        name="salary"
                                                        value
                                                        ={this.state.salary}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Email</label>
                                                    <Input
                                                        validations={[required, email]}
                                                        type="text"
                                                        name="email"
                                                        value
                                                        ={this.state.email}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Skype</label>
                                                    <Input
                                                        validations={[required, email]}
                                                        type="text"
                                                        name="skype"
                                                        value
                                                        ={this.state.skype}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Birthday</label><br />
                                                    <DatePicker
                                                        selected={this.state.birthday}
                                                        onChange={this.handleChangeBirthday}
                                                        className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <label className="control-label">Date in</label><br />
                                                        <DatePicker
                                                            selected={this.state.dateIn}
                                                            onChange={this.handleChangeDateIn}
                                                            className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <label className="control-label">Date out</label><br />
                                                        <DatePicker
                                                            selected={this.state.dateOut}
                                                            onChange={this.handleChangeDateOut}
                                                            className="form-control" />
                                                    </div>
                                                </div>
                                                <Skills
                                                    skillSelected={this.state.skills}
                                                    options={this.state.options}
                                                    getData={this.getData.bind(this)} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="margin-top-20 text-center">
                                                {this.displayLoading()}
                                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
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