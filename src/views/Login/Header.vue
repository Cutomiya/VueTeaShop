<template>
  <div class="header">
    <div class="return">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div>
      <slot>
        <span>登录</span>
      </slot>
    </div>
    <div class="btn">
        <img src="@/assets/images/tabBar/home1.png">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: red;
  display: flex;
  justify-content:space-between;
  color: white;
  align-items:center;
  .return{
      width: 40px;
      box-sizing: border-box;
      padding-left:15px;
      i{
        font-size: 32px;
      }
    }
  .btn{
    padding-right:10px;
    img{
      width: 30px;
    }
  }
}
</style>
