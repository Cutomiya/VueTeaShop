<template>
  <div class="login container">
    <Header>
      <span>注册</span>
    </Header>
    <section class="section">
      <div class="tel">
        <input type="text" v-model="userTel" placeholder="请输入手机号" pattern="[0-9]*">
      </div>
      <div class="check">
        <input type="text" placeholder="请输入图形验证码" pattern="[0-9]*">
        <div style="width: 30%; height: 100%; background-color: red;"></div>
      </div>
      <div class="mess">
        <input type="text" placeholder="请输入短信验证码" pattern="[0-9]*">
        <button @click="getMess" :disabled="disabled">{{codeMsg}}</button>
      </div>
      <div>
        <input v-model="userPwd" type="text" placeholder="请设置密码" pattern="[0-9]*" style="width: 100%;">
      </div>
      <div class="btn" @click="login">注 册</div>
    </section>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/common/TabBar.vue'
import Header from '@/views/Login/Header.vue'
import { Toast } from 'mint-ui'
import Http from '@/common/api/request.js'
export default {
  name: 'Login',
  components: {
    tabBar,
    Header
  },
  data () {
    return {
      userTel: '',
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
      disabled: false,
      codeNum: 6,
      codeMsg: '获取短信验证码',
      userPwd: ''
    }
  },
  methods: {
    goUserLogin () {
      this.$router.push('/userLogin')
    },
    getMess () {
      if (!this.validate('userTel')) {
        return false
      }
      Http.$axios({
        url: '/api/code',
        method: 'POST',
        params: {
          userTel: this.userTel
        }
      }).then(res => {
      })
      this.disabled = true
      let timer = setInterval(() => {
        --this.codeNum
        this.codeMsg = `重新发送 ${this.codeNum}`
      }, 1000)
      setTimeout(() => {
        clearInterval(timer)
        this.codeNum = 6
        this.disabled = false
        this.codeMsg = '获取短信验证码'
      }, 6000)
    },
    validate (key) {
      if (!this.rule[key].rule.test(this[key])) {
        Toast(this.rule[key].msg)
        return false
      }
      return true
    },
    login () {
      if (!this.validate('userTel')) {
        return false
      }
      if (!this.validate('userPwd')) {
        return false
      }
      Http.$axios({
        url: '/api/register',
        method: 'POST',
        params: {
          userTel: this.userTel,
          userPwd: this.userPwd
        }
      }).then(res => {
        Toast(res.data.msg)
        // console.log(res)
        if (res.data.success) this.$router.push({ path: '/login' })
      })
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
  .check{
    display: flex;
    input{
      flex:1;
    }
    div{
      margin:0;
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
}
</style>
