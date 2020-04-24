import React from "react";

import { ScrollBoard } from "@jiaminghi/data-view-react";
import './css/ScrollList.less'
function ScrollList() {
  const config = {
    header: ["列1", "列2", "列3","列4"],
    data: [
      ["行1列1", "行1列2", "行1列3","1"],
      ["行2列1", "行2列2", "行2列3","1"],
      ["行3列1", "行3列2", "行3列3","1"],
      ["行4列1", "行4列2", "行4列3","1"],
      ["行5列1", "行5列2", "行5列3","1"],
      ["行6列1", "行6列2", "行6列3","1"],
      ["行7列1", "行7列2", "行7列3","1"],
      ["行8列1", "行8列2", "行8列3","1"],
      ["行9列1", "行9列2", "行9列3","1"],
      ["行10列1", "行10列2", "行10列3","1"],
    ],
  };
  return (
    <div style={{position:'absolute',top:'7%',left:'2%',width:'96%', height: "90%" ,}} data-component="ScrollList">
      <ScrollBoard
        config={config}
        style={{ width:'100%', height: "100%" }}
      />
    </div>
  );
}

export default ScrollList;
