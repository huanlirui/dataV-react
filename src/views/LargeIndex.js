import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import LargeScreen from "./LargeScreen";
import SignToMap from "./SignToMap";
import Statistics from "./Statistics";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./css/LargeIndex";
const { Header, Footer, Sider, Content } = Layout;

class LargeIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-component="LargeIndex">
        <Router>
          <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1">
                  <Link to="/largeIndex/signToMap">地图标记</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/largeIndex/statistics">chart测试</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/largeIndex/largeScreen">大屏测试</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content>
              <Route path="/largeIndex/signToMap" component={SignToMap} />
              <Route path="/largeIndex/statistics" component={Statistics} />
              <Route path="/largeIndex/largeScreen" component={LargeScreen} />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Copyright 2020 云南格泰科技有限公司 出品
            </Footer>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default LargeIndex;
