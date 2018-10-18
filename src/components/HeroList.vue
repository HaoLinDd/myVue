<template>
  <div>
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="#/heros/add">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in heros">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender}}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
// 引包
import axios from 'axios'

export default {
  data () {
    return {
      heros:[]
    }
  },
  created () {
    // created会自动执行 this是当前组件
    axios.get('http://localhost:3000/heros')
    .then(response => { //这使用箭头函数为了使用this
      this.heros = response.data  // 更新数据
    })
  }
}
</script>
<style>

</style>
