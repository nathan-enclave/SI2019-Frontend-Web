import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import PostData from '../login/PostData'
export default class LoginFunc extends Component {

    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            redirect: false
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    login() {
        const {username, password} = this.state
        if(this.state.username && this.state.password){
            PostData('login', {username, password}).then ((result) => {
                console.log(result);
                if(!result.statusCode && result.token) {
                    sessionStorage.setItem('userData', result);
                    this.setState({
                        redirect: true
                    })
                }else {
                    console.log("error");
                    
                }
                // let responseJSON = result;
                // if(responseJSON.userData){
                //     sessionStorage.setItem('userData', responseJSON)
                //     this.setState({redirect:true})
                // }else{
                //     console.log("Error.")
                // }
            })
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    redirect = ()=>{
        window.location = '/home' ;
    }
    
    render() {
        if(this.state.redirect){
            return(<div>{this.redirect()}</div>);            
        }        
        return (
            <div className="login">
                <div className="logo">
                    <a href="/login">
                        <img src="https://cdn.itviec.com/employers/enclave/logo/w170/Jh9Wg4u5AojsvtWicfNPjVge/enclave-logo.png" alt="" /> </a>
                </div>
                <div className="content">
                    <div className="login-form">
                        <h3 className="form-title font-green">Sign In</h3>
                        <div className="alert alert-danger display-hide">
                            <button className="close" data-close="alert"  />
                            <span> Enter any username and password. </span>
                        </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9" >Username</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" onChange={this.onChange}/> </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9" >Password</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" onChange={this.onChange}/> </div>
                        <div className="form-actions">
                            <button type="submit" className="btn green uppercase" onClick={this.login}>Login</button>
                            <label className="rememberme check mt-checkbox mt-checkbox-outline">
                                <input type="checkbox" name="remember" defaultValue={1} />Remember
                                <span />
                            </label>
                            <NavLink to="/forgetpw" id="forget-password" className="forget-password">Forgot Password?</NavLink>
                        </div>
                        <div className="login-options">
                            <h4>Or login with</h4>
                            <ul className="social-icons">
                                <li>
                                    <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;" />
                                </li>
                                <li>
                                    <a className="social-icon-color twitter" data-original-title="Twitter" href="javascript:;" />
                                </li>
                                <li>
                                    <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;" />
                                </li>
                                <li>
                                    <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;" />
                                </li>
                            </ul>
                        </div>
                        <div className="create-account">
                            <p>
                                <a href="/signup" id="register-btn" className="uppercase">Create an account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
