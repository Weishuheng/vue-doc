<template>
    <div class="guide">
      <h2>开发者前台</h2>
      <TextEdit label="网站地址" @parentUpdate="update" name="webUrl" :value="webUrl" placeholder="请填写正式网站地址" />
      <TextEdit label="API地址" @parentUpdate="update" name="apiUrl" :value="apiUrl" placeholder="请填写线上API地址" />
      <TextEdit label="测试网站地址" @parentUpdate="update" name="testWebUrl" :value="testWebUrl" placeholder="请填写测试网站地址" />
      <TextEdit label="测试API地址" @parentUpdate="update" name="testApiUrl" :value="testApiUrl" placeholder="请填写测试API地址" />
      <ApiEdit  @parentUpdate="update" name="ApiData"/>
      
      <el-button type="primary" @click="showValue" class="mt20" round>Value</el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TextEdit from "../components/TextEdit.vue"
import ApiEdit from "../components/ApiEdit.vue"

const data = {}
const webUrl = ref("http://www.web.com")
const apiUrl = ref("http://www.api.com")
const testWebUrl = ref("http://test.web.com")
const testApiUrl = ref("http://test.api.com")

const update = (name,value)=> {
  data[name] = value
}
const showValue = ()=> {
  console.log(data)
}
</script>

<style scoped>
  
</style>
