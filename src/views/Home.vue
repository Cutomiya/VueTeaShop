<template>
  <div class="home">
    <Header></Header>
    <ly-tab
       v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
    />
    <Swiper></Swiper>
    <TabBar></TabBar>
    <Icons></Icons>
    <Recommend></Recommend>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/common/TabBar.vue'
import Header from '@/components/Home/Header.vue'
import Swiper from '@/components/Home/Swiper.vue'
import Icons from '@/components/Home/Icons.vue'
import Recommend from '@/components/Home/Recommend.vue'
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
    Swiper,
    Icons,
    Recommend
  },
  methods: {
    handleChange () {}
  }
}
</script>

<style lang="less" scoped>
.home{
  width: 100vw;
  // background-color: #dddddd;
}
.ly-tab{
  position:fixed;
  top:60px;
}
</style>
