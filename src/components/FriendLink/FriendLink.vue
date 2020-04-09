<template>
<div>
    <h3>友情链接</h3>
<div class="friendLink">
    <li v-for="(image,index) in images" :key="index" class="item">
    <a :href="image.link"><el-image :src="image.src"></el-image>
    <p>{{image.name}}</p>
    </a>
 </li>
 </div>
</div>
  
</template>

<script>
export default {
name:"friendLink",
data(){
  return{
    images:[
      {id:7,src:"../../../static/youku.jpg",link:"http://www.youku.com",name:"优酷"},
      {id:2,src:"../../../static/aiqiyi.jpg",link:"http://www.iqiyi.com",name:"爱奇艺"},
      {id:3,src:"../../../static/easeyun.jpg",link:"https://music.163.com",name:"网易云音乐"},
      {id:4,src:"../../../static/gaode.jpg",link:"https://www.amap.com/",name:"高德地图"},
      {id:5,src:"../../../static/google.jpg",link:"http://www.google.cn",name:"谷歌"},
      {id:6,src:"../../../static/sina.jpg",link:"https://www.sina.com.cn",name:"新浪"},
      {id:1,src:"../../../static/baidu.jpg",link:"https://www.baidu.com",name:"百度"},
      {id:8,src:"../../../static/taobao.jpg",link:"https://www.taobao.com/",name:"淘宝"},
          ]
        }
      },
    methods:{
      goto(index){
        thi
        }
      }
}
</script>

<style scoped>
p{
  text-align: center;
  color: #000;
}
li{
  list-style-type: none;
}
.friendLink{
  display: flex;
  width: 60%;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
.item{
  width: 200px;
  height: 200px;
  margin: 20px;
}
.item image{
  width: 20px;
  height: 2px;
}
</style>