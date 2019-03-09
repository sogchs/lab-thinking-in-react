import React from 'react';
import ReactDOM from 'react-dom';
import boostrap from 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import * as registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root'));

