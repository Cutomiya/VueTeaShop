<template>
  <div class="like">
    <Card>
      <span>猜你喜欢</span>
    </Card>
    <ul>
      <li v-for="item in likeList" :key="item.id">
        <h2>
          <img v-lazy="change(item.url)" alt="">
        </h2>
        <span class="name">{{ item.name }}</span>
        <div class="priceBox">
          <span class="price">￥{{ item.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/Home/Card.vue'
export default {
  props: {
    likeList: Array
  },
  // data () {
  //   return {
  //     likeList: [
  //       {
  //         id: 1,
  //         name: '冰茶超级好喝der~我超想喝的捏捏',
  //         url: require('@/assets/images/pic/rec1.jpeg'),
  //         price: '9'
  //       }, {
  //         id: 2,
  //         name: '绿茶也是可以的啦~我也很想喝的捏',
  //         url: require('@/assets/images/pic/rec2.jpg'),
  //         price: '23'
  //       }, {
  //         id: 3,
  //         name: '红茶我超爱',
  //         url: require('@/assets/images/pic/rec3.jpg'),
  //         price: '64'
  //       }, {
  //         id: 4,
  //         name: '奶盖捏捏nie',
  //         url: require('@/assets/images/pic/rec4.jpg'),
  //         price: '12'
  //       }
  //     ]
  //   }
  // },
  components: {
    Card
  },
  methods: {
    change (item) {
      return require('@/assets/images/pic/' + item)
    }
  }
}
</script>

<style lang="less" scoped>
.like{
  text-align: center;
  ul{
    margin-top:10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    li{
      width: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      h2{
        width: 48vw;
        height: 26vh;
        img{
          width: 100%;
          height: 100%;
          background-size:contain
        }
      }
      .name{
        margin-top:4px;
        text-align: left;
        width: 180px;
        display: block;
        font-weight: 400;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .priceBox{
        width: 180px;
        text-align: left;
        .price{
          font-size: 24px;
          color: red;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
