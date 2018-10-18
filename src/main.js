import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import HeroList from './components/HeroList.vue'
import HeroAdd from './components/HeroAdd.vue'


Vue.use(VueRouter)
// 样式导入
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
Vue.config.productionTip = false


// 2定义路由创建router实例
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/heros',
      component: HeroList
    },
    { 
      path: '/foo',
      component: Foo
    },  
    { 
      path: '/bar',
      component: Bar
    },
    {
      path: '/heros/add',
      component:HeroAdd
    }
  ]
})
//  4. 挂载实例
new Vue({ 
  router,
  render: h => h(App)
  
}).$mount('#app')
