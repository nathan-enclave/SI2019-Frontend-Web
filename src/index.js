import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/presentation/layout/App';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
