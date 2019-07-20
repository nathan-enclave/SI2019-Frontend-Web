import React, { Component } from 'react'
import { Link } from "react-router-dom";
import resetPassword from '../../../container/login/ResetPass';
import { Redirect } from 'react-router-dom'


export default class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        this.setState({
            [field] : value          
        })
    }
    checkCode = () => {
        let data = {
            verify : this.state.verify,
            password : this.state.password
        }
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
                    <form id="create-course-form">                  
                        <div className="form-group">
                            <input type="password" onChange={(e) => this.handleChange(e)} name="password" autoComplete="off" placeholder="New password" className="form-control placeholder-no-fix" /> </div>
                        <div className="form-group">
                            <input type="password" name="repassword" autoComplete="off" placeholder="Confirm new password" className="form-control placeholder-no-fix" /> </div>
                            {/* {this.displayMsg()} */}
                        <div className="form-group" style={{ width: "40%" }}>                            
                            <input type="text" onChange={(e) => this.handleChange(e)} name="verify" autoComplete="off" placeholder="Verification code" className="form-control placeholder-no-fix" /> </div>
                        <div className="form-actions">
                            <input type="button" onClick={this.cancelCourse} className="btn green btn-outline" value="RESET" />
                            <a type="submit" onClick={this.checkCode} className="btn btn-success uppercase pull-right">Submit</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
