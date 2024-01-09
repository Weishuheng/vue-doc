<template>
  
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="1">
        <el-button type="primary" icon="Plus">添加页面</el-button>
      </el-menu-item>
      <el-menu-item index="1">
        <template #title><router-link :to="{ name: 'Init' }">项目初始化</router-link></template>
      </el-menu-item>
      <el-menu-item index="2">
        <template #title><router-link :to="{ name: 'Doc', params : { id : '1', pid : '1'} }">首页</router-link></template>
      </el-menu-item>
      <el-menu-item index="3">
        <template #title><router-link :to="{ name: 'Doc', params : { id : '1', pid : '2'} }">登录页</router-link></template>
      </el-menu-item>
    </el-menu>
    <div class="main"><router-view></router-view></div>
  </div>
</template>

<script>

</script>
<style scoped language="less">
.main{
  padding-left: 160px;
}
.el-menu{
  position: absolute;
  left : 0;
  top : 0;
  width: 150px;
  height: calc(100% + 30px);
}
</style>
