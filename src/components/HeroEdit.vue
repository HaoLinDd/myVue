<template>
  <div>
    <h2 class="sub-header">Edit Hero</h2>
    <form @submit.prevent="handleEdit">
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

export default {
  data () {
    return {
      hero: {
        name:'',
        gender:''
      }
    }
  },
  // 在created()函数中使用 this.$route.param 获取动态路径id
  created() {
    
    const {heroId} = this.$route.params
    axios.get(`http://localhost:3000/heros/${heroId}`)
    .then(res => {
      if(res.status === 200){
        this.hero = res.data
      }
    })
  },
  methods: {
    handleEdit() {
      axios.patch(`http://localhost:3000/heros/${this.hero.id}`, this.hero)
      .then(res => {
        if(res.status === 200) {
          this.$router.push('/heros')
        }
      })
    }
  }
 
}
</script>

<style>

</style>
