<template>
<div>
    <h3>商品详情</h3>
  <div class="detail">
    <div class="detail-image">
      <img :src="prodList[id].src" alt="">
      <h3>{{prodList[id].name}}</h3>
    </div>
    <div class="detail-text">
      <h3>食品介绍</h3>
      <p>{{prodList[id].content}}</p>
      <h3>使用材料</h3>
      <p>{{prodList[id].material}}</p>
      <p>{{prodList[id].num}}</p>
      <el-button type="danger" class="detail-btn" @click="buy(prodList[id])">立即购买</el-button>
      <el-button type="danger" class="detail-btn" @click="joinCart(prodList[id])">加入购物车</el-button>
    </div>
  </div>
  </div>
</template>

<script>
import { user,prodList } from '../../mock.js'
export default {
  name:'detail',
  data(){
    return {
      prodList,
      id:'',
      clickNum:0,
      src:require("../../../static/eggPuff.jpg")
    };
  },
  methods:{
    joinCart(item){
      item.num = item.num + 1
      this.$router.push({
        name:'cart',
        query:{
          clickNum:encodeURIComponent(item.num),
          id:encodeURIComponent(item.id)
        }
      })
    },
    buy(){

    }
  },
  mounted(){
    this.id = decodeURIComponent(this.$route.query.id)
    console.log(this.id)
    console.log(prodList[this.id])
  }

}
</script>

<style scoped>
.detail{
  display: flex;
  width: 80%;
  border:1px solid #ddd;
  margin: 0 auto;
  padding: 10px;
}
.detail-image img{
  width: 400px;
  height: 300px;
}
.detail-text{
  margin: 10px 20px;
  text-align: left;
}
.detail-btn{
  margin-top: 20px;
}
</style>