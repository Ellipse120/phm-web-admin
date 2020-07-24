<template>
  <el-header height="56px">
    <div class="header-container">
      <div class="header-item">logo</div>
      <div class="header-item">
        <div class="header-container">
          <div>
            <el-menu
              mode="horizontal"
              :default-active="activeMenu"
              :background-color="variables.menuBg"
              :text-color="variables.menuText"
              :active-text-color="variables.menuActiveText"
              :unique-opened="false"
            >
              <div style="display: flex;">
                <sidebar-item-new v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
                <el-menu-item>管理员</el-menu-item>
                <el-menu-item @click="logout">注销</el-menu-item>
              </div>
            </el-menu>
          </div>
<!--          <div style="font-size: 14px;margin-left: 20px;">-->
<!--            <span>管理员</span>-->
<!--            <span style="margin-left: 20px;">注销</span>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
import path from 'path'
import { mapGetters } from 'vuex'
import SidebarItemNew from './Sidebar/SidebarItemNew'
import variables from '@/styles/variables.scss'
import { isExternal } from '@/utils/validate'

export default {
  name: 'NavBar',
  components: {
    SidebarItemNew
  },
  data() {
    return {
      onlyOneChild: null,
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
    activeMenu() {
      const { meta, path } = this.$route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child, the child is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },

    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style scoped>
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 56px;
  }

  .header-item {
  }
</style>
