import React, { Component, useState } from "react";
import {
  BorderBox1,
  BorderBox11,
  Loading,
  FullScreenContainer,
} from "@jiaminghi/data-view-react";
import { Row, Col } from "antd";
import Columnanimated from "../components/Columnanimated";
import SignToMap from "../components/SignToMap";
import LabelPie from "../components/LabelPie";
function LargeScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <button onClick={() => setLoading(!loading)}>Click me</button>

      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Row style={{ minHeight: 400 }}>
          <Col span={6}>
            <BorderBox1>
              <Columnanimated />
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
      )}
    </div>
  );
}

export default LargeScreen;
