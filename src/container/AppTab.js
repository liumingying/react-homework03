import React from "react";
import { TabBar } from "antd-mobile";
import AppHome from "./AppHome";
import AppStore from "./AppStore";
import AppMind from "./AppMind";
import AppMy from "./AppMy";
import'./iconfont.css';


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="blue"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  // background:
                  //   "url() center center /  21px 21px no-repeat"
                }}
                className="iconfont icon-fangzi"
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                }}
                className="iconfont icon-fangzi"
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  
                }}
                className="iconfont icon-2"
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                }}
                className="iconfont icon-2"
              />
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
            <AppMind/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                }}
                className="iconfont icon-shop"
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                }}
                className="iconfont icon-shop"
              />
            }
            title="商城"
            key="Friend"
            // dot  右边小红点
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
            <AppStore/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-my"/>
            }
            selectedIcon={<div className="iconfont icon-my"/>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
            <AppMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}