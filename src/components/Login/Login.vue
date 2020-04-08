<template>
 <div class="login">
 <el-menu class="login-menu">
  <el-menu-item v-for="item in login" :key="item.id">
    <router-link :to='item.routerName'>{{item.name}}</router-link>
  </el-menu-item>
  </el-menu>
  <router-view/>
 
   </div>
</template>
<script>
  let login = [ 
    {id:1,name:"用户登录",routerName:{name:"userLogin"}},
    {id:2,name:"管理员登录",routerName:{name:"adminLogin"}}
  ]
export default {
  name: "person",
  data() {
    return {
      login
    };
  }
 
};
</script>

<style scoped>
.login{
  width: 60%;
  margin: 0 auto;
}
a{
  color: #2c3e50;
  font-size: 1.2em;
  font-weight: bold;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
a:hover,a:active{
  color: #e22b61;
}

.login-menu{
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
}
</style>
