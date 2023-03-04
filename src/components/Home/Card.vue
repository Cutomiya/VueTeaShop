<template>
  <div class="title">
    <slot>
      <span></span>
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
    font-size: 24px;
    font-weight: 400;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    left:-20%;
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
    right:-20%;
  }
}
</style>
