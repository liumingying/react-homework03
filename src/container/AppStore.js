import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel,Flex,WingBlank } from 'antd-mobile';
import'./iconfont.css';
import shop2 from './imgs/images/shop2.jpg';
import shop3 from './imgs/images/shop3.jpg';
import shop4 from './imgs/images/shop4.jpg';
import shop5 from './imgs/images/shop5.jpg';
import shop6 from './imgs/images/shop6.jpg';
import shop7 from './imgs/images/shop7.jpg';
import shop8 from './imgs/images/shop8.jpg';
import shop9 from './imgs/images/shop9.jpg';
import shop10 from './imgs/images/shop10.jpg';
import shop11 from './imgs/images/shop11.jpg';
import shop12 from './imgs/images/shop12.jpg';
import shop13 from './imgs/images/shop13.jpg';
import home2 from './imgs/images/home2.jpg';
import home5 from './imgs/images/home5.jpg';
import mirror from './imgs/images/mirror.png';
const tabs2 = [
    { title: '首页' },
    { title: '灵感'},
    { title: '商城' },
    { title: '我的' },
  ];
export default class AppStore extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render() {
        return (
            <div style={{backgroundColor:'#eeeeee',position:"relative"}}>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ color:'white', marginRight: '16px' }} />,
                        <image className="iconfont icon-gouwuchekong" style={{ color:'white', marginRight: '16px' }}/>
                    ]}
                    >商城
                </NavBar>
                <div style={{position:"absolute",zIndex:'2',top:'45px',left:'120px',opacity:'0.7'}}>
                    <a className="iconfont .icon-fangdajing" style={{}}></a>
                    <input  placeholder='  输入关键字搜索' style={{ width:'180px',height:'30px',borderRadius:'12px'}}/>
                </div>
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
                                src={home5}
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
                    {/* </div> */}
                    <p></p>
                    <div style={{fontSize:"16px",backgroundColor:'white'}}>
                        <Flex>
                            <Flex.Item>
                                <div style={{margin:'0 auto'}}>
                                    <img src={shop2} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;桌</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div>
                                    <img src={shop3} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;床</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div>
                                    <img src={shop4} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;椅</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div>
                                    <img src={shop5} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;几</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div>
                                    <img src={shop6} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;柜</p>
                                </div>
                            </Flex.Item>
                        </Flex>
                    </div>
                    <div style={{backgroundColor:'white'}}>
                        <Flex>
                            <Flex.Item>
                                <div style={{margin:'0 auto'}}>
                                    <img src={shop7} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;书架</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div>
                                    <img src={shop8} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;沙发</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div>
                                    <img src={shop9} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;家居饰品</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div>
                                    <img src={shop10} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;户外家具</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div>
                                    <img src={shop11} style={{width:'100%',height:'100%'}}/>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;全部分类</p>
                                </div>
                            </Flex.Item>
                        </Flex>
                    </div>
                    <p></p>
                    <div style={{padding: '30px 0 18px 20px',backgroundColor:'white'}}>
                        <WingBlank>
                        <Flex>
                            <Flex.Item>
                                <img src={shop12} style={{width:'100%',height:'100%'}}/>
                                <div style={{textAlign:"left",backgroundColor:'#eeeeee'}}>
                                    <p>Top Art Studio 欧式风格精细...</p>
                                    <p>￥ 39.95</p>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <img src={shop13} style={{width:'100%',height:'100%'}}/>
                                <div style={{textAlign:"left",backgroundColor:'#eeeeee'}}>
                                    <p>顺顺工艺欧式风格塑料外框黑...</p>
                                    <p>￥ 89.99</p>
                                </div>
                            </Flex.Item>
                        </Flex>
                        </WingBlank>
                    </div>
            </div>
        )
    }
}