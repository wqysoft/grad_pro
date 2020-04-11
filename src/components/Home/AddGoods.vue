<template>
  <div>
    <h3>添加商品</h3>
   <el-form status-icon label-width="100px" class="demo-ruleForm">
    <el-form-item label="商品名称">
      <el-input autocomplete="off" v-model="good.name"></el-input>
    </el-form-item>
    <el-form-item label="商品价格">
      <el-input type="number" v-model="good.price"></el-input>
    </el-form-item>
    <el-form-item label="商品介绍">
    <el-input type="textarea" v-model="good.content"></el-input>
  </el-form-item>
    <el-form-item label="商品材料">
    <el-input type="textarea" v-model="good.material"></el-input>
  </el-form-item>
   <el-form-item label="上传图片">
    <el-input placeholder="图片名称" v-model="good.src" readonly>
<el-upload slot="append" action=""
  class="upload-demo" :auto-upload="false" :on-change="handleChange">
  <el-button size="small" type="primary">点击上传</el-button>
</el-upload>
  </el-input>
  </el-form-item>
    <el-form-item>
      <el-button type="danger" @click="addGood(good)">添加</el-button>
    </el-form-item>
   </el-form>
  </div>
</template>

<script>
import { prodList } from '../../mock.js'
export default {
  name:'addGoods',
  data(){
    return {
      good:{
        name:'',
        price:'',
        content:'',
        material:'',
        src:''
      },
    }
  },
  methods:{
    addGood(good){
      if(good.name === ''|| good.price === '' || good.content === '' || good.material === '' || good.src === ''){
        alert("请将信息填写完整")
      }else{
        prodList.push(good)
        alert("添加商品成功")
        console.log(prodList)
      }
    },
    handleChange(file, fileList)
    {
    this.good.src=file.name;//这个地方你可以看看file里边哪个属性符合你
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