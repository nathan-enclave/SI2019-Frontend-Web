import React, {Component} from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
// import { isEmail, isEmpty, isNumeric } from 'validator';
import getTotal from './../../../../container/skills/GetListSkills';
import getData from '../../../../container/engineer/GetDetailEng';
import DatePicker from "react-datepicker";
import Skills from "./partials/Skills";
import {ClipLoader} from 'react-spinners';
import EngineerContainer from "../../../../container/engineer";
import ImageUploader from "../../../commons/input/ImageUploader";

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
            loading: true
        };
    }
    async componentWillMount() {

        let res0 = await getTotal();
        await this.setState({options: res0})
        const res = await getData(this.props.id);
        setTimeout(() => {
            this.setState({
                id: String(res.id),
                firstName: res.firstName,
                lastName: res.lastName,
                englishName: res.englishName,
                phoneNumber: String(res.phoneNumber),
                birthday: new Date(new Date(res.birthday).toDateString()),
                dateIn: new Date(new Date(res.dateIn).toDateString()),
                avatar: res.avatar,
                salary: String(res.salary),
                address: res.address,
                email: res.email,
                skype: res.skype,
                expYear: String(res.expYear),
                status: String(res.status),
                skills: res
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

    submitSaveForm = (event) => {
        console.log(this.state.data);
        event.preventDefault() // prevent put default
        EngineerContainer
            .update(this.props.id, this.state.data)
            .then(result => {
                console.log(result);
                
                if (!result.statusCode) {
                    this.setState({error: ""})
                    this
                        .props
                        .onClose();
                    this
                        .props
                        .onOpenMSG();
                } else {
                    this.setState({error: (
                            <div class="alert alert-danger">
                                <strong>Error!</strong>
                                Something went wrong, please try again later.
                            </div>
                        )})
                }
            })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this
            .form
            .validateAll();
    }
    displayStatus = () => {
        if (Number(this.state.status) === 0) 
            this.setState({selectedStatus: "selected"})
    }

    getData = async(items) => {

        await this.setState({
            skills: items.map(e => e.data),
            data: {
                ...this.state.data,
                skills: items.map(e => e.data)
            }
        })
    }
    render() {
        return (
            <div className="portlet light bordered">
                <div className="portlet-title tabbable-line">
                    <div className="caption caption-md">
                        <i className="icon-globe theme-font hide"/>
                        <span className="caption-subject font-blue-madison bold uppercase">EDIT {this.props.englishName}'S PROFILE
                        </span>
                    </div>
                </div>
                <div className="portlet-body">
                    {this.state.loading
                        ? (
                            <div className='sweet-loading d-flex justify-center'>
                                <ClipLoader
                                    sizeUnit={"px"}
                                    size={150}
                                    color={'#123abc'}
                                    loading={this.state.loading}/>
                            </div>
                        )
                        : (
                            <div className="tab-content">
                                {this.state.error}

                                <div className="tab-pane active" id="tab_1_1">
                                    <Form >
                                        <div className="d-flex justify-center">
                                            <ImageUploader data={this.state.avatar} status={'edit'}/>
                                            {/* <img height="130px" src={this.state.avatar} alt=""/><br/><br/> */}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">English Name</label>
                                                    <Input
                                                        type="text"
                                                        name="englishName"
                                                        value
                                                        ={this.state.englishName}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">First Name</label>
                                                    <Input
                                                        type="text"
                                                        name="firstName"
                                                        value
                                                        ={this.state.firstName}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Last Name</label>
                                                    <Input
                                                        type="text"
                                                        name="lastName"
                                                        value
                                                        ={this.state.lastName}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Address</label>
                                                    <Input
                                                        type="text"
                                                        name="address"
                                                        value
                                                        ={this.state.address}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control"/>
                                                </div>

                                                <div className="form-group">
                                                    <label className="control-label">Phone Number</label>
                                                    <Input
                                                        type="text"
                                                        name="phoneNumber"
                                                        value
                                                        ={this.state.phoneNumber}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Salary</label>
                                                    <Input
                                                        type="number"
                                                        name="salary"
                                                        value
                                                        ={this.state.salary}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label">Email</label>
                                                    <Input
                                                        type="text"
                                                        name="email"
                                                        value
                                                        ={this.state.email}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Skype</label>
                                                    <Input
                                                        type="text"
                                                        name="skype"
                                                        value
                                                        ={this.state.skype}
                                                        onChange={(event) => this.isChange(event)}
                                                        className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Birthday</label><br/>
                                                    <DatePicker
                                                        selected={this.state.birthday}
                                                        onChange={this.handleChangeBirthday}
                                                        className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <label className="control-label">Date in</label><br/>
                                                        <DatePicker
                                                            selected={this.state.dateIn}
                                                            onChange={this.handleChangeDateIn}
                                                            className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <label className="control-label">Date out</label><br/>
                                                        <DatePicker
                                                            selected={this.state.dateOut}
                                                            onChange={this.handleChangeDateOut}
                                                            className="form-control"/>
                                                    </div>
                                                </div>
                                                <Skills
                                                    skillSelected={this.state.skills}
                                                    options={this.state.options}
                                                    getData={this
                                                    .getData
                                                    .bind(this)}/>
                                            </div>
                                        </div>
                                        
                                    </Form>
                                    <div className="row">
                                        <div className="margin-top-20 text-center">
                                            <button
                                                type="submit"
                                                className="btn green"
                                                onClick={(event) => this.submitSaveForm(event)}>
                                                SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}
export default EditForm;