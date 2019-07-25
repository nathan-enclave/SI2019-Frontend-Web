import React, { Component } from 'react'
import {Link} from  "react-router-dom";

export default class ResetSuccess extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }   
    render() {       
        return (
            <div style ={{width : "500px",backgroundColor :"white",padding:"20px",borderRadius: "10px",margin:"50px auto"}}>
                <form className="forget-form">
                    <h3 className="font-green">Reset Password successful.</h3>
                    <div className="form-group">
                        <input  type="text" value ={this.props.location.state.email} autoComplete="off" disabled className="form-control placeholder-no-fix"/> </div>
                    <p> Your password have been reset, now you can login with the new password. </p>                   
                    <div className="form-actions">
                    <Link to="/forgotPassword" id="back-btn" className="btn green btn-outline" hidden>Back</Link>
                    <Link to="/login" type="submit" className="btn btn-success uppercase pull-right">Login</Link>
                    </div>
                </form>
            </div>
        )
    }
}
