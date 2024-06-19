
import apix from "./utils/apix"; // 下载表

export default {
  install(Vue, options) {
    
    // api
    Vue.prototype.apix = apix;
  }
};
