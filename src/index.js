import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import App from './app';

import store from '@/reducer/index';

const path = require ('path');
const PROJECT_PATH = path.join(__dirname, '../');
const SOURCE_PATH = path.join(PROJECT_PATH, './src')
console.log(SOURCE_PATH)

if (process.env.NODE_ENV == "development") {
    // console.log(process.env.NODE_ENV)
    require('./mock');
}
  
ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)