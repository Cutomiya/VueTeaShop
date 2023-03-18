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
    <section ref="box">
      <div class="left" ref="le">
        <ul class="leftList">
          <li v-for="item in leftData" :key="item.id" @click="goScroll(item.id)" :class="{active:item.id === currentIndex}">{{ item.name }}</li>
        </ul>
      </div>
      <div class="right" ref="ri">
        <div>
          <ul v-for="list in rightData" :key="list.id" class="list">
            <li class="shop-list" v-for="item in list" :key="item.id">
              <h2>{{ item.name }}</h2>
              <ul>
                <li v-for="i in item.list" :key="i.id">
                  <img v-lazy="change(i.url)" alt="">
                  <span>{{ i.name }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/common/TabBar.vue'
import Http from '@/common/api/request.js'
import BetterScroll from 'better-scroll'
export default {
  name: 'Cart',
  components: {
    tabBar
  },
  methods: {
    async getData () {
      await Http.$axios({
        url: '/api/goods/cartList'
      }).then(res => {
        let ans = res.data
        // console.log(ans)
        ans.forEach(i => {
          this.leftData.push({
            id: i.id,
            name: i.name
          })
          this.rightData.push(i.data)
        })
        /* eslint-disable no-new */
        setTimeout(() => {
          let height = 0 // 当前高度
          this.allHight.push(height) // 推入数组，算出每一项的区间
          let uls = this.$refs.ri.getElementsByClassName('list')
          // console.log(this.$refs.ri.getElementsByClassName('list'))
          // console.log(uls)
          Array.from(uls).forEach(i => {
            // 计算每一项的高度
            height += i.clientHeight
            // console.log(i.clientHeight)
            this.allHight.push(height)
          })
          // console.log(this.allHight)
          // 以下用于解决BS内子元素小于父元素仍会滚动的问题
          let leftHeight = 0
          let le = this.$refs.le.getElementsByClassName('leftList')
          // console.log(le)
          Array.from(le).forEach(i => {
            leftHeight += i.clientHeight
          })
          // console.log(leftHeight)
          // console.log(this.$refs.box.getElementsByClassName('left'))
          let leftAllHeight = this.$refs.box.getElementsByClassName('left')[0].clientHeight
          if (leftAllHeight > leftHeight) {
            // console.log(leftAllHeight)
            // console.log(leftHeight)
            this.status = false
          }
          new BetterScroll(this.$refs.le, {
            movable: this.status,
            zoom: true,
            observeDOM: true,
            click: true
          })
          // 右侧驱动左侧
          this.rightBScroll.on('scroll', (pos) => {
            // console.log(pos)
            this.scrollY = Math.abs(pos.y)
          })
        })
      })
    },
    change (item) {
      return require('@/assets/images/icons/' + item)
    },
    goScroll (index) {
      // console.log(index)
      this.rightBScroll.scrollTo(0, -this.allHight[index], 600)
    }
  },
  created () {
    this.getData()
  },
  data () {
    return {
      leftData: [],
      rightData: [],
      rightBScroll: '',
      allHight: [], // 记录每一个元素的高度和初始高度0
      status: true,
      scrollY: '' // 右侧滚动距离
    }
  },
  computed: {
    currentIndex () {
      return this.allHight.findIndex((item, index) => {
        // console.log(item, index)
        return this.scrollY >= item && this.scrollY < this.allHight[index + 1]
      })
    }
  },
  mounted () {
    this.rightBScroll = new BetterScroll(this.$refs.ri, {
      movable: true,
      zoom: true,
      observeDOM: true,
      click: true,
      probeType: 3 // 默认为0不派发scroll事件
    })
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
