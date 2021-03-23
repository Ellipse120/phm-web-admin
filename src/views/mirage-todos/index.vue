<template>
  <div class="align-center">
    <el-card>
      <div slot="header">
        <b>Todos</b>
        <el-input v-model="newTodo" placeholder="请输入内容">
          <template slot="append">
            <el-button @click="doAdd">添加</el-button>
          </template>
        </el-input>
      </div>
      <div v-loading="isLoading">
        <el-checkbox-group v-model="doneList" @change="handleCheckedChange">
          <el-checkbox v-for="item in list" :key="item.id" style="display: block;" :checked="item.isDone" :label="item.id">
            <em>{{ item.text }}</em>
            <el-button type="text" icon="el-icon-minus" @click="doDelete(item)" />
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>
  </div>
</template>

<script>
import { todos, addTodo, deleteTodo } from './api'

export default {
  name: 'MirageTodos',
  data () {
    return {
      isLoading: false,
      list: [],
      doneList: [],
      newTodo: null
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.isLoading = true
      const { data } = await todos().finally(() => {
        this.isLoading = false
      })
      this.list = data
    },

    async doAdd () {
      await addTodo({
        text: this.newTodo,
        isDone: false
      })
      await this.getList()
    },

    async doDelete ({ id }) {
      await deleteTodo(id)
      await this.getList()
    },

    handleCheckedChange (v) {
      this.doneList = v
    }
  }
}
</script>

<style scoped>
.align-center {
  text-align: center;
}
</style>
