<template>
  <div class="detail">
    <header>
      <div class="return" v-show="isShow" @click="back">
        <i class="iconfont icon-fanhui"></i>
        <i class="iconfont icon-fangdajing"></i>
      </div>
      <div class="bar" v-show="!isShow" :style="styleOption">
        <div class="fanhui">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="about">
          <span>商品详情</span>
          <span>商品评价</span>
        </div>
        <div class="look">
          <i class="iconfont icon-fangdajing"></i>
        </div>
      </div>
    </header>
    <section ref="middle">
      <div class="box">
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
            <span>价格:</span>
            <del>￥666</del>
          </div>
        </div>
        <div>
          <img style="width: 100%;height: 500px;" src="@/assets/images/pic/rec1.jpg" alt="">
          <img style="width: 100%;height: 500px;" src="@/assets/images/pic/rec2.jpg" alt="">
          <img style="width: 100%;height: 500px;" src="@/assets/images/pic/rec3.jpg" alt="">
          <img style="width: 100%;height: 500px;" src="@/assets/images/pic/rec4.jpg" alt="">
        </div>
      </div>
    </section>
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
import BetterScroll from 'better-scroll'
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
      ],
      isShow: true,
      betterScroll: [],
      styleOption: {}
    }
  },
  mounted () {
    this.betterScroll = new BetterScroll(this.$refs.middle, {
      movable: true,
      zoom: true,
      observeDOM: true,
      click: true,
      bounce: false, // 取消回弹
      probeType: 3 // 默认为0不派发scroll事件
    })
    this.betterScroll.on('scroll', (pos) => {
      let height = Math.abs(pos.y)
      let opa = height / 200
      opa = opa > 1 ? 1 : opa
      // console.log(opa)
      this.styleOption = {
        opacity: opa
      }
      if (height > 50) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    })
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  created () {
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="less" scoped>
.detail{
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  header{
    position:fixed;
    width: 100%;
    height: 46px;
    top:0px;
    left:0px;
    z-index:999;
    .return{
      width: 100%;
      height: 46px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      i{
        margin:10px;
        width: 36px;
        height: 36px;
        font-size:20px;
        text-align: center;
        line-height: 36px;
        color:#fff;
        background-color: rgba(0,0,0,0.3);
        border-radius: 20px;
      }
    }
    .bar{
      background-color: #fff;
      width: 100%;
      height: 46px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .about{
        font-size:18px;
        span{
          padding:10px;
        }
      }
      i{
        font-size:20px;
        padding:10px;
      }
    }
  }
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
      font-size:14px;
    }
  }
  section{
    flex: 1;
    overflow: hidden;
  }
}
</style>
