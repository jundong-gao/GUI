<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 11/2/22
 * Time: 2:14 PM
-->
<template>
  <div :class="['gui-option', 'flex-aic', itemIsSelected ? 'gui-option_selected' : '']" @click.stop="change">
    {{label}}
  </div>
</template>

<script>
  export default {
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
        this.GuiSelect.handleOptionSelect(this.value)
      }
    }
  }
</script>

<style scoped>

</style>
