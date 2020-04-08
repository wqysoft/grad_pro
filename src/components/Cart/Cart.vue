<template>
  <div>
    <template v-if="goods.length==0">
      <div class="panel panel-default">
        <div class="panel-body">
          <p>购物车空空如也</p>
        </div>
      </div>
    </template>
    <template v-else>
        <h1>购物车</h1>
      <div class="newTable">
        <el-table :data="tableData">
          <el-table-column prop="name" align="center" label="商品名称" width="300"/>
          <el-table-column prop="price" align="center" label="商品单价" width="180"/>
          <el-table-column prop="number" align="center" label="购买数量" width="300">
            　<template slot-scope="scope" class="number">
　　　　　　<div class="cart-edit-input"><el-button type="danger">-</el-button></div>
           <div class="cart-edit-input"><el-input type="text"/></div>
　　　　　　<div class="cart-edit-input"><el-button type="danger">+</el-button></div>
　　　　</template>
          </el-table-column>
          <el-table-column prop="num" align="center" label="小计" width="180"/>
          <el-table-column  align="center" label="操作" width="180"/>
        </el-table>
      </div>
      <div class="panel panel-default">
        <div class="panel-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th><input v-model="allChecked" @click="selectAll" type="checkbox"></th>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>购买数量</th>
                <th>小计</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="v in goods" :key="v.id">
                <td><input type="checkbox"></td>
                <td>{{v.name}}</td>
                <td>{{v.price}}</td>
                <td>
                  <el-button type="danger" @click="reduce(k)">-</el-button>
                  <input type="text" v-model="v.num" style="width:30px;text-align:center">
                  <el-button type="danger" @click="plus(k)">+</el-button>
                </td>
                <td>{{v.price*v.num}}</td>
                <td>
                  <div class="btn-group btn-group-xs">
                    <el-button @click="del(k)" type="danger" class="btn-del">删除</el-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="panel-footer">
          共计<span>{{totalPrice}}</span>元
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
      tableData: [{
            date: '2016-05-02',
            name: "华为 HUAWEI P30 超感光徕卡三摄麒麟",
            price:1999,
            number:1
          }, {
            date: '2016-05-04',
            name: "华为新品 nova 3全面屏高清四摄游戏手机",
            price: 2499,
            number:1
          }],
      goods: [
        {
          id: 1,
          name: "华为 HUAWEI P30 超感光徕卡三摄麒麟",
          price: 1999,
          number: 1
        },
        {
          id: 2,
          name: "华为新品 nova 3全面屏高清四摄游戏手机",
          price: 2499,
          num: 1
        },
        {
          id: 3,
          name: "OPPO Reno 10倍变焦版8G+256G 雾海绿",
          price: 4799,
          num: 1
        },
        {
          id: 4,
          name: "荣耀20i 3200万AI自拍 超广角三摄 ",
          price: 2399,
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
    //控制全选
    selectAll() {
      if (!event.currentTarget.checked) {
        //如果没有选中
        //取消全选
        this.allSelectData = [];
      } else {
        //全选
        this.goods.forEach((v, k) => {
          this.allSelectData.push(v.id);
        });
      }
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
.panel-default {
  width: 80%;
  margin: 0 auto;
}
.newTable{
  width: 85%;
  text-align: center;
  margin: 0 auto;
}
.cart-edit-input{
  width: 20px;
  display: inline-block;
}
.cart-edit-input:nth-child(2){
  margin:0 15px 0 30px;
}

</style>