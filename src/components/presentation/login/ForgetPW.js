import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ForgetPW extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handlerEmail = (e) => {
        this.setState({ email: e.target.value })
        console.log(this.state.email)
    }
    checkEmail = () => {
    }
    render() {
        return (
            <div style={{ width: "400px", backgroundColor: "white", padding: "20px", borderRadius: "10px", margin: "50px auto" }}>
                <form className="forget-form">
                    <h3 className="font-green">Forgot Password ?</h3>
                    <p> Enter your e-mail address below to reset your password. </p>
                    <div className="form-group">
                        <input type="text" onChange={(e) => this.handlerEmail(e)} name="email" autoComplete="off" placeholder="Email" className="form-control placeholder-no-fix" /> </div>
                    <div className="form-actions">
                        <Link to="/login" id="back-btn" className="btn green btn-outline">Back</Link>
                        <Link to="/resetPassword" type="submit" onClick={this.checkEmail} className="btn btn-success uppercase pull-right">Submit</Link>
                    </div>
                </form>
            </div>
        )
    }
}