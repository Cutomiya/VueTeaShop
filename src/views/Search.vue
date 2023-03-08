<template>
  <div class="search">
    <Header></Header>
    <section>
      <div class="history">
        <h2>
          <i class="iconfont icon-lishi"></i>
          <span>历史搜索</span>
          <span>清空历史记录</span>
          <ul>
            <li>茶叶</li><li>茶叶</li><li>茶叶5</li><li>茶叶</li><li>茶叶54</li><li>茶叶</li><li>茶5叶</li><li>茶叶64</li><li>茶叶</li>
          </ul>
        </h2>
      </div>
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
export default {
  components: {
    TabBar,
    Header
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
  }
}
</style>
