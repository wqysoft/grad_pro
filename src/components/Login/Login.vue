<template>
 <div class="login">
   <h1>登  录</h1>
    <div  class="personal_item">
      <div class="tip">用户名:</div>
      <el-input class="textInput" placeholder="请输入用户名"/>
    </div>
    <div  class="personal_item">
      <div class="tip">密码:</div>
      <el-input class="textInput" placeholder="请输入密码"/>
    </div>
    <el-row>
      <el-button type="danger">登录</el-button>
      <el-button type="danger">注册</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
name:"login",
data(){
  return{

  }
}
}
</script>

<style scoped>
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