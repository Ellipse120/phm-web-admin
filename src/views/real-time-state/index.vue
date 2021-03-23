<template>
  <div class="app-container">
    <el-tabs v-model="currentTab" type="border-card">
      <template v-for="(item, index) in tabs">
        <el-tab-pane :key="index" :name="item.key" :label="item.label">
          <component :is="currentTab" />
        </el-tab-pane>
      </template>
    </el-tabs>
    <a-button type="danger">ant button</a-button>
  </div>
</template>

<script>
export default {
  name: 'RealTimeState',

  components: {
    analysis: () => import('./analysis'),
    monitor: () => import('./monitor'),
    baseInfo: () => import('./base-info'),
    condition: () => import('./condition'),
    information: () => import('./information')
  },
  data () {
    return {
      tabs: [
        {
          label: '当前故障',
          key: 'analysis'
        },
        {
          label: '参数监控',
          key: 'monitor'
        },
        {
          label: '基础信息',
          key: 'baseInfo'
        },
        {
          label: '开行情况',
          key: 'condition'
        },
        {
          label: '状态信息',
          key: 'information'
        }
      ],
      currentTab: 'analysis'
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
