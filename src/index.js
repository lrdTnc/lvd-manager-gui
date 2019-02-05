import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
