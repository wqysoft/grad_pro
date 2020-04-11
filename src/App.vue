<template>
  <div id="app">
       <!-- 导航栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal">
      <el-menu-item class="el-menu-top-item el-icon-phone-outline">电话：0571-888888</el-menu-item>
      <el-menu-item class="el-menu-top-item el-icon-alarm-clock">服务时间：9：00-21：00</el-menu-item>
      <el-menu-item class="el-menu-top-item el-icon-location-outline">地址：浙江省杭州市江干区</el-menu-item>
    </el-menu>
    <el-row>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-menu :default-active="activeIndex" class="el-menu-bottom" mode="horizontal">
              <el-image class="logo_image" @click="clickLogo" :src="url"/>
            <el-menu-item v-for="item in nav" :key="item.id">
              <router-link :to="item.routerName">{{item.name}}</router-link></el-menu-item>
          </el-menu>
          <div class="line"></div>
        </div>
      </el-col>
      <!-- <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col> -->
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-menu :default-active="activeIndex" class="el-menu-bottom" mode="horizontal">
            <el-menu-item v-for="item in login" :key="item.id">
              <router-link :to="item.routerName">{{item.name}}</router-link></el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>
<script>
  let nav = [
    {id:1,name:"首页",routerName:{name:'home'}},
    {id:2,name:"我的订单",routerName:{name:'myorder'}},
    {id:3,name:"个人中心",routerName:{name:'person'}},
    {id:4,name:"友情链接",routerName:{name:'friendLink'}}
  ]
  let login = [
    {id:1,name:"登录",routerName:{name:'login'}},
    // {id:2,name:"注册",routerName:{name:'register'}},
    {id:3,name:"购物车",routerName:{name:'cart'}},
  ]
export default {
  name: "App",
  data() {
    return {
      fits: "fill",
      url: require("./assets/logo.jpg"),
      activeIndex: "1",
      activeIndex2: "1",
      nav,
      login
    }
  },
  watch:{
    selected:function(newV,oldV){
      console.log(newV,oldV)
    }
  },
  methods:{
    clickLogo(){
      this.$router.push({
        name:'home'
      })
    }
  }
  
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  width: 100%;
  font-size: 16px;
}
a{
  text-decoration: none;
}
.logo_image{
  outline:none;
  width: 100px;
  float: left;
  margin: 0 80px;
}
.el-menu-top{
  display: flex;
  justify-content: space-between;
}

.el-row {
  margin-bottom: 20px;
}
</style>
