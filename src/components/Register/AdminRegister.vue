<template>
  <div class="adminRegister">
    <h2>管理员注册</h2>
    <div class="personal_item">
      <div class="tip">用户名:</div>
      <el-input class="textInput" v-model="username" placeholder="请输入管理员名称"/>
    </div>
    <div class="personal_item">
      <div class="tip">密码:</div>
      <el-input class="textInput" v-model="password" placeholder="请输入管理员密码"/>
    </div>
    <div class="personal_item">
      <div class="tip">确认密码:</div>
      <el-input class="textInput" v-model="repass" placeholder="确认密码"/>
    </div>
     <div class="personal_item">
      <div class="tip">识别码:</div>
      <el-input class="textInput" v-model="number" placeholder="请输入识别码"/>
    </div>
    <el-row>
      <el-button type="primary">管理员注册</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"adminRegister",
data(){
  return{
    username:'',
    password:'',
    repass:'',
    number:''
  }
}
}
</script>

<style scoped>
.adminRegister{
  width: 100%;
}
.textInput {
  width: 30%;
}
.tip {
  width: 5%;
  display: inline-block;
  text-align: right;
}
.personal_item{
  width: 100%;
  margin:20px auto;
}
</style>