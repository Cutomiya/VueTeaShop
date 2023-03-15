<template>
  <div class="list">
    <div class="header">
      <Header></Header>
      <ul>
        <li>
          <div>综合</div>
        </li>
        <li>
          <div>价格</div>
          <div class="search-btn">
            <i class="iconfont icon-shangjiantou"></i>
            <i class="iconfont icon-xiajiantou"></i>
          </div>
        </li>
        <li>
          <div>销量</div>
          <div class="search-btn">
            <i class="iconfont icon-shangjiantou"></i>
            <i class="iconfont icon-xiajiantou"></i>
          </div>
        </li>
      </ul>
    </div>
    <section>
      <ul>
        <li v-for="item in goodsList" :key="item.id">
          <img :src="change(item.url)" alt="">
          <h3>{{ item.name }}</h3>
          <div class="buy">
            <div>
              <span>￥</span>
              <b>{{ item.price }}</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
      </ul>
    </section>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import Header from '@/components/Search/Header.vue'
import Http from '@/common/api/request.js'
export default {
  components: {
    TabBar,
    Header
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      await Http.$axios({
        url: '/api/goods/shopList',
        params: {
          searchName: this.$route.query.key
        }
      }).then(res => {
        this.goodsList = res.data
        console.log(this.goodsList)
      })
    },
    change (item) {
      return require('@/assets/images/pic/' + item)
    }
  },
  data () {
    return {
      goodsList: []
    }
  },
  watch: { // 监听到当前路由变化就重新查询
    $route () {
      this.getData()
    }
  }
}
</script>

<style lang="less" scoped>
.list{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
  overflow: hidden;
  .header{
    ul{
      display: flex;
      justify-content: space-around;
      padding:4px 0;
      font-size:16px;
      li{
        display:flex;
        align-items: center;
        div{
          padding:4px;
        }
        .search-btn{
          display:flex;
          flex-direction:column;
          i{
            font-size:6px;
          }
        }
      }
    }
  }
  section{
    flex:1;
    overflow:hidden;
    ul{
      display:flex;
      flex-wrap:wrap;
      justify-content: space-between;
      li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        // background-color: aqua;
        img{
          width: 100%;
          height: 26vh;
          padding:4px;
          box-sizing: border-box;
        }
        h3{
          width: 100%;
          padding:4px;
          box-sizing: border-box;
          font-size: 16px;
          font-weight: 500;
          overflow:hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .buy{
          display: flex;
          justify-content: space-between;
          font-size:20px;
          width: 100%;
          box-sizing: border-box;
          font-size: 16px;
          padding:10px 4px;
          div:last-child{
            color:white;
            background-color:red;
            border-radius: 6px;
            padding:2px 6px;
          }
          div:first-child{
            span{
              color:red;
              font-weight:500;
            }
            b{
              font-size:18px;
              color:red;
              font-weight:400;
            }
          }
        }
      }
    }
  }
}
</style>
