import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import my from './imgs/images/my.jpg';
export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'white', marginRight: '16px' }} />,
                    ]}
                    >我的</NavBar>
                <img src={my} style={{width:'100%',height:'100%'}}/>
            </div>
        )
    }
}