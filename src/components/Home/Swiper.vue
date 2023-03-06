<template>
  <div class="Swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="change(item.url)" alt="">
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 1000,
        speed: 500,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
      // swiperList: [
      //   {
      //     id: 1,
      //     url: require('@/assets/images/swiper/swiper1.png')
      //   },
      //   {
      //     id: 2,
      //     url: require('@/assets/images/swiper/swiper2.png')
      //   },
      //   {
      //     id: 3,
      //     url: require('@/assets/images/swiper/swiper3.png')
      //   }
      // ]
    }
  },
  methods: {
    change (item) {
      return require('@/assets/images/swiper/' + item)
    }
  }
}
</script>

<style lang="less" scoped>
.Swiper{
  touch-action: none;
  position: relative;
  .swiper-pagination{
    width: 100%;
    // position: absolute;
    bottom:10px;
  }
  ::v-deep .swiper-pagination-bullet-active{
    background-color: red;
  }
  img{
    // height: 217px;
    width: 100%;
    background-size:auto;
    background-position: center;
    bottom:-40px;
  }
}
</style>
