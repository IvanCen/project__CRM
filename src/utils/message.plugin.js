import M from 'materialize-css';

export default {
  install(Vue) {
    const vue = Vue;
    vue.prototype.$message = function (html) {
      M.toast({ html });
    };
    vue.prototype.$error = function (html) {
      M.toast({ html: `[Ошибка]: ${html}` });
    };
  },
};
