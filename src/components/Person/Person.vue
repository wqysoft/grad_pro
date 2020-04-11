<template>
  <div class="person">
    <h3>个人中心</h3>
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
      <el-option label="男" value="shanghai"></el-option>
      <el-option label="女" value="beijing"></el-option>
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
      <el-button type="danger" @click="changeForm(form)">修改</el-button>
    </el-form-item>
   </el-form>
  </div>
</template>
<script>
import {users} from "../../mock.js"
export default {
 name: "person",
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
      changeForm(form) {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      }
    }
};
</script>

<style scoped>
.demo-ruleForm{
  width: 30%;
  margin: 0 auto;
}
.chooseSex{
  width: 100%;
}
</style>