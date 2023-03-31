<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/"></router-link>
    </nav> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('INIT_USER')
  }
}
</script>
