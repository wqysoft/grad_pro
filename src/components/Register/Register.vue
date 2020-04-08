<template>
   <div class="register">
     <el-menu class="login-menu">
  <el-menu-item v-for="item in register" :key="item.id">
    <router-link :to='item.routerName'>{{item.name}}</router-link>
  </el-menu-item>
  </el-menu>
  <router-view/>
    <p class="minitip">提示：用户名和密码只能有数字、字母、和下划线，不能有汉字和其他特殊符号。</p>
  </div>
  
</template>

<script>
let register = [ 
    {id:1,name:"用户注册",routerName:{name:"userRegister"}},
    {id:2,name:"管理员注册",routerName:{name:"adminRegister"}}
  ]
export default {
  name: "person",
  data() {
    return {
      register
    };
  }
};
</script>

<style scoped>
a{
  color: #2c3e50;
  font-size: 1.2em;
  font-weight: bold;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
a:hover,a:active{
  color: #e22b61;
}
.minitip{
  width: 30%;
  margin: 0 auto;
  margin-top: 50px;
  color: #aaa;
}
.register{
  width: 100%;
}
.login-menu{
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
}
</style>
