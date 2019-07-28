import React, { Component } from 'react'
import PostData from '../../container/login/PostData'
import { isEmpty } from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import LoginLoader from '../../presentation/include/LoginLoader'
import { Link } from "react-router-dom";
import CheckButton from 'react-validation/build/button';

const required = (value) => {
    if (isEmpty(value)) {
        return <div className="alert alert-danger">This field is required</div>;
    }
}
const minLength = (value) => {
    if (value.trim().length < 5) {
        return <div className="alert alert-danger">assword must be at least 6 characters long</div>;
    }
}
export default class LoginFunc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            error: null,
            loginLoader: false
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onSubmit(e) {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            this.login()
        }
    }
    login() {
        this.setState({
            loginLoader: true
        })
        PostData('login', { username: this.state.username, password: this.state.password }).then((result) => {
            if (!result.token) {
                this.setState({
                    error: true,
                    loginLoader: false
                })
            } else {
                localStorage.setItem('userData', JSON.stringify({
                    name: result.username,
                    id: result.engineerId,
                    token: result.token
                }))
                this.setState({
                    redirect: true
                })
            }
        })
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    redirect() {
        window.location = "/home";
    }
    display() {
        return this.state.loginLoader ? <LoginLoader /> : (<button type="submit" className="btn green uppercase" >Login</button>)
    }
    render() {
        if (this.state.redirect) {
            return (<div>{this.redirect()} </div>)
        }
        if (localStorage.getItem('userData')) {
            return (<div>{this.redirect()} </div>)
        }
        let error = (this.state.error) ? (<div className="alert alert-danger">
            <strong>Error!</strong> Username or Password is not correct.</div>) : null
        return (

            <div className="login" >
                <div className="content">
                    <div className="logo">
                        <a href="/login">
                            <img src="https://cdn.itviec.com/employers/enclave/logo/w170/Jh9Wg4u5AojsvtWicfNPjVge/enclave-logo.png" alt="" /> </a>
                    </div>
                    <div className="login-form">
                        <h3 className="form-title font-green">Sign In</h3>
                        <div className="alert alert-danger display-hide">
                            <button className="close" data-close="alert" />
                            <span> Enter any username and password. </span>
                        </div>
                        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                            {error}
                            <div className="form-group" >
                                <label className="control-label visible-ie8 visible-ie9" >Username</label>
                                <Input className="form-control form-control-solid placeholder-no-fix"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Username"
                                    name="username"
                                    onChange={this.onChange}
                                    validations={[required]} />
                            </div>
                            <div className="form-group">
                                <label className="control-label visible-ie8 visible-ie9" >Password</label>
                                <Input className="form-control form-control-solid placeholder-no-fix"
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.onChange}
                                    validations={[required, minLength]} />
                            </div>
                            <div className="form-actions" style={{ textAlign: "center", border: "none" }}>
                                {/* <button type="submit" className="btn green uppercase" >Login</button> */}
                                <div className="padding-tb-15">
                                    {this.display()}
                                </div>
                                <Link to="/forgotPassword" id="forget-password" className="forget-password">Forgot Password?</Link>
                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}