import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/presentation/layout/App';
import { initializeFirebase, askForPermissioToReceiveNotifications, handleRealTimeMessage } from "../src/service/firebase";
ReactDOM.render(<App />, document.getElementById('root'));
initializeFirebase()
serviceWorker.register();

askForPermissioToReceiveNotifications()
handleRealTimeMessage()