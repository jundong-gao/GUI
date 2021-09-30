<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/29/21
 * Time: 3:55 PM
-->
<template>
  <div :class="['gui-button', type]">{{title}}</div>
</template>

<script>
  export default {
    name: "button",
    props: {
      title: String,
      type: String
    },
    data() {
      return {}
    }
  }
</script>

