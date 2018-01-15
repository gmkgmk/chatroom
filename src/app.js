/*
 * @Author: guo.mk 
 * @Date: 2017-12-19 17:22:37 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-01-15 21:15:36
 */
import React from "react";
import MainLayou from "./layout";
import io from "socket.io-client";
const { objToStrMap } = require("../common/util/tools");

class SocketComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <MainLayou />;
  }
}

export default SocketComponent;
