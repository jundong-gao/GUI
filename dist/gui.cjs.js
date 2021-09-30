
/**
 * gui-plus-next  v0.1.0
 * (c) 2021 高俊东
 * @license MIT
 */
  
'use strict';

var vue = require('vue');

var script$1 = {
    name: "button",
    props: {
      title: String,
      type: String
    },
    data() {
      return {}
    }
  };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(['gui-button', $props.type])
  }, vue.toDisplayString($props.title), 3 /* TEXT, CLASS */))
}

script$1.render = render$1;
script$1.__file = "packages/button/index.vue";

var script = {
    name: "input",
    props: {
      type: String
    },
    data() {
      return {}
    },
  };

const _hoisted_1 = ["type"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", { type: $props.type }, null, 8 /* PROPS */, _hoisted_1))
}

script.render = render;
script.__file = "packages/input/index.vue";

/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/30/21
 * Time: 9:28 AM
 */
let components = [script$1, script];

/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/30/21
 * Time: 9:28 AM
 */
/**
 * 组件名称前缀
 * @type {string}
 */

const prefixName = 'gui-';
/**
 * 组件新增install 方法
 * @param component 组件实例
 */

const createInstall = component => {
  component.install = app => app.component(`${prefixName}${component.name}`, component);
};
/**
 * 为组件添加 install 方法 用于 按需引入
 */


components.forEach(createInstall);
/**
 * 全部引入
 * @returns {Function}
 */

const installAll = () => {
  return app => {
    components.forEach(component => {
      app.use(component);
    });
  };
};

/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/29/21
 * Time: 3:46 PM
 */
/**
 * 组件库名称 GUI
 * @type
 */

const GUI = { ...components,
  install: installAll()
};

module.exports = GUI;
