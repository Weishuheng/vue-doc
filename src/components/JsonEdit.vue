<template>
  <!-- 主容器 -->
  <div class="box">
    <!-- 标题 -->
    <h4><span>返回数据：</span><span>JSON</span></h4>

    <!-- 显示编辑图标 -->
    <el-icon v-show="!showEdit" @click="changeEditing(true)"><Edit /></el-icon>

    <!-- 编辑状态下的操作按钮 -->
    <div v-show="showEdit">
      <el-icon @click="changeEditing(false); cancel()"><CircleClose /></el-icon>
      <el-icon @click="changeEditing(false); update()"><CircleCheck /></el-icon>
    </div>
  </div>

  <!-- CodeMirror 编辑器 -->
  <Codemirror
    v-if="showEdit"
    v-model="JsonData"
    :options="codeOptions"
    border
    :height="120"
    @change="CodeChange"
  />

  <!-- 预览 JSON 数据 -->
  <pre class="readpre" v-show="!showEdit">
    <code class="language-javascript">
      {{ JsonData }}
    </code>
  </pre>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue';
import Codemirror from "codemirror-editor-vue3";
// Prism theme
import 'prismjs/themes/prism.css';
import Prism from 'prismjs'
// codemirror language
import "codemirror/mode/javascript/javascript.js";
// codemirror theme
import 'codemirror/theme/elegant.css';

// 定义 props 和 emit
const props = defineProps(["name"]);
const emit = defineEmits(['parentUpdate'])

// 当组件挂载时，使用 Prism.js 对预览部分进行语法高亮
onMounted(() => {
  Prism.highlightAll();
})

// 移除 JSON 字符串中的注释
const removeComments = (jsonString) => {
  // 去除单行注释
  jsonString = jsonString.replace(/\/\/.*$/gm, '');
  // 去除多行注释
  jsonString = jsonString.replace(/\/\*[\s\S]*?\*\//gm, '');
  return jsonString;
}

// Codemirror 编辑器的配置选项
const codeOptions = ref({
  mode: 'application/json', // 设置语言模式
  theme: 'elegant', // 设置主题
  lineNumbers: true, // 显示行号
})

// 存储 JSON 数据的字符串
const JsonData = ref('// Write your date view here\n{"data" : "ddkkd"}')

// 控制编辑状态的变量
const showEdit = ref(false)

// 存储解析后的 JSON 对象
const JsonObj = ref({})

// 切换编辑状态
const changeEditing = (v) => {
  showEdit.value = v;
  if (!v) {
    // 如果不是编辑状态，重新进行 Prism.js 语法高亮
    Prism.highlightAll();
  }
}

// 更新操作
const update = () => {
  // 解析 JSON 字符串，移除注释，并发送更新事件
  JsonObj.value = JSON.parse(removeComments(JsonData.value))
  emit("parentUpdate", props.name, JsonObj.value);
  console.log(props.name, JsonObj.value.data)
}

// 取消操作
const cancel = () => {
  // 在这里可以添加取消操作的逻辑
}

</script>

<style scoped>
/* 样式 */
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  line-height: 30px;
}

.el-icon {
  vertical-align: middle;
  font-size: 20px;
  margin-left: 10px;
}

.el-icon:hover {
  color: #409efc;
  cursor: pointer;
}

.readpre {
  margin: 0;
  padding: 0 20px 0 50px;
}

</style>
