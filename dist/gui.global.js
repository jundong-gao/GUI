
/**
 * gui-plus-next  v0.1.9
 * (c) 2022 高俊东
 * @license MIT
 */
  
this.GUI = (function (vue, echarts) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

  var echarts__default = /*#__PURE__*/_interopDefaultLegacy(echarts);

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
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(['gui-button', $props.type])
    }, [
      vue.renderSlot(_ctx.$slots, "default")
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
      ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
          key: 0,
          onInput: _cache[0] || (_cache[0] = (...args) => ($options.handlerInput && $options.handlerInput(...args))),
          readonly: $props.readonly,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.modelValue) = $event)),
          placeholder: $props.placeholder,
          class: "gui-input gui-input_textarea"
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$3)), [
          [vue.vModelText, $props.modelValue]
        ])
      : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 1,
          class: "gui-input",
          readonly: $props.readonly,
          onInput: _cache[2] || (_cache[2] = (...args) => ($options.handlerInput && $options.handlerInput(...args))),
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($props.modelValue) = $event)),
          placeholder: $props.placeholder,
          type: $props.type
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$2)), [
          [vue.vModelDynamic, $props.modelValue]
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
        const dialogStyle = vue.computed(() => {
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
    return (vue.openBlock(), vue.createBlock(vue.Transition, { name: "fade-in" }, {
      default: vue.withCtx(() => [
        vue.withDirectives(vue.createElementVNode("div", _hoisted_1$2, [
          vue.createElementVNode("div", {
            class: "gui-dialog",
            style: vue.normalizeStyle($setup.dialogStyle)
          }, [
            vue.createElementVNode("div", _hoisted_2$1, [
              vue.createTextVNode(vue.toDisplayString($props.title) + " ", 1 /* TEXT */),
              vue.createElementVNode("i", {
                class: "gui-dialog-title-close gui-icon gui-close",
                onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => ($setup.close && $setup.close(...args)), ["stop"]))
              })
            ]),
            vue.createElementVNode("div", _hoisted_3, [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            vue.createElementVNode("div", _hoisted_4, [
              vue.renderSlot(_ctx.$slots, "footer", {}, () => [
                vue.createElementVNode("div", {
                  class: "gui-dialog-footer-btn confirm flex-jac",
                  onClick: _cache[1] || (_cache[1] = $event => ($setup.confirm('confirm')))
                }, "确定"),
                vue.createElementVNode("div", {
                  class: "gui-dialog-footer-btn flex-jac",
                  onClick: _cache[2] || (_cache[2] = $event => ($setup.confirm('cancel')))
                }, "取消")
              ])
            ])
          ], 4 /* STYLE */)
        ], 512 /* NEED_PATCH */), [
          [vue.vShow, $props.visible]
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
        let echartsInstance = vue.reactive(null);
        let id = vue.ref(createUUID());

        vue.onMounted(() => {

        });

        vue.watch(() => props.options, (val) => {
          if(val) vue.nextTick(() => {
            initChart(val);
          });
        }, {immediate: true});

        function initChart (opt) {
          // 初始化echarts实例
          if(!echartsInstance) echartsInstance = echarts__default.init(document.getElementById(id.value));

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
    return (vue.openBlock(), vue.createElementBlock("div", {
      id: $setup.id,
      class: "gui-chart"
    }, vue.toDisplayString($setup.id), 9 /* TEXT, PROPS */, _hoisted_1$1))
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
    const _component_gui_input = vue.resolveComponent("gui-input");

    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createVNode(_component_gui_input, {
        onClick: _cache[0] || (_cache[0] = vue.withModifiers($event => ($data.show = true), ["stop"])),
        class: "gui-select-input",
        readonly: "",
        modelValue: $options.currentLabel,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($options.currentLabel) = $event)),
        placeholder: $props.placeholder
      }, null, 8 /* PROPS */, ["modelValue", "placeholder"]),
      ($data.show)
        ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "default")
          ]))
        : vue.createCommentVNode("v-if", true)
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
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(['gui-option', 'flex-aic', $options.itemIsSelected ? 'gui-option_selected' : '']),
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => ($options.change && $options.change(...args)), ["stop"]))
    }, vue.toDisplayString($props.label), 3 /* TEXT, CLASS */))
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

  return GUI;

}(Vue, echarts));
