/*
 * @Author: guo.mk 
 * @Date: 2018-01-14 21:49:15 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-04-28 14:39:52
 * 判断环境导出开发用的params和生产用的params
 */
import paramsDev from "./params_dev";
import paramsPro from "./params_pro";

let global;
if (process.env.NODE_ENV !== "production") {
  global = paramsDev;
} else {
  global = paramsPro;
}
export default global;
