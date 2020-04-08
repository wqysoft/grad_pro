<template>
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel height="500px">
      <el-carousel-item v-for="item in carouses" :key="item.id">
        <img class="small" :src="item.src"/>
      </el-carousel-item>
    </el-carousel>
    <h2>随意选购</h2>
    <div class="food">
      <div class="food-item" v-for="item in imgList" :key="item.id">
        <img :src="item.src" class="food-item-img" alt="图片加载失败"/>
        <h3>{{item.name}}</h3>
        <p>价格：￥{{item.price}}</p>
        <el-button class="food-item-btn" type="danger">查看详情</el-button>
      </div>
      <el-pagination background :page-count="5" :total="total" @current-change="currentChange"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      total: null,
      pagesize:2,
      activeIndex: "1",
      activeIndex2: "1",
      carouses: [
        { id: 1, src: require("../../assets/banner1.jpg") },
        { id: 2, src: require("../../assets/banner2.jpg") },
        { id: 3, src: require("../../assets/banner3.jpg") },
        { id: 4, src: require("../../assets/banner4.jpg") },
        { id: 5, src: require("../../assets/banner5.jpg") }
      ],
      imgList: [
        {id: 1,src: require("../../assets/eggPuff.jpg"),name: "蛋黄酥",price: 28.0},
        {id: 2,src: require("../../assets/nougat.jpg"),name: "牛奶燕麦糖",price: 28.0},
        {id: 3,src: require("../../assets/oats.jpg"),name: "牛轧糖",price: 28.0},
        {id: 4,src: require("../../assets/pineappleCake.jpg"),name: "凤梨酥",price: 28.0},
        {id: 5,src: require("../../assets/potato.jpg"),name: "麻薯",price: 28.0}
      ]
    };
  },
  created() {

  },
  methods: {
      // 获取当前页
    currentChange(val) {
      this.page = val;
      console.log(this.page)
    },
    // 计算当前页面的数据
    tableList() {
      this.displayData = [];// this.displayData是当前页面要显示的数据
      for (// pagesize是当前页面要显示总条数，例如：每页显示20条；currentPage是当前页面数;
        var j = this.pagesize * (this.currentPage - 1);
        j < this.pagesize * this.currentPage;
        j++
      ) {
        // this.gameNum是总数据
        if (this.gameNum[j]) {
          this.displayData.push(this.gameNum[j]);
        }
      console.log(displayData);
      }
    },
    totalPageNum(){//总条数获取
         this.$axios.get("/api/pagePackMade.do").then(res=>{
            this.totalCount =res.data[0].count;//总信息条数从数据库获取;
        }).catch(error=>{
            console.log(error);
        })
    },
  }
};
</script>
<style scoped>
.home{
  width: 100%;
}
h1,
h2 {
  font-weight: normal;
  text-align: left;
  margin: 20px;
  margin-left: 12%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
}

.el-row {
  margin-bottom: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.food {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
}
.food-item {
  width: 262px;
  padding: 4px;
  margin: 15px;
  border: 1px solid #ddd;
}
.food-item-img {
  width: 252px;
  height: 252px;
}
</style>
