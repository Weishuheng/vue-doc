# 1、安装全局的vue
```javascript
    // "vue": "^3.2.13"
    npm install -g @vue/cli
```

# 2、安装项目doc
```javascript
    vue create doc
```
# 3、进入项目，安装需要依赖的三方组件
```javascript
    // 进入项目
    cd doc
    // element-ui 框架UI
    // "@element-plus/icons-vue": "^2.3.1"
    // "element-plus": "^2.4.4"
    npm install element-plus @element-plus/icons-vue -s
    // ajax数据设置
    // "axios": "^1.6.2",
    npm install axios -s
    // 路由设置
    // "vue-router": "^4.2.5"
    npm install vue-router -s
    // 多语言支持
    // "vue-i18n": "^9.8.0"
    npm install vue-i18nr -s
    // 代码编辑框
    // "codemirror": "^5.65.16"
    // "codemirror-editor-vue3": "^2.4.1"
    npm install codemirror-editor-vue3 -s
    // 代码高亮显示
    // "prismjs": "^1.29.0",
    npm install prismjs -s
    // 图表显示
    // "echarts": "^5.4.3"
    npm install echarts -s
```

# 4、将需要的文件下载并覆盖项目文件
    ** public 文件夹不动 **
    ** src 文件夹删除项目原有的，使用github里面的 **
    ** 创建3个环境变量的文件  **
        .env.development        生产环境
        .env.test               测试环境
        .env.production         线上环境
        存放不同环境下的api请求地址
        <!-- REACT_APP_API_URL=http://localhost.api.mysite.com -->

# 5、修改package.json的scripts
```javascript
    "scripts": {
        "local": "vue-cli-service serve --mode local",
        "debug:test": "vue-cli-service serve --mode testing",
        "debug:production": "vue-cli-service serve --mode production",
        "test": "vue-cli-service build --mode testing",
        "production": "vue-cli-service build --mode production",
        "lint": "vue-cli-service lint"
    }
    /**
     * npm run local                本地开发环境，请求模拟数据
     * npm run debug:test           本地开发环境，请求测试环境api数据
     * npm run debug:production     本地开发环境，请求正式环境api数据
     * npm run test                 打包测试环境
     * npm run production           打包正式环境
     */
```

  # 6、启动项目
      npm run local