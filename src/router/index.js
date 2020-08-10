// 1.导入路由对象
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import Login from '../components/Login'
import Home from '../components/Home'
import Detail from '../components/Detail'

//2.因为是个插件  所有要通过Vue.user()来安装路由功能
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//3.创建Router对像
const router=new VueRouter({
  //配置组件和路径的映射关系
  routes: [
    {path:'', redirect:'/home'},

    //path配置的是根路径: /
    //redirect是重定向，也就是将根路径重定向到/home的路径下，这样就可以得到我们想要的结果了

    {path: '/home', component: Home},
    {path:'/login', component: Login},
    {path: '/detail', component: Detail}
  ],
    //只需要多配置一个映射就可以让路径默认跳到到首页, 并且<router-view>渲染首页组件
    mode: 'history'
})

//4.暴漏
export default router;

//5.去main.js 将router对象传入vue实例
