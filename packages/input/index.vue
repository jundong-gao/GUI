<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/29/21
 * Time: 4:13 PM
-->
<template>
  <textarea
    @input="handlerInput"
    :readonly="readonly"
    v-model="modelValue"
    :placeholder="placeholder"
    class="gui-input gui-input_textarea"
    v-if="type == 'textarea'"
  ></textarea>
  <input
    v-else
    class="gui-input"
    :readonly="readonly"
    @input="handlerInput"
    v-model="modelValue"
    :placeholder="placeholder"
    :type="type">
</template>
<script>
  export default {
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
        console.log('e.target.value::::::::::::::::', e.target.value)
        // console.log('e::::::::::::::::', e)
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
</script>
