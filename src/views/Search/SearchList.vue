<template>
  <div class="list">
    <div class="header">
      <Header></Header>
      <ul>
        <li>
          <div>综合</div>
        </li>
        <li>
          <div>价格</div>
          <div class="search-btn">
            <i class="iconfont icon-shangjiantou"></i>
            <i class="iconfont icon-xiajiantou"></i>
          </div>
        </li>
        <li>
          <div>销量</div>
          <div class="search-btn">
            <i class="iconfont icon-shangjiantou"></i>
            <i class="iconfont icon-xiajiantou"></i>
          </div>
        </li>
      </ul>
    </div>
    <section>
      <ul>
        <li>
          <img src="@/assets/images/pic/rec1.jpeg" alt="">
          <h3>个咖啡店监管科水电费进度款司法局圣诞快乐富家大室</h3>
          <div class="buy">
            <div>
              <span>￥</span>
              <b>4545</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
        <li>
          <img src="@/assets/images/pic/rec1.jpeg" alt="">
          <h3>当升科技的撒跨境电商卡德加撒库拉的</h3>
          <div class="buy">
            <div>
              <span>￥</span>
              <b>4545</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
        <li>
          <img src="@/assets/images/pic/rec1.jpeg" alt="">
          <h3>56565656565656565656565656565656</h3>
          <div class="buy">
            <div>
              <span>￥</span>
              <b>4545</b>
            </div>
            <div>立即购买</div>
          </div>
        </li>
      </ul>
    </section>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar.vue'
import Header from '@/components/Search/Header.vue'
export default {
  components: {
    TabBar,
    Header
  }
}
</script>

<style lang="less" scoped>
.list{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
  overflow: hidden;
  .header{
    ul{
      display: flex;
      justify-content: space-around;
      padding:4px 0;
      font-size:16px;
      li{
        display:flex;
        align-items: center;
        div{
          padding:4px;
        }
        .search-btn{
          display:flex;
          flex-direction:column;
          i{
            font-size:6px;
          }
        }
      }
    }
  }
  section{
    flex:1;
    overflow:hidden;
    ul{
      display:flex;
      flex-wrap:wrap;
      justify-content: space-between;
      li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        // background-color: aqua;
        img{
          width: 100%;
          padding:4px;
          box-sizing: border-box;
        }
        h3{
          width: 100%;
          padding:4px;
          box-sizing: border-box;
          font-size: 16px;
          font-weight: 500;
          overflow:hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .buy{
          display: flex;
          justify-content: space-between;
          font-size:20px;
          width: 100%;
          box-sizing: border-box;
          font-size: 16px;
          padding:10px 4px;
          div:last-child{
            color:white;
            background-color:red;
            border-radius: 6px;
            padding:2px 6px;
          }
          div:first-child{
            span{
              color:red;
              font-weight:500;
            }
            b{
              font-size:18px;
              color:red;
              font-weight:400;
            }
          }
        }
      }
    }
  }
}
</style>
