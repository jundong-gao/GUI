<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 10/9/21
 * Time: 2:43 PM
-->
<template>
  <transition name="fade-in">
  <div class="gui-dialog-mask flex-jac" v-show="visible">
      <div class="gui-dialog" :style="dialogStyle">
        <div class="gui-dialog-title flex-jasc">
          {{title}}
          <i class="gui-dialog-title-close gui-icon gui-close" @click.stop="close"></i>
        </div>
        <div class="gui-dialog-content">
          <slot />
        </div>
        <div class="gui-dialog-footer flex-jasc-end">
          <slot name="footer">
            <div class="gui-dialog-footer-btn confirm flex-jac" @click="confirm('confirm')">确定</div>
            <div class="gui-dialog-footer-btn flex-jac" @click="confirm('cancel')">取消</div>
          </slot>
        </div>
      </div>
  </div>
  </transition>


</template>

<script>
  import { computed } from 'vue'
  export default {
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
      const { emit:$emit } = context
      const dialogStyle = computed(() => {
        return {
          width: props.width
        }
      })

      const close = () => $emit('update:visible', false)
      const confirm = type => {
        $emit('confirm', type)
        type == 'cancel' && close()
      }

      return {
        dialogStyle,
        close,
        confirm
      }
    }
  }
</script>
