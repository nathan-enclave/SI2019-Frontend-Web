import React, { Component } from 'react'
import {Link} from  "react-router-dom";
import checkManagerEmail from '../../../container/login/CheckManagerEmail';
// import { Redirect } from 'react-router-dom'
import ResetPassword from './ResetPassword';
import sendCode from '../../../container/login/SendCode';

export default class ForgetPW extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg : "",
            director : null,
            url : "/forgotPassword",
            redirect : false
        }
    }
    handlerEmail = (e) =>{
        this.setState({email : {email : e.target.value}})
    }
    checkEmail = ()=>{
       checkManagerEmail(this.state.email).then((result)=>{
           console.log(result  )
            if(result.statusCode === 404  ){
                this.setState({msg : "This is not a director email.",redirect: false})
            }
            else {                
                sendCode(this.state.email).then((result2) =>{
                    // if(result === "sended"){
                        this.setState({director : result,redirect : true})
                    // }
                })
            }
        })
    }
    displayError = ()=>{
        if(this.state.msg !== ""){
            return (<div className="alert alert-danger">
            <span >{this.state.msg}</span>
        </div>)
        }
    }
    render() {
        console.log(this.state.director)
        if(this.state.redirect){
            // return(<div><Redirect to  = "/resetPassword"/> </div>  )
            return (<ResetPassword email ={this.state.director.email} id = {this.state.director.id}/>)
        }       
        return (
            <div style ={{width : "500px",backgroundColor :"white",padding:"20px",borderRadius: "10px",margin:"50px auto"}}>
                <form className="forget-form">
                    <h3 className="font-green">Forgot Password ?</h3>
                    <p> Enter your e-mail address below to reset your password. </p>  
                    {this.displayError()} 
                    <div className="form-group">
                        <input  type="text" onChange={(e) =>this.handlerEmail(e)} name="email" autoComplete="off" placeholder="Email" className="form-control placeholder-no-fix"/> </div>
                    <div className="form-actions">
                        <Link to="/login" id="back-btn" className="btn green btn-outline">Back</Link>
                        <Link to={this.state.url} type="submit" onClick= {this.checkEmail} className="btn btn-success uppercase pull-right">Submit</Link>
                    </div>
                </form>
            </div>
        )
    }
}