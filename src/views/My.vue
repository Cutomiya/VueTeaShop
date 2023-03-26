<template>
  <div class="my">
    <header>
      <div class="login" @click="login">登录/注册</div>
    </header>
    <section>
      <ul>
        <li>地址管理</li>
      </ul>
    </section>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/common/TabBar.vue'
export default {
  name: 'My',
  components: {
    tabBar
  },
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
  .my{
    display:flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    header{
      width: 100%;
      height: 160px;
      background-color: rgb(255, 0, 0);
      display:flex;
      justify-content: center;
      align-items: center;
      .login{
        background-color: rgb(245, 161, 5);
        color:white;
        border-radius: 6px;
        font-size: 18px;
        padding:4px 8px;
      }
    }
    section{
      flex:1;
      overflow: hidden;
      ul li{
        padding:10px;
        font-size:18px;
      }
    }
  }
</style>
