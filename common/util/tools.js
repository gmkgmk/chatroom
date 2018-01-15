/**
 *
 * Map转化obj
 * @export {Map}strMap
 * @param {any} strMap
 * @returns {Array} array
 */
function strMapToAry(strMap) {
  let ret = [];
  for (let [k, v] of strMap) {
    ret.push(v)
  }
  return ret;
}
/**
 *
 * obj转化Map
 * @export
 * @param {any} obj
 * @returns
 */
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}
module.exports = {
  strMapToAry,
  objToStrMap
};
