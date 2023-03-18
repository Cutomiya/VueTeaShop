<template>
  <div class="detail">
    <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img :src="item.url" alt="">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <div class="name">
      <h1>这里是商品名字</h1>
      <div>商品介绍</div>
    </div>
    <div class="price">
      <div class="box1">
        <span>￥</span>
        <b>233</b>
      </div>
      <div class="box2">
        <span>￥</span>
        <del>666</del>
      </div>
    </div>
    <footer>
        <div class="box1">
          <div>
            <i class="iconfont icon-kefu1"></i>
            <span>客服</span>
          </div>
          <div>
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
          </div>
          <div>
            <i class="iconfont icon-shoucang"></i>
            <span>收藏</span>
          </div>
        </div>
        <div class="box2">
          <div class="addCar">加入购物车</div>
          <div class="buy">立即购买</div>
        </div>
    </footer>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: 1000,
        speed: 500,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction' // 改为数字显示
        }
      },
      swiperList: [
        {
          id: 1,
          url: require('@/assets/images/pic/rec1.jpg')
        },
        {
          id: 2,
          url: require('@/assets/images/pic/rec2.jpg')
        },
        {
          id: 3,
          url: require('@/assets/images/pic/rec3.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.detail{
  .swiper{
    // touch-action: none;
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    .swiper-pagination{
      width: 100%;
      bottom:10px;
      text-align: right;
      left:-20px;
      font-size:16px;
      color:#FFFFFF;
    }
    ::v-deep .swiper-pagination-bullet-active{
      background-color: rgb(33, 164, 240);
    }
    img{
      width: 100%;
      background-size:contain;
      background-position: 50%;
    }
  }
  footer{
    display: flex;
    width: 100%;
    height: 50px;
    position: fixed;
    left:0;
    bottom:0;
    background-color: white;
    border-top: 1px solid #ccc;
    justify-content: center;
    align-items: center;
    .box1{
      width: 40%;
      height: 100%;
      display:flex;
      justify-content: center;
      div{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        i{
          font-size:22px;
          color:#797979;
        }
        span{
          font-size:14px;
          color:#797979;
        }
      }
    }
    .box2{
      width: 60%;
      height: 100%;
      display: flex;
      div{
        width: 50%;
        height: 100%;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        &.addCar{
          background-color: rgb(252, 155, 11);
        }
        &.buy{
          background-color:red;
        }
      }
    }
  }
  .name{
    padding:18px 10px;
    border-bottom:1px solid #ccc;
    h1{
      font-size:22px;
      font-weight:600;
    }
    div{
      font-size:16px;
      color:#999999;
    }
  }
  .price{
    padding:18px 10px;
    .box1{
      color:red;
      span{
        font-size:14px;
      }
    }
    .box2{
      color:#999999;
      font-size:16px;
    }
  }
}
</style>
