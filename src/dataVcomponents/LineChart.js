import React from "react";

import { CapsuleChart } from "@jiaminghi/data-view-react";

function LineChart() {
  const config = {
    data: [
        {
          name: '迟到',
          value: 167
        },
        {
          name: '早退',
          value: 67
        },
        {
          name: '正常',
          value: 123
        },
        {
          name: '请假',
          value: 55
        },
        {
          name: '出差',
          value: 98
        },
      ],
      unit: '人'
  };
  return (
    <div style={{position:'absolute',top:'7%',left:'2%',width:'96%', height: "90%" ,}} >
      <CapsuleChart
        config={config}
        style={{ width:'100%', height: "100%" }}
      />
    </div>
  );
}

export default LineChart;
