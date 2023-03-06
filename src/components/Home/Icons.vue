<template>
  <ul class="iconBox">
    <li v-for='item in iconList' :key='item.id'>
      <img :src="change(item.url)" alt="">
      <span>{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    iconList: Array
  },
  methods: {
    change (item) {
      return require('@/assets/images/icons/' + item)
    }
  }
  // data () {
  //   return {
  //     iconList: [
  //       {
  //         id: 1,
  //         name: '汉堡',
  //         url: require('@/assets/images/icons/01.png')
  //       },
  //       {
  //         id: 2,
  //         name: '果茶',
  //         url: require('@/assets/images/icons/02.png')
  //       }, {
  //         id: 3,
  //         name: '早茶',
  //         url: require('@/assets/images/icons/03.png')
  //       }, {
  //         id: 4,
  //         name: '咖啡',
  //         url: require('@/assets/images/icons/04.png')
  //       }, {
  //         id: 5,
  //         name: '水果',
  //         url: require('@/assets/images/icons/05.png')
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="less" scoped>
.iconBox{
  // height: 60px;
  // background-color: #fff;
  width: 100%;
  display: flex;
  // overflow: auto;
  li{
    // width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex:1;
    img{
      width: 40px;
      margin-bottom:5px;
    }
    span{
      font-size:16px;
    }
  }
}
</style>
