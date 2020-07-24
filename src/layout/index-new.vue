<template>
  <div>
    <div>
      <navbar-new />
    </div>
    <div>
      <breadcrumb></breadcrumb>
      <app-main />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

import { AppMain, NavbarNew } from './components'

export default {
  name: 'NewLayout',
  components: {
    AppMain,
    NavbarNew,
    Breadcrumb
  }
}
</script>

<style scoped>

</style>
