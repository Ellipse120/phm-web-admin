<template>
  <div>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row style="height: 600px;background:#fff;padding:16px 16px 0;">
      <web-map />
    </el-row>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'
import WebMap from '@/components/ArcGis'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'Test',
  components: {
    LineChart,
    WebMap
  },
  data () {
    return {
      lineChartData: lineChartData.newVisitis
    }
  }
}
</script>

<style scoped>

</style>
