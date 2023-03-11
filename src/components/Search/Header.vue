<template>
  <div class="header">
    <div class="return">
      <i class="iconfont icon-fanhui" @click="re"></i>
    </div>
    <div class="itp">
      <i class="iconfont icon-fangdajing"></i>
      <form action="" onsubmit="return false" @keyup.enter="goSearch">
        <input type="search" placeholder="搜索你喜欢的商品..." v-model="searchVal">
      </form>
    </div>
    <div class="btn" @click="goSearch">搜索</div>
  </div>
</template>

<script>
export default {
  methods: {
    re () {
      this.$router.back()
    },
    goSearch () {
      if (!this.searchVal) return
      if (!localStorage.getItem('searchList')) {
        localStorage.setItem('searchList', '[]') //  获取指定key本地存储数据的值
      } else {
        this.searchArr = JSON.parse(localStorage.getItem('searchList')) // 把json格式的字符串转为js中的数组或对象
      }
      this.searchArr.unshift(this.searchVal) // 增加数据
      let newArr = new Set(this.searchArr) // es6去重
      localStorage.setItem('searchList', JSON.stringify(Array.from(newArr))) // 给本地储存赋值,es6转换为真正的数组
      this.$router.push({
        name: 'SearchList'
      })
    }
  },
  data () {
    return {
      searchVal: '',
      searchArr: [],
      searList: []
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  height: 60px;
  background-color: red;
  color: white;
  display: flex;
  justify-content:space-between;
  align-items:center;
  .return{
    width: 60px;
    box-sizing: border-box;
    padding-left:15px;
    i{
      font-size: 32px;
    }
  }
  .btn{
    font-size: 20px;
    padding-right:20px;
  }
  .itp{
    width: 60%;
    height: 40px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    display:flex;
    padding:5px;
    box-sizing: border-box;
    align-items: center;
    text-align: center;
    i{
      font-size: 20px;
      margin: 5px;
      color:#ccc;
    }
    form{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input{
      font-size: 16px;
      width: 100%;
      padding-right: 5px;
    }
  }
}
</style>
