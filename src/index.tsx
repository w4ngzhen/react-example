import React from 'react';
import ReactDOM from 'react-dom';

// 使用min引入：https://github.com/ant-design/ant-design/issues/33327
import 'antd/dist/antd.min.css';

import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
