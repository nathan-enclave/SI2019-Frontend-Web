import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/presentation/layout/App';
import { initializeFirebase, askForPermissioToReceiveNotifications } from "../src/service/firebase";
ReactDOM.render(<App />, document.getElementById('root'));
initializeFirebase()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

if(!localStorage.getItem('notification-token')){
    askForPermissioToReceiveNotifications()
}