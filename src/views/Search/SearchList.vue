<template>
  <div class="list">
    <div class="header">
      <Header></Header>
      <ul>
        <li>综合</li>
        <li>
          <div>价格</div>
          <div>
            <i></i>
            <i></i>
          </div>
        </li>
        <li>
          <div>销量</div>
          <div>
            <i></i>
            <i></i>
          </div>
        </li>
      </ul>
    </div>
    <section>
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
      padding:6px 0;
      font-size:16px;
    }
  }
  section{
    flex:1;
  }
}
</style>
