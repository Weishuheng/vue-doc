
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import i18n from "./language/i18n.js"
import router from "./utils/router.js"
import axios from "./utils/axios.js"
import 'element-plus/dist/index.css'
import "./assets/global.less"


// 项目启动
const app = createApp(App)

// 注册element-ui 所有图标
// 注册后才能使用
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

/*
    辨识终端机型（电脑、pad、phone）
    window.ISPAD = navigator.userAgent.toLowerCase().match(/(iPad|pad|Pad)/i) ? true : false;
    .......
    跳转不同的代码模块
*/

/* 
    终端大小屏进行区分
    window.ISSMALL = document.documentElement.clientWidth < 1000 ? true : false;
    .......
    给body添加className 适应大小屏
    document.body.className = document.body.className ? document.body.className + " bodySmall" : "bodySmall";
*/

/* 
    axios 全局定义
    调用：this.$axios.post(...)
*/
app.config.globalProperties.axios = axios
/* 
    router 全局定义
    调用：this.$router.push(...)
*/
app.config.globalProperties.router = router


/* 
    i18n 全局定义
    调用：this.$i18n.local = ...
*/

app.config.globalProperties.i18n = i18n;

// 项目挂载
app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.mount('#app')
