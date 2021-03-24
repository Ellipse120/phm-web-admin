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
    <tinymce-editor
      v-model="content"
      :tinymce-script-src="localSrc"
      api-key="test"
      :init="{
        height: 500,
        menubar: false,
        language: 'zh_CN',
        plugins: plugins,
        toolbar: toolbar,
        statusbar: false
      }"
    />
    {{ content }}
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'RealTimeState',
  components: {
    tinymceEditor: Editor,
    analysis: () => import('./analysis'),
    monitor: () => import('./monitor'),
    baseInfo: () => import('./base-info'),
    condition: () => import('./condition'),
    information: () => import('./information')
  },
  data () {
    return {
      content: null,
      // https://www.tiny.cloud/get-tiny/language-packages/ 下载语言包放到 /langs 目录下
      // 下载 https://www.tiny.cloud/get-tiny/self-hosted/ js包部署私服
      localSrc: 'http://172.1.128.184:8080/js/tinymce/tinymce.min.js',
      plugins: ['advlist anchor autolink autosave code codesample directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars wordcount'],
      toolbar: ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'],
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
