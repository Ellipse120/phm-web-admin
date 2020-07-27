<template>
  <div class="app-container">
    <el-row :gutter="10" class="mb-10">
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="4">
        <el-input placeholder="车组号" title="车组号"/>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="4">
        <el-input placeholder="故障代码" title="故障代码"/>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="4">
        <el-input type="textarea" autosize placeholder="故障描述" title="故障描述"/>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="4">
        <el-input placeholder="故障发生时间" title="故障发生时间"/>
      </el-col>
    </el-row>
    <el-row type="flex" justify="end" class="mb-10">
      <el-button icon="el-icon-close">清空</el-button>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
      <el-button type="success" icon="el-icon-download">导出</el-button>
    </el-row>

    <el-table
      class="mb-10"
      border
      :data="list"
    >
      <el-table-column
        prop="trainGroup"
        align="center"
        label="车组号"
      />
      <el-table-column
        prop="faultCode"
        align="center"
        label="故障代码"
      />
      <el-table-column
        prop="remark"
        align="center"
        label="故障描述"
      />
      <el-table-column
        prop="faultLevel"
        align="center"
        label="故障级别"
      />
      <el-table-column
        prop="date"
        align="center"
        label="故障发生时间"
      />
      <el-table-column
        prop="date"
        align="center"
        label="采集时间"
      />
      <el-table-column
        prop="date"
        align="center"
        label="入库时间"
      />
    </el-table>

    <el-pagination
      :current-page="1"
      :page-sizes="[10, 20, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="list.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Analysis',
  data() {
    return {
      list: []
    }
  },
  methods: {
    handleCurrentChange(currentPage) {
      console.log(currentPage, ' currentPage')
    },

    handleSizeChange(pageSize) {
      console.log(pageSize, 'pageSize')
    }
  }
}
</script>

<style scoped>

</style>
