<template>
  <div class="home">
    <div class="headers">
      <Header></Header>
      <ly-tab
         v-model="selectedId"
        :items="items"
        :options="options"
        @change="handleChange"
      />
    </div>
    <section ref="wrapper">
      <div>
        <Swiper></Swiper>
        <Icons></Icons>
        <Recommend></Recommend>
      </div>
    </section>
    <TabBar></TabBar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/common/TabBar.vue'
import Header from '@/components/Home/Header.vue'
import Swiper from '@/components/Home/Swiper.vue'
import Icons from '@/components/Home/Icons.vue'
import Recommend from '@/components/Home/Recommend.vue'
import BetterScroll from 'better-scroll'
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
  },
  mounted () {
    /* eslint-disable no-new */
    new BetterScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true
    })
  }
}
</script>

<style lang="less" scoped>
.home{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.headers{
  width: 100%;
  height: 93px;
  position:fixed;
  top:0;
  left:0;
}
section{
  flex:1;
  overflow: hidden;
  margin-top:93px;
}
</style>
