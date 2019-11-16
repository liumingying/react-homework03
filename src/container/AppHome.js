import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel,Flex,WhiteSpace } from 'antd-mobile';
import home1 from './imgs/images/home1.jpg';
import home2 from './imgs/images/home2.jpg';
import home3 from './imgs/images/home3.jpg';
import home4 from './imgs/images/home4.jpg';
import home5 from './imgs/images/home5.jpg';

const tabs2 = [
    { title: '首页' },
    { title: '灵感'},
    { title: '商城' },
    { title: '我的' },
  ];
export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['./img/images/home2','./img/images/pic2'],
          });
        }, 100);
      }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0"  style={{ color:'#000', marginRight: '16px' }} />,
                    ]}
                    >首页</NavBar>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                // src={`${val}.jpg`}
                                src={home2}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                    <div>
                        <p></p>
                        <Flex>
                            <Flex.Item><img src={home3} style={{width:'100%',height:'100%'}}/></Flex.Item>
                            <Flex.Item><img src={home4} style={{width:'100%',height:'100%'}}/></Flex.Item>
                            <Flex.Item><img src={home1} style={{width:'100%',height:'100%'}}/></Flex.Item>
                        </Flex>
                        
                        
                        <div  style={{paddingTop:'10px'}}><h2>热门推荐</h2></div>
                        <img src={home5} style={{width:'100%',height:'100%',paddingTop:'10px'}}/>
                    </div>
                    
            </div>
        )
    }
}
// ReactDOM.render(<AppHome/>, mountNode);