<template>
  <nav>
    <div class="df">
    <div>
      <img class="logo" src="./assets/logo.png" />
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1"><router-link to="/">{{ $t('common.home') }}</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/project/1/init">{{ $t('common.project') }}</router-link></el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
        
      </el-menu>
  </div>
    <ul class="nav-right">
      <li><router-link to="/login">Weishuheng</router-link></li>
      <li><el-button type="primary" round @click="changeLanguage">{{ language }}</el-button></li>
    </ul>
  </div>
  </nav>
  <main>
    <el-config-provider :locale="elplusLang">
      <router-view />
    </el-config-provider>
  </main>
  <footer>
    <span>Copyright ©{{ thisYear }}</span>
		<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"><i class="icon_icp"></i>京ICP备11009985号</a>
  </footer>
</template>

<script setup>
import { ref, getCurrentInstance, computed} from 'vue';
import { ElConfigProvider } from 'element-plus'
import zh from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const elplusLang = ref(localStorage.getItem("lid") == 'zh' ? zh : en)
const { router, i18n } = getCurrentInstance().appContext.config.globalProperties;
const language = ref(localStorage.getItem("lid") === "en" ? "中文" : "EN");
const thisYear = ref(new Date().getFullYear());

const activeIndex = computed(()=>{
  return router.currentRoute.value.meta.index
})

const changeLanguage = () => {
  localStorage.setItem('lid', localStorage.getItem("lid") === "en" ? "zh" : "en");
  language.value = localStorage.getItem("lid") === "en" ? "中文" : "EN";
  i18n.global.locale = localStorage.getItem("lid");
  elplusLang.value = localStorage.getItem("lid") == 'zh' ? zh : en
};

</script>
<style scoped lang="less">
nav {
  font-size: 14px;
  background-color: #545c64;
  a {
    color: #fff;
  }
  .df{
    justify-content:space-between
  }
  .el-menu--horizontal{
    display: inline-flex;
    min-width: 500px;
  }
  .el-menu--horizontal.el-menu{
    border-bottom-color: #545c64;
  }
  .logo{
    width: 30px;
    height: 30px;
    margin: 0 25px ;
  }
  .nav-right{
    display: inline-flex;
    overflow: hidden;
    li {
      margin: 0 10px;
      line-height: 59px;
    }
  }
}
main{

  position: relative;
  min-height: calc(100vh - 150px);
  padding: 30px;
}
footer {
  text-align: center;
  font-size: 13px;
  line-height: 30px;
  vertical-align: middle;
  a {
    color : #000;
  }
  .icon_icp{
    width: 14px;
    height: 14px;
    display: inline-block;
    vertical-align: middle;
    background-image: url("./assets/icp.png");
    background-size: 100% 100%;
    margin : 0 3px 0 10px;
  }
}
</style>
