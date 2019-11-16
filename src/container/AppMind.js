import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel } from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';
import mind1 from './imgs/images/mind1.jpg';
import mind2 from './imgs/images/mind2.jpg';
import mind3 from './imgs/images/mind3.jpg';
import mind4 from './imgs/images/mind4.jpg';
const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
  ];
export default class AppMind extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'white', marginRight: '16px' }} />,
                    ]}>
                    灵感
                </NavBar>
                <Tabs tabs={tabs2}
                initialPage={1}
                tabBarUnderlineStyle={{border:'2px solid #3fcccb'}}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div style={{padding: '30px 0 18px 20px'}}>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <img src={mind3} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind4} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <p></p>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    
                </div>
                <div style={{padding: '30px 0 18px 20px'}}>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <img src={mind3} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind4} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <p></p>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    
                </div>
                <div style={{padding: '30px 0 18px 20px'}}>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <img src={mind3} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind4} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <p></p>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    
                </div>
                <div style={{padding: '30px 0 18px 20px'}}>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <img src={mind3} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind4} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <p></p>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    
                </div>
                <div style={{padding: '30px 0 18px 20px'}}>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <img src={mind3} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind4} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <p></p>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    
                </div>
                <div style={{padding: '30px 0 18px 20px'}}>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <img src={mind3} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind4} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    <p></p>
                    <Flex>
                        <Flex.Item>
                            <img src={mind1} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={mind2} style={{width:'100%',height:'100%'}}/>
                        </Flex.Item>
                    </Flex>
                    
                </div>
                </Tabs>
            </div>
        )
    }
}