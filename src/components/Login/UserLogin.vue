<template>
<div>
  <h2>用户登录</h2>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model.number="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="danger" @click="submitForm(ruleForm)">登录</el-button>
    <el-button @click="register">注册</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
import { users } from '../../mock.js'
export default {
  name:'userLogin',
   data() {
      var checkUsername = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入用户名'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: '',
          checkPass: '',
        },
        rules: {
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(form) {
        if(form.username !== users.username && form.password !== users.password){
          alert('用户名和密码输入错误');
        }else{
          alert('登录成功');
          this.$router.push({
            name:'home'
          })
        }
        },
      register() {
        this.$router.push({
        name:'userRegister',
        })
      }
    }
  }
</script>

<style scoped>
.demo-ruleForm{
  width: 50%;
  margin: 0 auto;
}
</style>