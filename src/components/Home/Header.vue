<template>
  <header>
    <h1>
      <img src="@/assets/logo.png" alt="">
    </h1>
    <div class="search">
      <span class="iconfont icon-fangdajing"></span>
      猜你喜欢的
    </div>
    <div class="kefu">
      <i class="iconfont icon-kefu"></i>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
header{
  touch-action: none;
  background-color:red;
  display:flex;
  justify-content:space-around;
  align-items: center;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 60px;
  h1{
    width: 60px;
    height: 60px;
    padding:4px;
    box-sizing: border-box;
    position:absolute;
    left:5px;
    img{
      width: 52px;
      // height: 100%;
      position:absolute;
    }
  }
  .search{
    display:flex;
    position: absolute;
    width: 240px;
    height: 40px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    padding:5px;
    box-sizing: border-box;
    align-items: center;
    font-size: 16px;
    text-align: center;
    color:#ccc;
    span{
      font-size: 20px;
      margin: 5px;;
      color:#ccc;
    }
  }
  .kefu{
    position: absolute;
      right:10px;
    i{
      font-size: 28px;
      color: #ffffff;
    }
  }
}
</style>
