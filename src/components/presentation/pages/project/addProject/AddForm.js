import React, { Component } from 'react';
import Select from 'react-select';
import ProjectContainer from '../../../../container/project'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import CheckButton from 'react-validation/build/button';
import { isEmpty } from 'validator';
import "react-datepicker/dist/react-datepicker.css";
import LocationContainer from "../../../../container/location"
import DatePicker from "react-datepicker";
import getTotalCategories from '../../../../container/categories/GetListCategories';
import "./validate.css"
import { ClipLoader } from 'react-spinners';
const required = (value) => {
    if (isEmpty(value)) {
        return (<div className="small-validate">
            This field is required!
    </div>);
    }
}
class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationOptions : [],
            selectedLocation: [],
            isOpenMSGSuccess: false,
            start: "",
            end: "",
            options: [],
            selectOptions: [],
            categoryId: null,
            locationId : null,
            msgStart: null,
            msgEnd: null,
            msgCat: null,
            msgLocation: null,
            addLoading : false
        };
    }
    isChange = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        this.setState({ [fieldName]: value });
    }
    submitAddForm = async () => {
        this.setState({
            addLoading : true
        })
        let data = {
            name: this.state.name,
            technology: this.state.technology,
            description: this.state.description,
            earning: this.state.earning,
            earningPerMonth: this.state.earningPerMonth,
            start: this.state.start,
            end: this.state.end,
            categoryId: Number(this.state.categoryId),
            locationId : Number(this.state.locationId)
        }
        console.log(data)
        ProjectContainer.add(data).then((result) => {
            if (!result.statusCode) {
                this.props.openMessage()
            } else {
                if (result.statusCode !== 200) {
                    this.setState({ msg: 'Some error occured, please try again later ',addLoading : false });
                }
            }
        }).catch(e=>{
            this.setState({ msg: 'Some error occured, please try again later ',addLoading : false });
        })
    }
    handleChangeStart = (date) => {
        this.setState({
            start: date,
            msgStart: null
        });
    }
    handleChangeEnd = (date) => {
        this.setState({
            end: date,
            msgEnd: null
        });
    }
    handleChangeLocation = (selectedLocation) => {
        this.setState({ selectedLocation });
        let temp = 0
        if (selectedLocation != null) {
            temp = selectedLocation.value
            this.setState({
                locationId: temp,
                msgLocation: null
            });
        }
    }
    handleChange = (selectOptions) => {
        this.setState({ selectOptions });
        let temp = 0
        if (selectOptions != null) {
            temp = selectOptions.value
            this.setState({
                categoryId: temp,
                msgCat: null
            });
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0 && this.state.start !== "" && this.state.end !== "" && this.state.categoryId !== null && this.state.locationId!==null) {
            this.submitAddForm()
        }
        else {
            if (this.state.start === "") this.setState({ msgStart: "This field is required!" })
            if (this.state.end === "") this.setState({ msgEnd: "This field is required!" })
            if (this.state.categoryId === null) this.setState({ msgCat: "This field is required!" })
            if (this.state.locationId === null) this.setState({ msgLocation: "This field is required!" })
        }
    }
    async componentDidMount() {
        const res = await getTotalCategories();
        const location = await LocationContainer.getLocation();
        let temp = []
        location.results.forEach(element => {
            temp.push({value : element.id,label: element.city + ", " + element.country})
        });
        this.setState({ options: res,locationOptions : temp });
    }
    displayLoading= ()=>{ 
        return this.state.addLoading? (
                <div className='sweet-loading d-flex justify-center margin-top-md'>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={30}
                        color={'#123abc'}
                        loading={true}/>
                </div>
            ):(
                <button type="submit" className="btn green">ADD</button>
            )
    }
    render() {
        let msgStart = this.state.msgStart === null ? null : (<div className="small-validate">This field is required!</div>)
        let msgEnd = this.state.msgEnd === null ? null : (<div className="small-validate">This field is required!</div>)
        let msgCat = this.state.msgCat === null ? null : (<div className="small-validate">This field is required!</div>)
        let msgLocation = this.state.msgLocation === null ? null : (<div className="small-validate">This field is required!</div>)
        return (
            <div className="portlet light bordered">
                <div className="portlet-title tabbable-line">
                    <div className="caption caption-md">
                        <i className="icon-globe theme-font hide" />
                        <span className="caption-subject font-blue-madison bold uppercase">Add Project
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
                                            <label className="control-label">Project Name</label>
                                            <Input
                                                type="text"
                                                name="name"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Technology</label>
                                            <Input
                                                type="text"
                                                name="technology"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Description</label>
                                            <Textarea
                                                style={{height : "100px"}}
                                                type="text"
                                                name="description"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Earning</label>
                                            <Input
                                                type="number"
                                                name="earning"
                                                onChange={(event) => this.isChange(event)}
                                                validations={[required]}
                                                className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Start</label><br />
                                            <DatePicker
                                                selected={this.state.start}
                                                onChange={this.handleChangeStart}
                                                className="form-control" />
                                            {msgStart}
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <label className="control-label">End</label><br />
                                                <DatePicker
                                                    selected={this.state.end}
                                                    onChange={this.handleChangeEnd}
                                                    className="form-control" />
                                                {msgEnd}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    Location:
                                                </label>
                                                <Select
                                                    value={this.state.selectedLocation}
                                                    options={this.state.locationOptions}
                                                    onChange={this.handleChangeLocation} />
                                                {msgLocation}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    Categories:
                                                </label>
                                                <Select
                                                    value={this.state.selectOptions}
                                                    options={this.state.options}
                                                    onChange={this.handleChange} />
                                                {msgCat}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div
                                        className="margin-top-20"
                                        style={{
                                            textAlign: 'center'
                                        }}>
                                        {this.displayLoading()}
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