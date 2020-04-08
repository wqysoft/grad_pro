<template>
   <div class="personal">
    <div  class="personal_item">
      <div class="tip">用户名:</div>
      <div class="input">用户名</div>
    </div>
    <div  class="personal_item">
      <div class="tip">密码:</div>
      <div class="input">密码</div>
    </div>
    <div  class="personal_item">
      <div class="tip">确认密码:</div>
      <div class="input">确认密码</div>
    </div>
     <div  class="personal_item">
      <div class="tip">性别:</div>
      <div class="input">性别</div>
    </div>
     <div  class="personal_item">
      <div class="tip">电话:</div>
      <div class="input">电话</div>
    </div>
     <div  class="personal_item">
      <div class="tip">地址:</div>
      <div class="input">地址</div>
    </div>
     <div  class="personal_item">
      <div class="tip">邮箱:</div>
      <div class="input">邮箱</div>
    </div>
  </div>
</template>
<script>

export default {
  name: "p_personal",
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
.tip {
  width: 5%;
  display: inline-block;
  text-align: right;
}
.personal_item{
  width: 100%;
  margin:20px auto;
}
.input{
  width: 30%;
  display: inline-block;
  text-align: left;
}
</style>
