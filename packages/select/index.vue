<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 11/2/22
 * Time: 2:12 PM
-->
<template>
  <div class="gui-select">
    <gui-input @click.stop="show = true" class="gui-select-input" readonly v-model="currentLabel" :placeholder="placeholder"></gui-input>
    <div v-if="show" class="gui-select-main animate__animated animate__slideInUp">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
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
        let nodes = this.$slots.default()
        let targetItem = nodes.find(v => v?.props?.value === this.modelValue)
        return targetItem?.props?.label || ''
      }
    },
    methods: {
      handleOptionSelect(e) {
        this.$emit('update:modelValue', e)
        this.show = false
      }
    }
  }
</script>

<style scoped>

</style>
