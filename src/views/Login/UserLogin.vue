<template>
  <div class="login container">
    <Header></Header>
    <section class="section">
      <div class="tel">
        <input type="text" v-model="userTel" placeholder="请输入手机号" pattern="[0-9]*">
      </div>
      <div class="mess">
        <input type="text" v-model="userPwd" placeholder="请输入密码" pattern="[0-9]*">
      </div>
      <div class="btn" @click="login">登 录</div>
      <div class="tab">
        <span @click="goUserLogin">短信登录</span>
        <span @click="find">找回密码</span>
        <span @click="register">快速注册</span>
      </div>
    </section>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/common/TabBar.vue'
import Header from '@/views/Login/Header.vue'
import { Toast } from 'mint-ui'
import Http from '@/common/api/request.js'
import { mapMutations } from 'vuex'
export default {
  name: 'UserLogin',
  components: {
    tabBar,
    Header
  },
  methods: {
    ...mapMutations(['LOGIN']),
    goUserLogin () {
      this.$router.push('/login')
    },
    login () {
      if (!this.validate('userTel')) {
        return false
      }
      if (!this.validate('userPwd')) {
        return false
      }
      Http.$axios({
        url: '/api/login',
        method: 'POST',
        params: {
          userTel: this.userTel,
          userPwd: this.userPwd
        }
      }).then(res => {
        Toast(res.data.msg)
        if (!res.data.success) return false
        this.LOGIN(res.data.data) // 将数据存储到vuex里
        this.$router.push({ path: '/my' })
      })
    },
    validate (key) {
      if (!this.rule[key].rule.test(this[key])) {
        Toast(this.rule[key].msg)
        return false
      }
      return true
    },
    register () {
      this.$router.push('/Register')
    },
    find () {
      this.$router.push('/recover')
    }
  },
  data () {
    return {
      rule: { // 验证规则
        userTel: {
          rule: /^1[23456789]\d{9}$/,
          msg: '手机号不能为空，并且是以1开头的11位数字'
        },
        userPwd: {
          rule: /^\w{6,12}$/,
          msg: '密码不能为空，并且要求6~12位'
        }
      },
      userTel: '',
      userPwd: ''
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
