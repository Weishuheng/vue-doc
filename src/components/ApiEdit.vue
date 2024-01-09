<template>
  <div>
    <!-- 标题 -->
    <h3>{{ name }}</h3>

    <!-- 文本编辑组件 -->
    <TextEdit label="接口地址" @parentUpdate="update" name="url" :value="url" placeholder="请填写接口地址(不包含host)" />

    <!-- 选择编辑组件 -->
    <SelectEdit label="接口类型" @parentUpdate="update" :data="typeData" name="type" :value="type" placeholder="请填写接口类型" />

    <!-- 数字编辑组件 -->
    <NumberEdit label="超时时间" @parentUpdate="update" name="timeout" :value="timeout" placeholder="请填写超时时间" />

    <!-- 传递参数标题 -->
    <h4>传递参数：</h4>

    <!-- 参数列表表格 -->
    <el-table
      :header-cell-style="{'background-color': '#fafafa'}"
      :data="params"
      border
      style="width: 650px;"
      size="small"
    >
      <!-- 参数名列 -->
      <el-table-column prop="name" label="参数名" />

      <!-- 参数类型列 -->
      <el-table-column prop="type" label="参数类型" width="65px" />

      <!-- 是否必填列 -->
      <el-table-column prop="required" label="是否必填" width="65px">
        <template #default="scope">
          <p>{{ (scope.required ? '* 必填' : '选填') }}</p>
        </template>
      </el-table-column>

      <!-- 示例列 -->
      <el-table-column prop="example" label="示例">
        <template #default="scope">
          <p>{{ (scope.example == "" ? '-' : "123") }}</p>
        </template>
      </el-table-column>

      <!-- 说明列 -->
      <el-table-column prop="explain" label="说明">
        <template #default="scope">
          <p>{{ (scope.explain == "" ? '-' : scope.explain) }}</p>
        </template>
      </el-table-column>

      <!-- 操作列 -->
      <el-table-column label="操作" width="136">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- Json编辑组件 -->
    <JsonEditor @parentUpdate="update" name="jsonData" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import TextEdit from "./TextEdit.vue"
import SelectEdit from "./SelectEdit.vue"
import NumberEdit from "./NumberEdit.vue"
import JsonEditor from "../components/JsonEdit.vue"

// 响应式变量
const name = ref("获取用户信息")
const url = ref('')
const params = reactive([
  {
    name: "",
    type: "GET",
    required: false,
    example: "",
    explain: ""
  }
])
const type = ref("GET")
const typeData = ref([
  {
    label: "GET",
    value: "GET"
  }, {
    label: "POST",
    value: "POST"
  }, {
    label: "PUT",
    value: "PUT"
  }, {
    label: "DELETE",
    value: "DELETE"
  }
])
const timeout = ref(5000)

const data = {}

// 子组件更新父组件数据的方法
const update = (name, value) => {
  data[name] = value
}

</script>

<style scoped>
h3{ line-height: 40px; margin-top: 10px; }
h4{ line-height: 30px; margin-top: 10px; }
</style>
