import { createRouter, createWebHistory } from "vue-router"
import { useCookies }  from 'vue3-cookies'
const { cookies } = useCookies();
// 路由设置
const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name : "Home",
            meta : {
                index : "1",
                id : "1",
            },
            component: () => import('../pages/Home.vue')
        },{
            path: '/project/:id',
            name : "Project",
            meta : {
                index : "2",
                id : "2",
            },
            component: () => import('../pages/Project.vue'),
            children: [
                {
                  path: '/project/:id/init',
                  name: 'Init',
                  component: () => import('../pages/Init.vue')
                },{
                  path: '/project/:id/doc/:pid',
                  name: 'Doc',
                  component: () => import('../pages/Doc.vue')
                }
            ]
        },{
            path: '/login',
            name : "Login",
            meta : {
                index : "3",
                id : "3",
            },
            component: () => import('../pages/Login.vue')
        },{
            path: '/echart',
            name : "Echart",
            meta : {
                index : "4",
                id : "4",
            },
            component: () => import('../pages/echart.vue')
        }
    ]
})
// 页面跳转之前验证用户有效性
router.beforeEach((to, from, next) => {
    const uid = cookies.get("uid"),
        token = cookies.get("token");
    if(uid || token){
        // next();
    }else{
        // 没有用户登录信息，停止页面访问
        // next(false);
        // 跳转登录地址
        // router.push("/login")
    }
    next();
});
export default router;