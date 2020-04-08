<template>
 <div class="person">
      <h3>个人中心</h3>
    <div  class="personal_item">
      <div class="tip">用户名:</div>
      <el-input class="textInput" v-model="username" placeholder="请输入用户名"/>
    </div>
    <div  class="personal_item">
      <div class="tip">密码:</div>
      <el-input class="textInput" v-model="password" placeholder="请输入密码"/>
    </div>
    <div  class="personal_item">
      <div class="tip">确认密码:</div>
      <el-input class="textInput" v-model="repass" placeholder="确认密码"/>
    </div>
     <div  class="personal_item">
      <div class="tip">性别:</div>
      <el-input class="textInput" v-model="sex" placeholder="请输入性别"/>
    </div>
     <div  class="personal_item">
      <div class="tip">电话:</div>
      <el-input class="textInput" v-model="telphone" placeholder="请输入电话"/>
    </div>
     <div  class="personal_item">
      <div class="tip">地址:</div>
      <el-input class="textInput" v-model="address" placeholder="请输入地址"/>
    </div>
     <div  class="personal_item">
      <div class="tip">邮箱:</div>
      <el-input class="textInput" v-model="email" placeholder="请输入邮箱"/>
    </div>
    <el-row>
      <el-button type="danger">修改</el-button>
      <el-button type="danger">取消</el-button>
    </el-row>
  </div>
</template>
<script>
import {user} from "../../mock.js"
console.log(user)
export default {
 name: "person",
  data() {
    return {
      radio: '1',
      username:'',
      password:'',
      repass:'',
      sex:'',
      telphone:'',
      address:'',
      email:''
    };
  }
};
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
