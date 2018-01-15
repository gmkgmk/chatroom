/*
 * @Author: guo.mk 
 * @Date: 2018-01-14 21:49:15 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-01-14 22:22:12
 * 判断环境导出开发用的API和生产用的API
 */
import apiDev from "./api_dev";
import apiPro from "./api_pro";

let exportAPI;
if (process.env.NODE_ENV !== "production") {
  exportAPI = apiDev;
} else {
  exportAPI = apiPro;
}
export default exportAPI;
