import React, { Component } from 'react'
import PostData from '../../container/login/PostData'
import { isEmpty } from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import LoginLoader from '../../presentation/include/LoginLoader'
import { Link } from "react-router-dom";

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

const minLength = (value) => {
    if (value.trim().length < 5) {
        return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
    }
}
export default class LoginFunc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false,
            error: false,
            loginLoader: false
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(e) {
        e.preventDefault();
        this.form.validateAll();
    }

    checkError() {
        if (this.state.error) {
            if (this.state.loginLoader) {
                this.setState({
                    loginLoader: false
                })
            }
            return (
                <div class="alert alert-danger">
                    <strong>Error!</strong> Username or Password is not correct.
                </div>
            )
        }
    }
    login() {
        const { username, password } = this.state
        this.setState({
            loginLoader: true
        })
        if (this.state.username && this.state.password) {
            PostData('login', { username, password }).then((result) => {
                if (!result.token) {
                    this.setState({
                        error: true
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
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    redirect() {
        window.location = "/home";
    }

    render() {
        if (this.state.redirect) {
            return (<div>{this.redirect()} </div>)
        }
        if (localStorage.getItem('userData')) {
            return (<div>{this.redirect()} </div>)
        }
        const loader = this.state.loginLoader ? <LoginLoader /> : null
        return (
            <div className="login" >
                <div className="content">
                    {/* BEGIN LOGIN FORM */}
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
                            {this.checkError()}
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
                                <button type="submit" className="btn green uppercase" onClick={() => this.login()}>Login</button>
                                <div className="padding-tb-15">
                                    {loader}
                                </div>
                                <Link to="/forgotPassword" id="forget-password" className="forget-password">Forgot Password?</Link>
                            </div>
                        </Form>
                    </div>
                    {/* END LOGIN FORM */}
                </div>
            </div>
        )
    }
}