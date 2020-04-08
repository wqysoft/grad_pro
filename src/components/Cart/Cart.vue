<template>
  <div>
    <template v-if="goods.length==0">
      <div class="panel">
          <p>购物车空空如也</p>
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
                  <button @click="reduce(k)" class="btn btn-plus">-</button>
                  <input type="text" v-model="v.num" class="txt">
                  <button @click="plus(k)" class="btn btn-plus">+</button></td>
                <td>{{v.price*v.num}}</td>
                <td>
                  <div class="btn-group">
                    <button @click="del(k)" type="button" class="btn btn-del">删除</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="panel-footer">
          合计:<span class="totalPrice">￥{{totalPrice}}</span> <button @click="buy(totalPrice)" class="btn btn-del">结算</button>
        </div>
      </div>
    </template>
  </div>
</template> 
<script>
export default {
  name: "cart",
  data() {
    return {
      num: 1,
      goods: [
        {
          id: 1,
          name: "华为 HUAWEI P30 超感光徕卡三摄麒麟",
          price: 1999,
          num: 1
        },
        {
          id: 2,
          name: "华为新品 nova 3全面屏高清四摄游戏手机",
          price: 2499,
          num: 1
        }
      ],
      //控制全选
      allChecked: true,
      //商品数据选中
      allSelectData: []
    };
  },
  methods: {
    //增加
    plus(k) {
      this.goods[k].num++;
    },
    //减少
    reduce(k) {
      this.goods[k].num--;
      if (this.goods[k].num == 0) {
        this.goods.splice(k, 1);
      }
    },
    //删除
    del(k) {
      this.goods.splice(k, 1);
    },
    buy(k){
      console.log(k)
    }
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
  }
};
</script>

<style scoped>
.panel{
  width: 70%;
  margin: 0 auto;
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
  margin-top: 30px;
}
tr{
 height: 50px;
}
.totalPrice{
  color: rgb(245, 108, 108);
}
.btn{
  outline:none;
  height: 30px;
  color: #fff;
  background-color: rgb(245, 108, 108);
  border: none;
  border-radius: 5px;
}
.btn-plus{
 width: 40px;
}
.btn-del{
  width: 60px;
}
.tbody tr input.txt{
  width: 30px;
  height: 25px;
  border: 1px solid rgb(245, 108, 108);
  border-radius: 5px;
  text-align: center;
}
</style>