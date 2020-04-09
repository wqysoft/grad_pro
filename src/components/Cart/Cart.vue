<template>
  <div>
    <template v-if="goods.length==0">
      <div class="panel"  @click="gotoHome">
          <p>请前往首页添加商品</p>
      </div>
    </template>
    <template v-else>
      <div class="panel">
        <div class="panel-heading">
          <h3 class="panel-title">购物车</h3>
        </div>
        <div class="panel-body">
          <table class="table">
            <thead>
              <tr>
                <th><input v-model="allChecked" type="checkbox" class="check"></th>
                <th class="name">商品名称</th>
                <th>商品单价</th>
                <th>购买数量</th>
                <th>小计</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr v-for="(v,k) in goods" :key="v.id" class="tbody-tr">
                <td><input type="checkbox" class="check"></td>
                <td>{{v.name}}</td>
                <td>{{v.price}}</td>
                <td>
                   <el-input-number v-model="v.num" @change="handleChange" :min="1" label="描述文字"></el-input-number>
                <td>{{v.price*v.num}}</td>
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
          合计:<span class="totalPrice">￥{{totalPrice}}</span> <button @click="buy(totalPrice)" class="btn-del"> 结  算 </button>
          <button @click="gotoHome" class="btn-del">继续购物</button>
        </div>
      </div>
    </template>
  </div>
</template> 
<script>
import { prodList,goods } from '../../mock.js'
export default {
  name: "cart",
  data() {
    return {
      num: 1,
      clickNum: 0,
      goods: [],
      id:'',
      //控制全选
      allChecked: true,
      //商品数据选中
      allSelectData: []
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
      this.goods.forEach((v, k) => {
        total += v.num * v.price;
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
width: 25%;
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