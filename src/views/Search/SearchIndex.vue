<template>
  <div class="search">
    <Header></Header>
    <section>
      <div class="history" v-if="searchArr.length">
        <h2>
          <i class="iconfont icon-lishi"></i>
          <span>历史搜索</span>
          <span @click="cleanArr">清空历史记录</span>
          <ul>
            <li v-for="item in searchArr"  :key='item.id' @click="historyGo(item)">{{item}}</li>
          </ul>
        </h2>
      </div>
      <div class="noHistory" v-else>暂无历史记录</div>
      <div class="like">
        <h1>推荐商品</h1>
      </div>
    </section>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import Header from '@/components/Search/Header.vue'
import { MessageBox } from 'mint-ui'
export default {
  components: {
    TabBar,
    Header
  },
  data () {
    return {
      searchArr: []
    }
  },
  created () {
    this.searchArr = JSON.parse(localStorage.getItem('searchList') || '[]')
  },
  methods: {
    cleanArr () {
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      }).then(res => {
        if (res === 'confirm') {
          localStorage.removeItem('searchList')
          this.searchArr = []
        }
      })
    },
    historyGo (item) {
      this.$router.push({
        name: 'SearchList',
        query: {
          key: item
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
  overflow: hidden;
  section{
    flex:1;
    overflow: hidden;
    background-color: #f5f5f5f5;
    .history{
      padding:10px;
      h2{
        font-weight: 500;
        font-size:20px;
        position: relative;
        span:nth-child(3){
          color:#8b8b8b;
          font-size:10px;
          position: absolute;
          right:10px;
          top:5px;
        }
        i{
          padding:4px;
          color:red;
          font-size:20px;
        }
        ul{
          display: flex;
          flex-wrap: wrap;
          padding:10px 0px;
          li{
            margin:8px;
            padding:2px 4px;
            font-size:16px;
            border:1px solid #ccc;
          }
        }
      }
    }
    .noHistory{
      // width: 100%;
      text-align: center;
      color:#adadad;
      padding:10px;
      margin:0px 30px 10px 30px;
      font-size:16px;
      border-bottom:1px solid #adadad;
    }
  }
}
</style>
