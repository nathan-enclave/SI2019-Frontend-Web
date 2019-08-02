import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail, isEmpty, isNumeric } from 'validator';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import getTotalSkills from '../../../../container/skills/GetListSkills';
import ImageUploader from "../../../commons/input/ImageUploader";
import Skills from "./partials/Skills";
import { handleUpload } from "../../../../../service/upload/fileUploader";
import EngineerContainer from "../../../../container/engineer";
import CheckButton from 'react-validation/build/button';
import "./validate.css"
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
class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nationality: '',
            birthday: "",
            dateIn: "",
            options: [],
            selectOption: null,
            status: 1,
            skills: {},
            error: 0,
            avatar: null,
            msgBirthday: null,
            msgDateIn: null
        };
    }

    selectCountry(val) {
        this.setState({ nationality: val });
    }
    getImageName = (image) => {
        this.setState({ avatar: image })
    }
    isChange = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        this.setState({ [fieldName]: value });
    }
    submitAddForm = async () => {
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            englishName: this.state.englishName,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            email: this.state.email,
            skype: this.state.skype,
            birthday: this.state.birthday,
            dateIn: this.state.dateIn,
            salary: this.state.salary,
            status: Number(this.state.status),
            skills: this.state.skills,
            expYear: Number(this.state.expYear),
            nationality : this.state.nationality,
            gender : this.state.gender
        }
        console.log(data)
        if (this.state.avatar) {
            const avatar = await handleUpload(this.state.avatar)
            data.avatar = avatar
        }
        EngineerContainer
            .add(data)
            .then(result => {
                if (!result.statusCode) {
                    this
                        .props
                        .openMessage()

                } else {
                    if (result.statusCode !== 200) {
                        this.setState({ msg: 'Some error occured, please try again later ' });
                    }
                }
            })
    }
    handleChangeBirthday = (date) => {
        this.setState({ birthday: date, msgBirthday: null });
    }
    handleChangeDateIn = (date) => {
        this.setState({ dateIn: date, msgDateIn: null });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0 && this.state.birthday !== "" && this.state.dateIn !== "") {
            this.submitAddForm()
        }
        else {
            if (this.state.birthday === "") this.setState({ msgBirthday: "This field is required!" })
            if (this.state.dateIn === "") this.setState({ msgDateIn: "This field is required!" })

        }
    }
    async componentWillMount() {
        const res = await getTotalSkills();
        this.setState({ options: res });
    }
    getData = async (items) => {
        await this.setState({
            skills: items.map(e => e.data)
        })
    }
    render() {
        console.log(this.state.nationality)    
        let msgBirthday = this.state.msgBirthday === null ? null : (<div className="small-validate">This field is required!</div>)
        let msgDateIn = this.state.msgDateIn === null ? null : (<div className="small-validate">This field is required!</div>)
        return (
            <div className="portlet light bordered">
                <div className="portlet-title tabbable-line">
                    <div className="caption caption-md">
                        <i className="icon-globe theme-font hide" />
                        <span className="caption-subject font-blue-madison bold uppercase">Add Engineer
                        </span>
                    </div>
                </div>
                <div className="portlet-body">
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
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">English Name</label>
                                            <Input
                                                type="text"
                                                name="englishName"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">First Name</label>
                                            <Input
                                                type="text"
                                                name="firstName"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Last Name</label>
                                            <Input
                                                type="text"
                                                name="lastName"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Nationality</label>
                                            <CountryDropdown className="form-control"
                                                value={this.state.nationality}
                                                onChange={(val) => this.selectCountry(val)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Gender</label>
                                            <select
                                                className="form-control"
                                                onChange={(event) => this.isChange(event)}
                                                name="gender">
                                                <option value={"Male"}>Male</option>
                                                <option value={"Female"}>Female</option>
                                                <option value={"Other"}>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Image</label>
                                            <ImageUploader
                                                name="avatar"
                                                function={this
                                                    .getImageName
                                                    .bind(this)}
                                                status={'add'}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Address</label>
                                            <Input
                                                type="text"
                                                name="address"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Phone Number</label>
                                            <Input
                                                type="text"
                                                name="phoneNumber"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required, phone]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Status</label>
                                            <select
                                                className="form-control"
                                                onChange={(event) => this.isChange(event)}
                                                name="status">
                                                <option value={1}>Available</option>
                                                <option value={0}>In team</option>
                                                <option value={2}>On vacation</option>
                                                <option value={3}>Absence</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Email</label>
                                            <Input
                                                type="text"
                                                name="email"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required, email]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Skype</label>
                                            <Input
                                                type="text"
                                                name="skype"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Experience year</label>
                                            <Input
                                                type="number"
                                                name="expYear"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Salary</label>
                                            <Input
                                                type="number"
                                                name="salary"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Birthday</label><br />
                                            <DatePicker
                                                selected={this.state.birthday}
                                                onChange={this.handleChangeBirthday}
                                                className="form-control" />
                                            {msgBirthday}
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <label className="control-label">Date in</label><br />
                                                <DatePicker
                                                    selected={this.state.dateIn}
                                                    onChange={this.handleChangeDateIn}
                                                    className="form-control" />
                                                {msgDateIn}
                                            </div>
                                        </div>
                                        <Skills
                                            options={this.state.options}
                                            getData={this.getData.bind(this)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div
                                        className="margin-top-20"
                                        style={{
                                            textAlign: 'center'
                                        }}>
                                        <button
                                            type="submit"
                                            className="btn green"
                                        >
                                            ADD
                                    </button>
                                        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                    </div>
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddForm;