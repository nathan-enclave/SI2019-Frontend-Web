import React, {Component} from 'react'
import {isEmpty} from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import LoginLoader from '../../include/LoginLoader'
import {Link} from "react-router-dom";
import AuthContainer from "../../../container/auth";
import CheckButton from 'react-validation/build/button';
import './login.css'
const required = (value) => {
    if (isEmpty(value)) {
        return <div className="small-validate">This field is required</div>;
    }
}
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false,
            error: false,
            loginLoader: false
        }
        this.login = this
            .login
            .bind(this)
        this.onChange = this
            .onChange
            .bind(this)
    }

    onSubmit(e) {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            this.login()
        }
    }
    login() {
        const {username, password} = this.state
        this.setState({loginLoader: true})
            AuthContainer
                .login({username, password})
                .then((result) => {
                    console.log(result)
                    if (!result.token) {
                        this.setState({error: true, loginLoader: false})
                    } else {
                        localStorage.setItem('sessionToken', JSON.stringify({token: result.token}))
                        localStorage.setItem('userData', JSON.stringify({
                            username: result.username,
                            id: result.engineerId,
                            firstName: result.firstName,
                            lastName: result.lastName,
                            englishName: result.englishName,
                            role: result.scope
                        }))

                        this.setState({redirect: true})
                    }
                }).catch(err =>{
                    this.setState({error: true, loginLoader: false})
                })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    redirect() {
        window.location = "/home";
    }
    display() {
        return this.state.loginLoader ? <LoginLoader /> : (<button type="submit" className="btn green uppercase" >Login</button>)
    }

    render() {
        console.log(this.state.error);
        
        if (this.state.redirect) {
            return (
                <div>{this.redirect()}
                </div>
            )
        }
        if (localStorage.getItem('sessionToken')) {
            return (
                <div>{this.redirect()}
                </div>
            )
        }
        let error = (this.state.error) ? (<div className="alert alert-danger resize-text">
        <strong>Error!</strong> Username or Password is incorrect.</div>) : null        
        return (
            <div className="login">
                <div className="content">
                    {/* BEGIN LOGIN FORM */}
                    <div className="logo">
                        <a href="/login">
                            <img
                                src="https://cdn.itviec.com/employers/enclave/logo/w170/Jh9Wg4u5AojsvtWicfNPjVge/enclave-logo.png"
                                alt=""/>
                        </a>
                    </div>
                    <div className="login-form">
                        <h3 className="form-title font-green">Sign In</h3>
                        <div className="alert alert-danger display-hide">
                            <button className="close" data-close="alert"/>
                            <span>
                                Enter any username and password.
                            </span>
                        </div>
                        <Form
                            onSubmit={e => this.onSubmit(e)}
                            ref={c => {
                            this.form = c
                        }}>            
                         {error}               
                            <div className="form-group">
                                <label className="control-label visible-ie8 visible-ie9">Username</label>
                                <Input
                                    className="form-control form-control-solid placeholder-no-fix"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Username"
                                    name="username"
                                    onChange={this.onChange}
                                    validations={[required]}/>
                            </div>
                            <div className="form-group">
                                <label className="control-label visible-ie8 visible-ie9">Password</label>
                                <Input
                                    className="form-control form-control-solid placeholder-no-fix"
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.onChange}
                                    validations={[required]}/>
                            </div>
                            <div
                                className="form-actions"
                                style={{
                                textAlign: "center",
                                border: "none"
                            }}>
                                <div className="padding-tb-15">
                                {this.display()}
                                </div>
                                <Link to="/forgotPassword" id="forget-password" className="forget-password">Forgot Password?</Link>
                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                            </div>
                        </Form>
                    </div>
                    {/* END LOGIN FORM */}
                </div>
            </div>
        )
    }
}