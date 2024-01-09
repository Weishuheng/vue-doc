<template>
  <!-- 文本编辑器容器 -->
  <div class="textEdit">
    <!-- 标签显示 -->
    <label>{{ label }} : </label>

    <!-- 文字预览部分 -->
    <div v-show="!editing" style="padding-right: 50px;" @mouseover="showEditButton" @mouseleave="hideEditButton">
      <!-- 文字预览 -->
      <el-text class="text">{{ inputValue }} <span> ms</span></el-text>

      <!-- 编辑按钮 -->
      <el-icon v-show="showEdit" @click="startEditing">
        <el-tooltip effect="light" content="Edit" placement="top">
          <Edit />
        </el-tooltip>  
      </el-icon>
    </div>
      
    <!-- 输入框和保存/取消按钮部分 -->
    <div v-show="editing">
      <!-- 输入框 -->
      <el-input-number v-model="inputValue" :placeholder="placeholder" @change="handleInput" :step="100" step-strictly :max="10000" :min="1000"  />
      <span> ms</span>

      <!-- 保存按钮 -->
      <el-button @click="saveChanges" class="ml10" icon="Check" circle />

      <!-- 取消按钮 -->
      <el-button @click="cancelChanges" icon="Close" circle />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

// 定义 props 和 emit
const props = defineProps(["label", "name", "value", "placeholder"]);
const emit = defineEmits(['parentUpdate']);

// 定义 ref 变量
let editing = ref(!props.value); // 是否处于编辑状态
let showEdit = ref(false); // 是否显示编辑按钮
let inputValue = ref(props.value); // 输入框的值

// 显示编辑按钮的回调函数
const showEditButton = () => {
  showEdit.value = true;
};

// 隐藏编辑按钮的回调函数
const hideEditButton = () => {
  showEdit.value = false;
};

// 开始编辑的回调函数
const startEditing = () => {
  editing.value = true;
};

// 取消编辑的回调函数
const cancelChanges = () => {
  editing.value = false;
};

// 保存编辑的回调函数
const saveChanges = () => {
  if (inputValue.value !== '') {
    emit("parentUpdate", props.name, inputValue.value);
    editing.value = false;
  }
};

// 输入框值改变的回调函数（未实现）
const handleInput = () => {
  // 在这里可以添加输入框值改变时的逻辑
};
</script>

<style scoped>
/* 样式 */
.textEdit {
  display: flex;
  font-size: 14px;
  line-height: 40px;
}

label {
  font-weight: bold;
  font-size: 13px;
  margin-right: 5px;
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
</style>
