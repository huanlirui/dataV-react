import React from "react";
import { WaterLevelPond } from "@jiaminghi/data-view-react";
function WaterChart() {
  const config = {
    data: [55],
    shape: "round",
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "7%",
        left: "2%",
        width: "40%",
        height: "70%",
      }}
    >
      <WaterLevelPond
        config={config}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default WaterChart;
