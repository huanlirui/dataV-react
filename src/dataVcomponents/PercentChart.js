import React from "react";
import { PercentPond } from "@jiaminghi/data-view-react";
function PercentChart() {
  const config = {
    value: 66,
    borderWidth: 5,
    borderRadius: 10,
    borderGap: 5
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "7%",
        left: "2%",
        width: "70%",
        height: "20%",
      }}
    >
      <PercentPond
        config={config}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default PercentChart;
