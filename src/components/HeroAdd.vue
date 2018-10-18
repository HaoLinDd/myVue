<template>
  <div>
    <h2 class="sub-header">Add Hero</h2>
    <form @submit="handleAdd">
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input type="text" class="form-control" id="name" v-model="hero.name">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input type="text" class="form-control" id="gender" v-model="hero.gender">
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

// 导出一个组建的格式对象 使用export default
// 组件的选项必须写在这个对象中
export default {
  data() {
    return {
      hero: {
        name: '',
        gender: ''
      }
    }
  },
  methods: {
    handleAdd (e) {
      e.preventDefault()

      axios.post('http://localhost:3000/heros', this.hero)
      .then(res => {
        if (res.status === 201){
          this.$router.push('/heros')
        }
      })
    }
  }
}
</script>

<style>

</style>
