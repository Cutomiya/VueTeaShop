<template>
  <div class="ad">
    <img :src="change(advList[0].url)" alt="">
  </div>
</template>

<script>
export default {
  props: {
    advList: Array
  },
  methods: {
    change (item) {
      return require('@/assets/images/swiper/' + item)
    }
  }
}
</script>

<style lang="less" scoped>
.ad{
  width: 100%;
  height: 200px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
