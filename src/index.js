import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';//全局引入Css文件
// or 'antd-mobile/dist/antd-mobile.less'import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)