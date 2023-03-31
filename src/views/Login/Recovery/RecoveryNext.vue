<template>
  <div class="box container">
    <Header>
      <span>设置新密码</span>
    </Header>
    <section class="section">
      <div class="mess">
        <input type="text" v-model="newPwd" placeholder="请输入新密码" pattern="[0-9]*">
      </div>
      <div class="btn" @click="sure">确 认</div>
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
  components: {
    tabBar,
    Header
  },
  data () {
    return {
      rule: { // 验证规则
        newPwd: {
          rule: /^\w{6,12}$/,
          msg: '密码不能为空，并且要求6~12位'
        }
      },
      newPwd: ''
    }
  },
  methods: {
    validate (key) {
      if (!this.rule[key].rule.test(this[key])) {
        Toast(this.rule[key].msg)
        return false
      }
      return true
    },
    sure () {
      if (!this.validate('newPwd')) {
        return false
      }
      Http.$axios({
        url: '/api/setPassword',
        method: 'POST',
        params: {
          userPwd: this.newPwd,
          userTel: this.$route.params.userTel
        }
      }).then(res => {
        if (res.data.success) {
          Toast(res.data.msg)
          this.$router.push({
            path: '/login'
          })
        }
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
}
</style>
