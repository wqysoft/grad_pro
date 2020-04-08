<template>
<div>
  <ul>
    <li v-for="item in nav" :key="item.id">
      <router-link :to='item.routerName'>{{item.name}}</router-link></li>
  </ul>
   <router-view/>
   </div>
</template>
<script>
let nav = [
  { id: 0, name: "我的信息", routerName: { name: "p_personal" } },
  { id: 1, name: "信息修改", routerName: { name: "p_update" } },
  { id: 2, name: "订单管理", routerName: { name: "p_orderManage" } }
];
export default {
  name: "person",
  data() {
    return {
      nav
    };
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  margin: 0 20%;
}
ul li {
  list-style: none;
  width: 33%;
}
a{
  color: #000;
}
a:hover,a:active{
  color: #e22b61;
}
</style>
