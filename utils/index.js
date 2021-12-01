/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 11/30/21
 * Time: 5:48 PM
 */
const createUUID = function() {
  var d = Date.parse(new Date());
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}


export {
  createUUID
}
