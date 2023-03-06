<template>
  <div class="recommend">
    <Card>
      <span>火爆推荐</span>
    </Card>
    <ul>
      <li v-for="item in recList" :key="item.id">
        <h2>
          <img :src="change(item.url)" alt="">
        </h2>
        <div>
          <span class="name">{{ item.name }}</span>
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
    recList: Array
  },
  // data () {
  //   return {
  //     recList: [
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
.recommend{
  margin-top:10px;
  text-align: center;
  ul{
    li{
      background-color: rgb(243, 243, 243);
      position: relative;
      display: flex;
      height: 120px;
      align-items: center;
      margin: 10px 5px;
      border-radius: 8px;
      h2{
        position: absolute;
        top: 0;
        img{
          width: 120px;
          height: 120px;
        }
      }
      div{
        display: flex;
        flex-direction: column;
        position: absolute;
        right:0;
        top:0;
        text-align:right;
        padding:10px;
        .name{
          // width: 100%;
          padding-left:120px;
          display: block;
          font-weight: 400;
          font-size: 20px;
          margin-bottom: 10px;
        }
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
