import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

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
      path: '/foo',
      name: 'foo',
      component: {//1.定义路由组件
        template: `<h1>hello 我是Foo组件</h1>`
      } 
    },  
    { 
      path: '/bar', 
      name: 'bar',
      component: {
        template: `<h1>hello 我是Bar组件</h1>`
      } 
    }
  ]
})
//  4. 挂载实例
new Vue({ 
  router,
  render: h => h(App)
  
}).$mount('#app')
