<template>
<div>
  <template v-if="goods.length==0">
      <div class="panel"  @click="gotoHome">
          <p>您目前还没有订单，请前往首页添加商品</p>
      </div>
    </template>
    <template v-else>
  <div class="panel">
      <h3 class="panel-title">我的订单</h3>
    <div class="panel-body">
      <table class="table">
        <thead>
          <tr>
            <th>订单编号</th>
            <th class="name">商品名称</th>
            <th>商品单价</th>
            <th>购买数量</th>
            <th>商品状态</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="(item,k) in goods" :key="k" class="tbody-tr">
            <td>{{item.number}}</td><!--订单编号-->
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.num}}</td>
            <td>{{item.state}}</td>
            <td>{{item.price*item.num}}</td>
            <td>
              <div class="btn-group">
                <button @click="del(k)" type="button" class="btn-del">删除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="panel-footer">
      <button @click="gotoHome" class="btn-del">继续购物</button>
    </div>
  </div>
  </template>
  </div>
</template>
<script>
import { prodList,goods } from '../../mock.js'
export default {
  name: "order",
  data() {
    return {
      num: 1,
      clickNum: 0,
      goods: [{id:0,number:674450879,name:"核桃酥",price:23,state:"已支付",num:1}],
      id:''
    };
  },
  methods: {
    gotoHome(){ this.$router.push({ name:'home'})  },
    handleChange(value) {console.log(value); },
    //删除
    del(k) { this.goods.splice(k, 1); },
    buy(k){console.log(k)}
  },
  //计算属性
  computed: {
    totalPrice() {
      var total = 0;
      this.goods.forEach((item, k) => {
        total += item.num * item.price;
      });
      return total;
    }
  },
  mounted(){
    this.clickNum = decodeURIComponent(this.$route.query.clickNum)
    this.id = decodeURIComponent(this.$route.query.id)
    this.goods.push(prodList[this.id])
    prodList[this.id].num = this.clickNum
  }
};
</script>

<style scoped>
.panel{
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ddd;
}
.panel-body{
  width: 70%;
  margin:0 auto;
}
.panel p{
  cursor: pointer;
}
th,td{
 width: 15%;
}
.check{
  text-align: right;
}
th.name{
width: 20%;
}
.panel-footer{
  text-align: right;
  width: 90%;
  margin: 50px 0 30px;
}
tr{
 height: 50px;
}
.totalPrice{
  color: rgb(245, 108, 108);
}
.btn-del{
  padding: 10px;
  outline:none;
  color: #fff;
  background-color: rgb(245, 108, 108);
  border: none;
  border-radius: 5px;
}
.txt{
  width: 30px;
  height: 25px;
  border: 1px solid rgb(245, 108, 108);
  border-radius: 5px;
  text-align: center;
  outline: none;
}
</style>