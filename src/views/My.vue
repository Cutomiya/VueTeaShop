<template>
  <div class="my">
    <header>
      <div class="login" @click="login" v-if="!loginStatus">登录/注册</div>
      <div class="userInfo" v-if="loginStatus">
        <img :src="change(userInfo.imgUrl)" alt="">
        <span>{{ userInfo.nickname }}</span>
      </div>
    </header>
    <section>
      <ul>
        <li>地址管理</li>
        <li @click="loginOut">退出登录</li>
      </ul>
    </section>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/common/TabBar.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'My',
  components: {
    tabBar
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      loginStatus: state => state.user.loginStatus
    })
  },
  methods: {
    ...mapMutations(['loginOut']),
    change (item) {
      return require('@/assets/images/icons/' + item)
    },
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
      .userInfo{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border:3px solid white;
        }
        span{
          padding-top:6px;
          color:white;
        }
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
