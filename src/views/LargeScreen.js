import React, { Component, useState } from "react";
import {
  BorderBox1,
  BorderBox11,
  Loading,
  FullScreenContainer,
  Decoration9,
} from "@jiaminghi/data-view-react";
import { Row, Col } from "antd";
import Columnanimated from "../components/Columnanimated";
import SignToMap from "../components/SignToMap";
import LabelPie from "../components/LabelPie";
import MapLight from "../dataVcomponents/MapLight";
import ScrollList from "../dataVcomponents/ScrollList";
import LineChart from "../dataVcomponents/LineChart";
import WaterChart from "../dataVcomponents/WaterChart";
import PercentChart from "../dataVcomponents/PercentChart";
import ActivePie from "../dataVcomponents/ActivePie";
function LargeScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <button onClick={() => setLoading(!loading)}>Click me</button>

      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <div>
          <Row style={{ minHeight: 400 }}>
            <Col span={6}>
              <BorderBox1>
                
                <PercentChart />
                <ActivePie />
              </BorderBox1>
            </Col>
            <Col span={12}>
              <BorderBox11 style={{ overFlow: "hidden" }} title="地图标记">
                <SignToMap />
              </BorderBox11>
            </Col>
            <Col span={6}>
              <BorderBox1>
                <LabelPie />
              </BorderBox1>
            </Col>
          </Row>
          <Row style={{ minHeight: 700 }}>
            <Col span={6}>
              <Row style={{ height: "50%" }}>
                <BorderBox1>
                  <LineChart />
                </BorderBox1>
              </Row>
              <Row style={{ height: "50%" }}>
                <Decoration9 style={{ width: "50%", height: "50%" }}>
                  <span style={{ color: "#fff" }}>66%</span>
                </Decoration9>
              </Row>
            </Col>
            <Col span={12}>
              <BorderBox11 style={{ overFlow: "hidden" }} title="地图标记">
                <MapLight />
              </BorderBox11>
            </Col>
            <Col span={6}>
              <Row style={{ height: "50%" }}>
                <BorderBox1>
                  <ScrollList />
                </BorderBox1>
              </Row>
              <Row style={{ height: "50%" }}>
                <BorderBox1>
                  <WaterChart />
                </BorderBox1>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default LargeScreen;
