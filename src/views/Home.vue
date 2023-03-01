<template>
  <div class="home">
    <Header></Header>
    <ly-tab
       v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
    />
    <div>
      <Swiper></Swiper>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/common/TabBar.vue'
import Header from '@/components/Home/Header.vue'
import Swiper from '@/components/Home/Swiper.vue'
export default {
  name: 'Home',
  data () {
    return {
      selectedId: 0,
      items: [
        { label: '推荐' },
        { label: '大红袍' },
        { label: '绿茶' },
        { label: '铁观音' },
        { label: '普洱' },
        { label: '茶具' },
        { label: '花茶' }
      ],
      options: {
        activeColor: '#f00',
        fixBottom: false,
        reBoundExponent: 100,
        reBoundingDuration: 360
      }
    }
  },
  components: {
    TabBar,
    Header,
    Swiper
  },
  methods: {
    handleChange () {}
  }
}
</script>

<style lang="less" scoped>
.ly-tab{
  position:fixed;
  top:60px;
}
</style>
