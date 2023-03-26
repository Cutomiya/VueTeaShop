<template>
  <div class="login container">
    <Header></Header>
    <section class="section">
      <div class="tel">
        <input type="text" placeholder="请输入手机号" pattern="[0-9]*">
      </div>
      <div class="mess">
        <input type="text" placeholder="请输入短信验证码" pattern="[0-9]*">
        <button>获取短信验证码</button>
      </div>
      <div class="btn">登 录</div>
      <div class="tab">
        <span @click="goUserLogin">密码登录</span>
        <span>快速注册</span>
      </div>
    </section>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/common/TabBar.vue'
import Header from '@/views/Login/Header.vue'
export default {
  name: 'Login',
  components: {
    tabBar,
    Header
  },
  data () {
    return {}
  },
  methods: {
    goUserLogin () {
      this.$router.push('/userLogin')
    }
  }
}
</script>

<style lang="less" scoped>
section{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  div{
    width: 336px;
    height: 44px;
    margin: 14px 0px;
  }
  input{
    box-sizing: border-box;
    padding:0px 10px;
    line-height: 44px;
    background-color: #FFFFFF;
    border:1px solid #ccc;
  }
  .tel{
    margin-top: 24px;
    input{
      width: 100%;
    }
  }
  .mess{
    display:flex;
    input{
      flex:1;
    }
    button{
      padding:0px 8px;
      line-height: 44px;
      color: #fff;
      background-color: red;
      border:0;
      border-radius: 6px;
    }
  }
  .btn{
    height: 44px;
    line-height: 44px;
    background-color: red;
    border:0;
    color: #fff;
    font-size: 20px;
    border-radius: 6px;
    text-align: center;
  }
  .tab{
    display: flex;
    justify-content:space-between;
    font-size:16px;
  }
}
</style>
