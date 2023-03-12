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
      <div class="Box">
        <div v-for="item in newData" :key="item.id">
          <Swiper v-if="item.type==='swiperList'" :swiperList="item.data"></Swiper>
          <Advertisement v-if="item.type==='advList'" :advList="item.data"></Advertisement>
          <Icons v-if="item.type==='iconList'" :iconList="item.data"></Icons>
          <Recommend v-if="item.type==='recList'" :recList="item.data"></Recommend>
          <Like v-if="item.type==='likeList'" :likeList="item.data"></Like>
        </div>
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
import Like from '@/components/Home/Like.vue'
import Advertisement from '@/components/Home/Advertisement.vue'
import Http from '@/common/api/request.js'
export default {
  name: 'Home',
  data () {
    return {
      selectedId: 0,
      items: [],
      newData: [],
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
    Recommend,
    Like,
    Advertisement
  },
  methods: {
    async addData (index) { // 切换tab栏的请求
      const { data: res } = await Http.$axios({
        url: 'api/index_list/' + index + '/data/1'
      })
      // console.log(res)
      if (res?.constructor !== Array) {
        this.newData = res.data
      } else {
        this.newData = res
      }
    },
    handleChange (item, index) {
      if (index !== 0 && index !== 1) return
      // console.log(item, index)
      this.addData(index)
    },
    async initCarList () { // 最开始加载页面数据
      const { data: res } = await Http.$axios({
        url: 'api/index_list/0/data/1'
      })
      // console.log(res)
      this.items = Object.freeze(res.topBar)
      this.newData = Object.freeze(res.data)
      // console.log(this.newData)
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new BetterScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true,
      observeDOM: true
    })
  },
  created () {
    // axios({
    //   url: '/api/home'
    // }).then(res => {
    //   console.log(res)
    // })
    this.initCarList()
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
::v-deep .ly-tab-list{
  padding: 0px 10px !important;
}
::v-deep .ly-tabbar{
  height: 33px;
  box-shadow:none;
  border-bottom:0px;
}
::v-deep .ly-tab-active-bar{
  bottom: 0px !important;
}
</style>
