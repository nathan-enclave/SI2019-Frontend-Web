import React, { Component } from 'react'
import {Link} from  "react-router-dom";

export default class ResetPassword extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
       
        return (
            <div style ={{width : "400px",backgroundColor :"white",padding:"20px",borderRadius: "10px",margin:"50px auto"}}>
                <form className="forget-form">
                    <h3 className="font-green">Forgot Password ?</h3>                    
                    <p> Enter your new password. </p>
                    <div className="form-group">
                        <input  type="text" value ="demo@gmail.com" autoComplete="off" disabled className="form-control placeholder-no-fix"/> </div>
                    <div className="form-group">
                        <input  type="password" name="password" autoComplete="off" placeholder="New password" className="form-control placeholder-no-fix"/> </div>
                        <div className="form-group">
                        <input  type="password"  name="repassword" autoComplete="off" placeholder="Confirm new password" className="form-control placeholder-no-fix"/> </div>
                        <div className="form-group" style ={{width : "40%"}}>
                        <input  type="text"  name="verify" autoComplete="off" placeholder="Verification code" className="form-control placeholder-no-fix"/> </div>
                    <div className="form-actions">
                        <Link to="/forgotPassword" id="back-btn" className="btn green btn-outline">Back</Link>
                        <Link to="/resetSuccess" type="submit" onClick= {this.checkEmail} className="btn btn-success uppercase pull-right">Submit</Link>
                    </div>
                </form>
            </div>
        )
    }
}
