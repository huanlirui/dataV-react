import React, { Component } from "react";
import BasicLine from "../components/BasicLine";
import LabelPie from "../components/LabelPie";
class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //   <ScaleBox width={1920} height={1080}>
      //     <div className={"screen"}>
      //       <SignToMap />
      //     </div>
      //   </ScaleBox>
      <div>
        统计图表
        <BasicLine />
        <LabelPie/>
      </div>
    );
  }
}

export default Statistics;
