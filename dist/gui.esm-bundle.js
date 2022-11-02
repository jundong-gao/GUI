
/**
 * gui-plus-next  v0.1.9
 * (c) 2022 高俊东
 * @license MIT
 */
  
import { openBlock, createElementBlock, normalizeClass, renderSlot, withDirectives, vModelText, vModelDynamic, computed, createBlock, Transition, withCtx, createElementVNode, normalizeStyle, createTextVNode, toDisplayString, withModifiers, vShow, reactive, ref, onMounted, watch, nextTick, resolveComponent, createVNode, createCommentVNode } from 'vue';
import echarts from 'echarts';

var script$5 = {
    name: "Button",
    props: {
      type: String
    },
    data() {
      return {}
    }
  };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(['gui-button', $props.type])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$5.render = render$5;
script$5.__file = "packages/button/index.vue";

var script$4 = {
    name: "Input",
    props: {
      modelValue: [String, Number],
      value: [String, Number],
      type: String,
      placeholder: String,
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    methods: {
      handlerInput(e) {
        console.log('e.target.value::::::::::::::::', e.target.value);
        // console.log('e::::::::::::::::', e)
        this.$emit('update:modelValue', e.target.value);
      }
    }
  };

const _hoisted_1$3 = ["readonly", "placeholder"];
const _hoisted_2$2 = ["readonly", "placeholder", "type"];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return ($props.type == 'textarea')
    ? withDirectives((openBlock(), createElementBlock("textarea", {
        key: 0,
        onInput: _cache[0] || (_cache[0] = (...args) => ($options.handlerInput && $options.handlerInput(...args))),
        readonly: $props.readonly,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.modelValue) = $event)),
        placeholder: $props.placeholder,
        class: "gui-input gui-input_textarea"
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$3)), [
        [vModelText, $props.modelValue]
      ])
    : withDirectives((openBlock(), createElementBlock("input", {
        key: 1,
        class: "gui-input",
        readonly: $props.readonly,
        onInput: _cache[2] || (_cache[2] = (...args) => ($options.handlerInput && $options.handlerInput(...args))),
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.modelValue) = $event)),
        placeholder: $props.placeholder,
        type: $props.type
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$2)), [
        [vModelDynamic, $props.modelValue]
      ])
}

script$4.render = render$4;
script$4.__file = "packages/input/index.vue";

var script$3 = {
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

const _hoisted_1$2 = { class: "gui-dialog-mask flex-jac" };
const _hoisted_2$1 = { class: "gui-dialog-title flex-jasc" };
const _hoisted_3 = { class: "gui-dialog-content" };
const _hoisted_4 = { class: "gui-dialog-footer flex-jasc-end" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Transition, { name: "fade-in" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", _hoisted_1$2, [
        createElementVNode("div", {
          class: "gui-dialog",
          style: normalizeStyle($setup.dialogStyle)
        }, [
          createElementVNode("div", _hoisted_2$1, [
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

script$3.render = render$3;
script$3.__file = "packages/dialog/index.vue";

/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 11/30/21
 * Time: 5:48 PM
 */
const createUUID = function () {
  var d = Date.parse(new Date());

  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }

  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
};

var script$2 = {
    name: "Chart",
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props, context) {
      let echartsInstance = reactive(null);
      let id = ref(createUUID());

      onMounted(() => {

      });

      watch(() => props.options, (val) => {
        if(val) nextTick(() => {
          initChart(val);
        });
      }, {immediate: true});

      function initChart (opt) {
        // 初始化echarts实例
        if(!echartsInstance) echartsInstance = echarts.init(document.getElementById(id.value));

        echartsInstance.clear();
        echartsInstance.setOption(opt);
        echartsInstance.resize();
      }




      return {
        id,
        echartsInstance
      }
    }
  };

const _hoisted_1$1 = ["id"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    id: $setup.id,
    class: "gui-chart"
  }, toDisplayString($setup.id), 9 /* TEXT, PROPS */, _hoisted_1$1))
}

script$2.render = render$2;
script$2.__file = "packages/chart/index.vue";

var script$1 = {
    name: "Select",
    provide() {
      return {
        'GuiSelect': this
      }
    },
    props: {
      modelValue: {
        type: [String, Number],
        default: ""
      },
      placeholder: String
    },
    data() {
      return {
        show: false
      }
    },
    mounted() {

    },
    computed: {
      currentLabel() {
        let nodes = this.$slots.default();
        let targetItem = nodes.find(v => v?.props?.value === this.modelValue);
        return targetItem?.props?.label || ''
      }
    },
    methods: {
      handleOptionSelect(e) {
        this.$emit('update:modelValue', e);
        this.show = false;
      }
    }
  };

const _hoisted_1 = { class: "gui-select" };
const _hoisted_2 = {
  key: 0,
  class: "gui-select-main animate__animated animate__slideInUp"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gui_input = resolveComponent("gui-input");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_gui_input, {
      onClick: _cache[0] || (_cache[0] = withModifiers($event => ($data.show = true), ["stop"])),
      class: "gui-select-input",
      readonly: "",
      modelValue: $options.currentLabel,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($options.currentLabel) = $event)),
      placeholder: $props.placeholder
    }, null, 8 /* PROPS */, ["modelValue", "placeholder"]),
    ($data.show)
      ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ]))
}

script$1.render = render$1;
script$1.__file = "packages/select/index.vue";

var script = {
    name: "Option",
    inject: ['GuiSelect'],
    props: {
      label: String,
      value: [String, Number]
    },
    data() {
      return {}
    },
    computed: {
      itemIsSelected() {
        return this.GuiSelect.modelValue === this.value
      }
    },
    mounted() {
    },
    methods: {
      change() {
        this.GuiSelect.handleOptionSelect(this.value);
      }
    }
  };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(['gui-option', 'flex-aic', $options.itemIsSelected ? 'gui-option_selected' : '']),
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => ($options.change && $options.change(...args)), ["stop"]))
  }, toDisplayString($props.label), 3 /* TEXT, CLASS */))
}

script.render = render;
script.__file = "packages/option/index.vue";

/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/30/21
 * Time: 9:28 AM
 */
let components = [script$5, script$4, script$3, script$2, script$1, script];

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
