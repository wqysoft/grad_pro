<template>
  <div>
    <h2>用户注册</h2>
    <div class="personal_item">
      <div class="tip">用户名:</div>
      <el-input class="textInput" v-model="username" placeholder="请输入用户名"/>
    </div>
    <div class="personal_item">
      <div class="tip">密码:</div>
      <el-input class="textInput" v-model="password" placeholder="请输入密码"/>
    </div>
    <div class="personal_item">
      <div class="tip">确认密码:</div>
      <el-input class="textInput" v-model="repass" placeholder="确认密码"/>
    </div>
     <div class="personal_item">
      <div class="tip">性别:</div>
      <el-input class="textInput" v-model="sex" placeholder="请输入性别"/>
    </div>
     <div class="personal_item">
      <div class="tip">电话:</div>
      <el-input class="textInput" v-model="telphone" placeholder="请输入电话"/>
    </div>
     <div class="personal_item">
      <div class="tip">地址:</div>
      <el-input class="textInput" v-model="address" placeholder="请输入地址"/>
    </div>
     <div class="personal_item">
      <div class="tip">邮箱:</div>
      <el-input class="textInput" v-model="email" placeholder="请输入邮箱"/>
    </div>
    <el-row>
      <el-button type="danger" @click="register">用户注册</el-button>
    </el-row>
     <el-alert v-show="bool" :title="title" type="error" effect="dark" class="minitip"></el-alert>
  </div>
</template>

<script>
export default {
  name:"userRegister",
data(){
  return{
    bool:false,
    title:'',
    username:'',
    password:'',
    repass:'',
    sex:'',
    telphone:'',
    address:'',
    email:''
  }
},
methods:{
  register(){
    const {user,pass,repass,sex,telphone,address,email,title,bool} = this
    let reg_pass = '^[0-9a-zA-Z_]{1,}$',reg_email = ''
    // if(user ===''|| pass ==="" || repass === '' ||sex === '' || telphone === '' || address === '' || email === ''){//注册信息不能为空
    //   bool = true
    //   title = "信息必须全部填写"
    // }else this.bool = false
    // if(pass !== repass)
    //   bool = true
    //   title = "两次密码不一致"
    // if(!pass.test(reg_pass))
    //   bool = true
      
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
.minitip{
  width: 30%;
  margin: 0 auto;
  margin-top: 50px;
  color: #fff;
}
.personal_item{
  width: 100%;
  margin:20px auto;
}
</style>