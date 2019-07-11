import React, { Component } from 'react'
import PostData from '../login/PostData'
import {  isEmpty } from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
 

const required = (value) => {
  if (isEmpty(value)) {
      return <small className="form-text text-danger">This field is required</small>;
  }
}

const minLength = (value) => {
  if (value.trim().length < 5 ) {
      return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
  }
}
export default class LoginFunc extends Component {

    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            redirect: false,
            error : true
            
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(e){
        e.preventDefault();
        this.form.validateAll();
    }

    checkError(){
        if(!this.state.error)
        return(<big style={{ fontWeight: 'bold',backgroundColor: '#F2F200',fontSize: "17px"}} className="form-title font-red" > Username or password is incorrect!</big>)
    }

    login() {
        const {username, password} = this.state
        if(this.state.username && this.state.password){
            PostData('login', {username, password}).then ((result) => {
                console.log(result);
                if(!result.statusCode && result.token) {
                    localStorage.setItem('userData', result.username)                    
                    this.setState({
                        redirect: true
                    })
                }else {
                    this.setState({
                        error: false
                    })
                }
            })
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    redirect() {
        window.location="/home";
    }
    
    render() {
        if(this.state.redirect){
            return(<div>{this.redirect()} </div>  )
        }
        if(localStorage.getItem('userData')){
            return(<div>{this.redirect()} </div>  )
        }
        return (
            <div className="login" >
                {/* BEGIN LOGO */}
                
                {/* END LOGO */}
                {/* BEGIN LOGIN */}
                <div className="content" style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
                    {/* BEGIN LOGIN FORM */}
                    <div className="logo">
                    <a href="/login">
                        <img src="https://cdn.itviec.com/employers/enclave/logo/w170/Jh9Wg4u5AojsvtWicfNPjVge/enclave-logo.png" alt="" /> </a>
                </div>
                    <div className="login-form">
                        <h3 className="form-title font-green">Sign In</h3>
                        <div className="alert alert-danger display-hide">
                            <button className="close" data-close="alert"  />
                            <span> Enter any username and password. </span>
                        </div>
                        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                            {this.checkError()}

                            <div className="form-group" >
                                {/*ie8, ie9 does not support html5 placeholder, so we just show field title for that*/}
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
                                    validations={[required, minLength]}/> 
                            </div>
                            <div className="form-actions" style={{textAlign: "center"}}>
                                <button type="submit" className="btn green uppercase" onClick={this.login}>Login</button>
                                {/* <label className="rememberme check mt-checkbox mt-checkbox-outline">
                                    <input type="checkbox" name="remember" defaultValue={1} />Remember
                                    <span />
                                </label>
                                <NavLink to="" id="forget-password" className="forget-password">Forgot Password?</NavLink> */}
                            </div>
                        </Form>
                        {/* <div className="login-options">
                            <h4>Or login with</h4>
                            <ul className="social-icons">
                                <li>
                                    <a className="social-icon-color facebook" data-original-title="facebook" href="abc" />
                                </li>
                                <li>
                                    <a className="social-icon-color twitter" data-original-title="Twitter" href="abc" />
                                </li>
                                <li>
                                    <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="abc" />
                                </li>
                                <li>
                                    <a className="social-icon-color linkedin" data-original-title="Linkedin" href="abc" />
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className="create-account">
                            <p>
                                <a href="/signup" id="register-btn" className="uppercase">Create an account</a>
                            </p>
                        </div> */}
                    </div>
                    {/* END LOGIN FORM */}
                </div>
            </div>
        )
    }
}
