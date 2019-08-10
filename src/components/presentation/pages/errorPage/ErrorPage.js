import React, { Component } from 'react';
import './errorPage.css'

export default class ErrorPage extends Component {
    render() { 
        return (
            <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>{this.props.errorCode}</h2>
               <div>
               {typeof(this.props.description)==="undefined"?null:(
                    <code >{this.props.description}</code>
                )}
               </div>
                <a style={{margin:"20px"}} href="/home">Go To Homepage</a>
            </div>
        </div>
        );
    }
}

