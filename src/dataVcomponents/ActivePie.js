import React from "react";

import { ActiveRingChart } from "@jiaminghi/data-view-react";
function ActivePie() {
  const config = {
    data: [
      {
        name: "周口",
        value: 55,
      },
      {
        name: "南阳",
        value: 120,
      },
      {
        name: "西峡",
        value: 78,
      },
      {
        name: "驻马店",
        value: 66,
      },
      {
        name: "新乡",
        value: 80,
      },
    ],
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "7%",
        left: "2%",
        width: "70%",
        height: "70%",
      }}
    >
      <ActiveRingChart
        config={config}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default ActivePie;
