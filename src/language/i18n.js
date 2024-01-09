// 语言包
import cn from './cn.js'
import en from './en.js'
import { createI18n } from 'vue-i18n';
/*
    语言包选择 
    若上次已经选择了语言，按照上次选择。若初次访问，根据浏览器语言
*/
if(!localStorage.getItem("lid")){
    if((navigator.language || navigator.userLanguage).includes('zh')){
        localStorage.setItem('lid', 'zh');
    }else{
        localStorage.setItem('lid', 'en');
    }
}

// 使用vue-i18n实现多语言切换功能
const i18n = createI18n({
    locale : localStorage.getItem("lid"),
    messages : {
        'zh' : cn, //中文语言包
        'en' : en  // 英文语言包
    }
});
export default i18n
