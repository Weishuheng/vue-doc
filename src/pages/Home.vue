<template>
  <div class="guide">
    <h2>Home</h2>
    <el-button type="primary" icon="Plus">添加新项目</el-button>
  </div>
  <div class="box">
    <el-card :key="project.id"  v-for="project in projectList" @click="enterProject(project.id)"  class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ project.name }}</span>
        </div>
      </template>
      <div class="text item">{{ project.intro }}</div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from "../utils/router.js"
const projectList = ref([
        {
          id : "1",
          name : '开发者前台',
          manager : 'Weishuheng',
          intro : '简介：开发者前台的前后端接口文档'
        }, {
          id : "2",
          name : '开发者后台',
          manager : 'Weishuheng',
          intro : '简介：开发者后台的前后端接口文档'
        }, {
          id : "3",
          name : '广告主前台',
          manager : 'Weishuheng',
          intro : '简介：广告主前台的前后端接口文档'
        }, {
          id : "4",
          name : '广告主后台',
          manager : 'Weishuheng',
          intro : '简介：广告主后台的前后端接口文档'
        }
      ])
const enterProject = (id)=> {
  router.push("/project/" + id + "/init")
}
</script>
<style scoped lang="less">
.guide{
  display: flex;
  justify-content:space-between
}
.box{
  display: flex;
  flex-wrap: wrap;
}
.el-card{
  width: 300px;
  margin: 30px 30px 0 0;
}
.el-card:hover{
  cursor: pointer;
  background-color: rgb(254, 254, 255);
  box-shadow: 0 0 10px rgb(224, 224, 252);
}
.card-header{
  font-size: 14px;
  font-weight: bolder;
}
.item{
  min-height: 60px;
}
</style>
