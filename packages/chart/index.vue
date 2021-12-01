<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 11/30/21
 * Time: 5:00 PM
-->
<template>
  <div :id="id" class="gui-chart">{{id}}</div>
</template>

<script>
  import { onMounted, reactive, watch, watchEffect, ref, nextTick } from 'vue'
  import echarts from 'echarts'
  import { createUUID } from '../../utils/index'
  export default {
    name: "Chart",
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props, context) {
      let echartsInstance = reactive(null)
      let id = ref(createUUID())

      onMounted(() => {

      })

      watch(() => props.options, (val) => {
        if(val) nextTick(() => {
          initChart(val)
        })
      }, {immediate: true})

      function initChart (opt) {
        // 初始化echarts实例
        if(!echartsInstance) echartsInstance = echarts.init(document.getElementById(id.value))

        echartsInstance.clear()
        echartsInstance.setOption(opt)
        echartsInstance.resize()
      }




      return {
        id,
        echartsInstance
      }
    }
  }
</script>

<style scoped>

</style>
