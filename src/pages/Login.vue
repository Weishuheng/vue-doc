<template>
  <!-- 登录表单 -->
  <el-form
    :model="loginForm"
    :rules="rules"
    label-position="top"
    class="form"
  >
    <!-- 账号输入框 -->
    <el-form-item label="账号" prop="account">
      <el-input
        size="large"
        v-model="loginForm.account"
        @input="validateForm"
        placeholder="请输入手机号或邮箱"
      ></el-input>
    </el-form-item>

    <!-- 密码输入框 -->
    <el-form-item label="密码" prop="password">
      <el-input
        size="large"
        v-model="loginForm.password"
        :type="passwordVisible ? 'text' : 'password'"
        @input="validateForm"
        placeholder="请输入密码"
        show-password
      ></el-input>
    </el-form-item>

    <!-- 用户须知勾选框 -->
    <el-form-item>
      <el-checkbox @change="validateForm" v-model="agree">我已阅读并同意用户须知</el-checkbox>
    </el-form-item>

    <!-- 登录按钮 -->
    <el-form-item>
      <el-button :disabled="!isFormValid" type="primary" @click="handleLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, reactive } from 'vue';

// 使用 reactive 创建响应式对象，存储表单数据
const loginForm = reactive({
  account: '',
  password: '',
});

// 使用 ref 创建一个标识密码是否可见的变量
const passwordVisible = ref(false);

// 使用 ref 创建一个标识是否同意用户须知的变量
const agree = ref(false);

// 使用 ref 创建一个标识登录按钮是否可点击的变量
const isFormValid = ref(false);

// 验证账号格式的函数
const validateAccount = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^1\d{10}$/;
  return emailRegex.test(value) || phoneRegex.test(value);
};

// 表单验证规则
const rules = {
  account: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (validateAccount(value)) {
          callback();
        } else {
          callback(new Error('请输入有效的手机号或邮箱'));
        }
      },
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, message: '密码至少为6位', trigger: 'blur' },
  ],
};

// 表单验证函数
const validateForm = () => {
  isFormValid.value = false;

  // 验证账号是否无误
  if (!loginForm.account || !validateAccount(loginForm.account)) {
    return;
  }

  // 验证密码是否无误
  if (!loginForm.password || loginForm.password.length < 6) {
    return;
  }

  // 已经勾选上确认按钮
  if (agree.value) {
    isFormValid.value = true;
  }
};

// 处理登录按钮点击事件
const handleLogin = () => {
  // 处理登录逻辑
  console.log('登录按钮被点击！');
};
</script>

<style scoped>
/* 样式表 */
.form {
  width: 600px;
  margin: 30px auto;
}
</style>