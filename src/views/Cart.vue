<template>
  <div class="cart">
    <header>
      <div class="return">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="itp">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜您喜欢的</span>
      </div>
      <div class="btn">
        <img src="@/assets/images/tabBar/home1.png">
      </div>
    </header>
    <section>
      <div class="left">
        <ul>
          <li class="active">推荐</li>
          <li>嗯哼</li>
          <li>哈哈</li>
          <li>拉拉</li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li class="shop-list">
            <h2>推荐</h2>
            <ul>
              <li>
                <img src="@/assets/images/icons/星球.png" alt="">
                <span>星球</span>
              </li>
              <li>
                <img src="@/assets/images/icons/星球.png" alt="">
                <span>星球</span>
              </li>
              <li>
                <img src="@/assets/images/icons/星球.png" alt="">
                <span>星球</span>
              </li>
              <li>
                <img src="@/assets/images/icons/星球.png" alt="">
                <span>星球</span>
              </li>
              <li>
                <img src="@/assets/images/icons/星球.png" alt="">
                <span>星球</span>
              </li>
              <li>
                <img src="@/assets/images/icons/星球.png" alt="">
                <span>星球</span>
              </li>
              <li>
                <img src="@/assets/images/icons/星球.png" alt="">
                <span>星球</span>
              </li>
              <li>
                <img src="@/assets/images/icons/星球.png" alt="">
                <span>星球</span>
              </li>
              <li>
                <img src="@/assets/images/icons/星球.png" alt="">
                <span>星球</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/common/TabBar.vue'
export default {
  name: 'Cart',
  components: {
    tabBar
  }
}
</script>

<style lang="less" scoped>
.cart{
  display:flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  header{
    display:flex;
    justify-content: space-between;
    background-color: red;
    height: 60px;
    width: 100%;
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
    .itp{
      width: 72%;
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
      span{
        color:#ccc;
        font-size: 16px;
      }
    }
  }
  section{
    flex:1;
    overflow:hidden;
    display:flex;
    .left{
      width: 89px;
      background-color: white;
      overflow:hidden;
      border-right:1px solid #ccc;
      ul{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li{
          width: 100%;
          line-height: 40px;
          text-align: center;
          font-size:16px;
          &.active{
            border-left: 8px solid red;
            color:red;
          }
        }
      }
    }
    .right{
      flex:1;
      overflow:hidden;
      ul{
        .shop-list{
          text-align: center;
          h2{
            font-size:22px;
            padding:10px 0px;
            font-weight:400;
          }
          ul{
            display:flex;
            flex-wrap: wrap;
            li{
              display:flex;
              flex-direction: column;
              justify-content:center;
              align-items: center;
              width: 33%;
              padding:10px 0px;
              img{
                width: 60px;
              }
              span{
                font-size:16px;
                margin-top:5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
