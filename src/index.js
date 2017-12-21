import React from "react";
import { render } from "react-dom";
import { LocaleProvider ,Button} from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale-provider/zh_CN";
// import App from "./app";
import App from "./app";

const ROOT = () => {
  return (
    <LocaleProvider locale={zhCN}>
      <App/>
    </LocaleProvider>
  );  
};

const DOM = document.getElementById("app");
render(<ROOT />, DOM);
