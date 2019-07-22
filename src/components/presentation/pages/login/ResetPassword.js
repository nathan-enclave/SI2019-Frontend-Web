import React, { Component } from 'react'
import { Link } from "react-router-dom";
import resetPassword from '../../../container/login/ResetPass';
import { Redirect } from 'react-router-dom'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {isEmpty,equals } from 'validator';
import CheckButton from 'react-validation/build/button';

let pass = ""

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }    
  }
const repassword = (value) =>{
    if(!equals(value,pass)){
        return <small className="form-text text-danger">Passwords do not match.</small>;
    }
}
export default class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            repassword : "",
            verify : "",
        }
    }
    handleChange = (e) => {
        this.setState({
            verify : e.target.value          
        })
    }
    handleChangePass = (e) =>{
        this.setState({
           password : e.target.value          
        })
        pass = e.target.value 
    }
    checkCode = () => {
        let data = {
            verify : this.state.verify,
            password : this.state.password
        }
        console.log(data)
        resetPassword(this.props.id,data).then((result) => {            
            console.log(result.status)
            if(result.status === 409){               
            this.setState({              
                msg :  "Verification code is incorrect!"
            })            
            }
            else if(result.status === 200){
               this.setState({
                   redirect : true
               })
            }
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={{
            pathname: '/resetSuccess',
            state: {email :this.props.email}
        }}
        />
        }
      }
    cancelCourse = () => {
        document.getElementById("create-course-form").reset();
    }
    onSubmit(e){
        e.preventDefault();
        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            this.checkCode()                   
         }
    }
    render() {
        let notify = this.state.msg ==="Verification code is incorrect!"?<span className="alert alert-danger">{this.state.msg}</span>: null
        return (
            <div style={{ width: "400px", backgroundColor: "white", padding: "20px", borderRadius: "10px", margin: "50px auto" }}>
                {this.renderRedirect()}
                <div>
                    <h3 className="font-green">Forgot Password ?</h3>< br />
                    {notify}
                    <p> Enter your new password. </p>
                    <div className="form-group">
                        <input type="text" value={this.props.email} autoComplete="off" disabled className="form-control placeholder-no-fix" /> </div>
                    <Form  onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }} id="create-course-form">                  
                        <div className="form-group">
                            <Input type="password"  validations={[required]} onChange={(e) => this.handleChangePass(e)} name="password" autoComplete="off" placeholder="New password" className="form-control placeholder-no-fix" /> </div>
                        <div className="form-group">
                            <Input type="password"  validations={[required,repassword]} name="confirm password" autoComplete="off" placeholder="Confirm new password" className="form-control placeholder-no-fix" /> </div>
                            {/* {this.displayMsg()} */}
                        <div className="form-group" style={{ width: "40%" }}>                            
                            <Input type="text"  validations={[required]}  onChange={(e) => this.handleChange(e)} name="verify" autoComplete="off" placeholder="Verification code" className="form-control placeholder-no-fix" /> </div>
                        <div className="form-actions">
                            <input type="button" onClick={this.cancelCourse} className="btn green btn-outline" value="RESET" />
                            <button type="submit" className="btn btn-success uppercase pull-right">Submit</button>
                            <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
