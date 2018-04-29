// import { message } from "antd";

// const util = {
//   namespace: "util",
//   state: {
//   },
//   reducers: {
//     set(state, { payload }) {
//       let result = {
//         ...state,
//         ...payload
//       };
//       return result;
//     }
//   },
//   effects: {
//     *success({ message }, { put }) {
//       message.config({
//         top: 100,
//         duration: 2,
//       });
//       message.success(message);
//     },
//     *fail({ message }, { put }) {
//       message.error(message);
//     },
//     *show({ message = "请等待" }, { select }) {
//       message.loading(message)
//     },
//     *hide({ }, { select }) {
//       message.loading("",0)
//     }
//   }
// };

// export default util;
