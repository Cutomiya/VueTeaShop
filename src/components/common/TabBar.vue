<template>
  <div class="tabBar">
    <ul>
      <li v-for="item in routerList" :key="item.id" @click="switchTab(item.path)">
        <!-- <img :src="item.selected" alt=""/> -->
        <img :src=' $route.path.includes(item.path)? item.selected : item.active ' alt=""/>
        <!-- {{$route.path.includes(item.path)? item.selected : item.active }} -->
        <span :class=' $route.path.includes(item.path)? "active" : "" '>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerList: [{
        title: '首页',
        path: '/home',
        active: require('@/assets/images/tabBar/home.png'),
        selected: require('@/assets/images/tabBar/home-active.png')
      },
      {
        title: '分类',
        path: '/cart',
        active: require('@/assets/images/tabBar/cart.png'),
        selected: require('@/assets/images/tabBar/cart-active.png')
      },
      {
        title: '订单',
        path: '/list',
        active: require('@/assets/images/tabBar/list.png'),
        selected: require('@/assets/images/tabBar/list-active.png')
      },
      {
        title: '我的',
        path: '/my',
        active: require('@/assets/images/tabBar/my.png'),
        selected: require('@/assets/images/tabBar/my-active.png')
      }]
    }
  },
  methods: {
    switchTab (path) {
      if (path === this.$route.path) return
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="less" scoped>
.tabBar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: #ffffff;
  height: 70px;
  ul{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    align-items: center;
    li{
      font-size: 10px;
      display: flex;
      flex-direction: column;
      img{
        width: 36px;
        height: 36px;
      }
      span{
        font-size: 16px;
      }
    }
  }
}
.active{
  color:red;
}
</style>
