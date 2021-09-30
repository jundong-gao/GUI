<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/29/21
 * Time: 3:55 PM
-->
<template>
  <div :class="['gui-button', type]">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "Button",
    props: {
      type: String
    },
    data() {
      return {}
    }
  }
</script>

