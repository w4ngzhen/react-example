import React from 'react';
import ReactDOM from 'react-dom';

// 使用min引入：https://github.com/ant-design/ant-design/issues/33327
import 'antd/dist/antd.min.css';

import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {RootStore, RootStoreContext} from "./stores";

const rootStore = new RootStore();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <RootStoreContext.Provider value={rootStore}>
                <App/>
            </RootStoreContext.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
