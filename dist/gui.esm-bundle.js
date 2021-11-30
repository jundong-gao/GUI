
/**
 * gui-plus-next  v0.1.7
 * (c) 2021 高俊东
 * @license MIT
 */
  
import { openBlock, createElementBlock, normalizeClass, renderSlot, computed, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeStyle, createTextVNode, toDisplayString, withModifiers, vShow } from 'vue';

var script$2 = {
    name: "Button",
    props: {
      type: String
    },
    data() {
      return {}
    }
  };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(['gui-button', $props.type])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$2.render = render$2;
script$2.__file = "packages/button/index.vue";

var script$1 = {
    name: "Input",
    props: {
      type: String
    },
    data() {
      return {}
    },
  };

const _hoisted_1$1 = ["type"];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", { type: $props.type }, null, 8 /* PROPS */, _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "packages/input/index.vue";

var script = {
    name: "Dialog",
    props: {
      title: String,
      visible: {
        type: Boolean,
        default: false,
      },
      width: {
        type: [Number, String],
        default: '300px'
      }
    },
    setup(props, context) {
      const { emit:$emit } = context;
      const dialogStyle = computed(() => {
        return {
          width: props.width
        }
      });

      const close = () => $emit('update:visible', false);
      const confirm = type => {
        $emit('confirm', type);
        type == 'cancel' && close();
      };

      return {
        dialogStyle,
        close,
        confirm
      }
    }
  };

const _hoisted_1 = { class: "gui-dialog-mask flex-jac" };
const _hoisted_2 = { class: "gui-dialog-title flex-jasc" };
const _hoisted_3 = { class: "gui-dialog-content" };
const _hoisted_4 = { class: "gui-dialog-footer flex-jasc-end" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, { name: "fade-in" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", _hoisted_1, [
        createElementVNode("div", {
          class: "gui-dialog",
          style: normalizeStyle($setup.dialogStyle)
        }, [
          createElementVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString($props.title) + " ", 1 /* TEXT */),
            createElementVNode("i", {
              class: "gui-dialog-title-close gui-icon gui-close",
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => ($setup.close && $setup.close(...args)), ["stop"]))
            })
          ]),
          createElementVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "default")
          ]),
          createElementVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "footer", {}, () => [
              createElementVNode("div", {
                class: "gui-dialog-footer-btn confirm flex-jac",
                onClick: _cache[1] || (_cache[1] = $event => ($setup.confirm('confirm')))
              }, "确定"),
              createElementVNode("div", {
                class: "gui-dialog-footer-btn flex-jac",
                onClick: _cache[2] || (_cache[2] = $event => ($setup.confirm('cancel')))
              }, "取消")
            ])
          ])
        ], 4 /* STYLE */)
      ], 512 /* NEED_PATCH */), [
        [vShow, $props.visible]
      ])
    ]),
    _: 3 /* FORWARDED */
  }))
}

script.render = render;
script.__file = "packages/dialog/index.vue";

/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/30/21
 * Time: 9:28 AM
 */
let components = [script$2, script$1, script];

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

const prefixName = 'Gui';
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

export default GUI;
