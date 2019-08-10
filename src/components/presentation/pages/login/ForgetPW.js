import React, { Component } from 'react'
import {Link} from  "react-router-dom";
import checkManagerEmail from '../../../container/login/CheckManagerEmail';
// import { Redirect } from 'react-router-dom'
import ResetPassword from './ResetPassword';
import sendCode from '../../../container/login/SendCode';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail, isEmpty } from 'validator';
import CheckButton from 'react-validation/build/button';
import './login.css'

const required = (value) => {
    if (isEmpty(value)) {
        return( <div className="small-validate">This field is required</div>)
    }
  }
const email = (value) => {
    if (!isEmail(value)) {
        return( <div className="small-validate">Invalid email format</div>)
    }
  }
export default class ForgetPW extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg : "",
            director : null,
            // url : "/forgotPassword",
            redirect : false
        }
    }
    handlerEmail = (e) =>{
        this.setState({email : {email : e.target.value}})
    }
    checkEmail = ()=>{        
       checkManagerEmail(this.state.email).then((result)=>{
            if(result.statusCode === 403  ){
                this.setState({msg : "Forbidden Email.",redirect: false})
            }
            else if(result.statusCode === 404 ){
                this.setState({msg : "Email Not Found in System.",redirect: false})
            }
            else if(result.statusCode === 400){
                this.setState({msg : "Check your Email, Please.",redirect: false})
            }
            else {                
                sendCode(this.state.email).then((result2) =>{
                        this.setState({director : result,redirect : true})
                })
            }
        })
    }
    displayError = ()=>{
        if(this.state.msg !== ""){
            return (<div className="alert alert-danger resize-text">
            <span >{this.state.msg}</span>
        </div>)
        }
    }

    onSubmit(e){
        e.preventDefault();
        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            this.checkEmail()                   
         }
    }
    render() {
        if(this.state.redirect){
            return (<ResetPassword email ={this.state.director.email} id = {this.state.director.id}/>)
        }       
        return (
            <div style ={{width : "500px",backgroundColor :"white",padding:"20px",borderRadius: "10px",margin:"50px auto"}}>
                 <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                    <h3 className="font-green">Forgot Password ?</h3>
                    <p> Enter your e-mail address below to reset your password. </p>  
                    {this.displayError()} 
                    <div className="form-group">
                        <Input   validations={[required, email]} type="text" onChange={(e) =>this.handlerEmail(e)} name="email"  autoComplete="off" placeholder="Email" className="form-control placeholder-no-fix"/> </div>
                    <div className="form-actions">
                        <Link to="/login" id="back-btn" className="btn green btn-outline">Back</Link>
                        <button  className="btn btn-success uppercase pull-right" type  ="submit">Submit</button>
                        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                    </div>
                </Form>
            </div>
        )
    }
}
