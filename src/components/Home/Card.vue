<template>
  <div class="title">
    <slot>
      <span>火爆推荐</span>
    </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.title{
  position: relative;
  span{
    font-size: 30px;
    font-weight: 400;
    position: relative;
  }
  span::after{
    content:"";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: block;
    background-color: #c4c4c4;
    top:50%;
    margin-top:-4px;
    left:-12%;
  }
  span::before{
    content:"";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: block;
    background-color: #c4c4c4;
    top:50%;
    margin-top:-4px;
    right:-12%;
  }
}
</style>
