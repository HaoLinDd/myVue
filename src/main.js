import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 样式导入
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
Vue.config.productionTip = false

//1.定义路由组件
const Foo = { template: `<h1>hello 我是Foo组件</h1>`} 
const Bar = { template: `<h1>hello 我是Bar组件</h1>`} 
// 2定义路由创建router实例
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/foo', component: Foo },  
    { path: '/bar', component: Bar },
    {
      path: '/' ,
      component: {
        template: `<h1> 这是一个组件 </h1>`
      }
    }  
  ]
})
//  4. 挂载实例
new Vue({ 
  render: h => h(App),
  router
}).$mount('#app')
