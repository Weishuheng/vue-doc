
import axios from 'axios'
import { ElMessageBox } from 'element-plus'
const $axios = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // API基础URL
    timeout: 10000, // 请求超时时间 10s
});
// ajax 拦截器 提交前统一处理数据
$axios.interceptors.request.use(config => {
    if(config.method == "get"){
        // ...
    }
    // ...

}, error => {
    Promise.reject(error)
})
// ajax 拦截器 处理返回的数据
$axios.interceptors.response.use(response => {
    if(response && response.data){
        // ...
    }
    // ...
}, error => {
    const lid = localStorage.getItem("lid")
    if(error && error.response){
        //未授权
        if(error.response.status == 401){
            // 返回登录页面
            // router.push("/login")
        }
        //无权限
        if(error.response.status == 403){
            if(lid == "zh"){
                ElMessageBox.alert("拒绝访问", '错误信息', {
                    confirmButtonText: '确定',
                    callback: () => {
                        // router.push("/login")
                    }
                })
            }
            if(lid == 'en'){
                ElMessageBox.alert("Access Denied", 'Error Message', {
                    confirmButtonText: 'Sure',
                    callback: () => {
                        // router.push("/login")
                    }
                })
            }
        }
        //接口错误
        if(error.response.status == 500){
            if(lid == "zh"){
                ElMessageBox.alert("服务器响应异常，请稍后重试", '错误信息', {
                    confirmButtonText: '确定'
                })
            }
            if(lid == 'en'){
                ElMessageBox.alert("Server response exception, please try again later", 'Error Message', {
                    confirmButtonText: 'Sure'
                })
            }
        }
    }
    return Promise.reject(error.response)
})
export default $axios;