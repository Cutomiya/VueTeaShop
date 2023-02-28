<template>
  <div class="home">
    这是首页
    <tabBar></tabBar>
  </div>
</template>

<script>
// @ is an alias to /src
import tabBar from '@/components/common/TabBar.vue'
export default {
  name: 'Home',
  components: {
    tabBar
  }
}
</script>
