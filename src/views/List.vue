<template>
  <div class="List container">
    <header>
      <div class="return">
        <i class="iconfont icon-fanhui" @click="re"></i>
      </div>
      <span class="itp">购物车</span>
      <div class="btn">管理</div>
    </header>
    <section class="section">
      <div class="cart-title">
        <van-checkbox v-model="checked"></van-checkbox>
        <span>商品</span>
      </div>
      <ul>
        <li>
          <div class="check">
            <van-checkbox v-model="checked"></van-checkbox>
          </div>
          <h2>
            <img src="@/assets/images/icons/头像.png" alt="">
          </h2>
          <div class="goods">
            <div class="goods-title">
              <span>这里是名字666666666666哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
              <i class="iconfont icon-lajitong"></i>
            </div>
            <div class="goods-price">￥ 12121</div>
            <van-stepper v-model="value" integer/>
          </div>
        </li>
        <li>
          <div class="check">
            <van-checkbox v-model="checked"></van-checkbox>
          </div>
          <h2>
            <img src="@/assets/images/icons/头像.png" alt="">
          </h2>
          <div class="goods">
            <div class="goods-title">
              <span>这里是名字666666666666哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
              <i class="iconfont icon-lajitong"></i>
            </div>
            <div class="goods-price">￥ 12121</div>
            <van-stepper v-model="value" integer/>
          </div>
        </li>
      </ul>
    </section>
    <footer>
      <div class="radio">
          <van-checkbox v-model="checked"></van-checkbox>
      </div>
      <div class="total">
        <div>共有 <span class="total-active">32</span> 件商品</div>
        <div>
          <span>总计：</span>
          <span class="total-active">￥128.00</span>
        </div>
      </div>
      <div class="pay">去结算</div>
    </footer>
  </div>
</template>

<script>
import { Stepper, Checkbox } from 'vant'
import 'vant/lib/checkbox/style'
import 'vant/lib/stepper/style'
export default {
  name: 'List',
  methods: {
    re () {
      this.$router.back()
    }
  },
  data () {
    return {
      checked: true,
      value: 1
    }
  },
  components: {
    VanCheckbox: Checkbox, // 注册组件
    VanStepper: Stepper
  }
}
</script>

<style lang="less" scoped>
header{
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
    font-size: 16px;
    padding-right:20px;
  }
}
section{
  background-color: #f5f5f5;
  .cart-title{
    padding:14px;
    display: flex;
    span{
      padding:0px 16px;
      font-weight: 500;
      font-size:20px;
    }
  }
  ul{
    display: flex;
    flex-direction:column;
    li{
      display: flex;
      justify-content:space-between;
      align-items:center;
      padding:6px 10px;
      background-color: #fff;
      margin:6px 0px;
      img{
        width: 74px;
        height: 74px;
        padding:0px 10px;
      }
      .goods{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        font-size:14px;
        .goods-title{
          display: flex;
          span{

          }
          i{
            font-size:20px;
            margin:3px;
          }
        }
        .goods-price{
          padding:3px 0px;
          color:red;
        }
        ::v-deep .van-stepper{
          text-align:right;
        }
      }
    }
  }
}
footer{
  display: flex;
  justify-content:space-between;
  align-items:center;
  height: 50px;
  border-top:1px solid #ccc;
  .radio{
    padding:14px;
  }
  .total{
    font-size:16px;
    padding-right:100px;
    .total-active{
      color:red;
    }
  }
  .pay{
    width: 80px;
    text-align:center;
    line-height: 50px;
    font-size:16px;
    color:#fff;
    background-color:red;
  }
}
</style>
