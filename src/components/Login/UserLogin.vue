<template>
<div>
  <h2>用户登录</h2>
  <div class="personal_item">
    <div class="tip">用户名:</div>
    <el-input class="textInput" v-model="username" placeholder="请输入用户名"/>
  </div>
  <div class="personal_item">
    <div class="tip">密码:</div>
    <el-input class="textInput" v-model="password" show-password placeholder="请输入密码"/>
  </div>
   <el-row>
      <el-button type="danger" @click="login">用户登录</el-button>
      <el-button type="danger">用户注册</el-button>
    </el-row>
      <el-alert v-show="bool"
    :title="title"
    type="error"
    effect="dark" class="alertText">
  </el-alert>
</div>
</template>
<script>
import { user } from '../../mock.js'
export default {
  data() {
    return {
      bool: false,
      username: "",
      password: "",
      title:""
    };
  },
  methods:{
    login(){
      let user = this.username,pass = this.password
      if (user == "" || pass == ""){
        this.bool = true
        this.title = '请填写用户名和密码'
      }
      else this.bool = false
      if(this.username == user[0].username && this.password == user[0].password){
        this.bool = true
        this.title = "登录成功"
      }
    }
  },
  created() {

  }
};
</script>

<style scoped>
.alertText{
  width:30%;
  margin: 0 auto;
}

.textInput {
  width: 30%;
}
.tip {
  width: 5%;
  display: inline-block;
  text-align: right;
}
.personal_item {
  width: 100%;
  margin: 20px auto;
}
</style>