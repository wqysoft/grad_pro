<template>
  <div>
    <h2>用户注册</h2>
    <el-form status-icon label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名">
      <el-input autocomplete="off" placeholder="请输入用户名" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" placeholder="请输入密码" type="password" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="年龄">
      <el-input type="number"  v-model="form.age" placeholder="请输入年龄" min="0" max="100" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="性别">
    <el-select  placeholder="请选择性别" v-model="form.sex" class="chooseSex">
      <el-option label="男" value="1"></el-option>
      <el-option label="女" value="2"></el-option>
    </el-select>
      </el-form-item>
    <el-form-item label="电话">
      <el-input autocomplete="off" placeholder="请输入电话" v-model="form.telphone"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input autocomplete="off" placeholder="请输入地址" v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input autocomplete="off" placeholder="请输入邮箱" v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="danger" @click="registerForm(form)">注册</el-button>
    </el-form-item>
   </el-form>
  </div>
</template>

<script>
import { users } from '../../mock.js'
export default {
  name:"userRegister",
  data() {
    return {
      form:{
        username:'',
        password:'',
        sex:'',
        age:'',
        telphone:'',
        address:'',
        email:''
      },
    };
  },
    methods: {
      registerForm(){
        const { username,password,sex,telphone,address,email } = this.form
        // let reg_pass = '^[0-9a-zA-Z_]{1,}$',reg_email = ''
        if(username ===''|| password === '' ||sex === '' || telphone === '' || address === '' || email === ''){//注册信息不能为空
          alert('请全部填写完整');
        }
        else {
          let newUser = { username,password,sex,telphone,address,email }
          users.push(newUser)
          console.log(users)
          alert("注册成功")
          this.$router.push({
            name:'userLogin'
          })
        }

      }
    }
  };
</script>

<style scoped>
.demo-ruleForm{
  width: 40%;
  margin: 0 auto;
}
.chooseSex{
  width: 100%;
}
</style>