<template>
  <div id="app">
    <AppHeader/>
    <div class="container-fluid">
      <div class="row">
        <AppSidebar/>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- <HeroList/> -->
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 引入组件
import AppHeader from './components/Appheader'
import AppSidebar from './components/AppSidebar'
import HeroList from './components/HeroList'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppSidebar,
    HeroList
  }
}
</script>

<style>

</style>
