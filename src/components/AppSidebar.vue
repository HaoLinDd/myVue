<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link to="/heros" tag='li' active-class="active">
        <a>英雄管理</a>
      </router-link>
      <router-link to="/foo" tag='li' active-class="active">
        <a>Go to Foo</a>
      </router-link>
      <router-link to="/bar" tag='li' active-class="active">
        <a>Go to Bar</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>


