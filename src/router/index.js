import Vue from 'vue'
import Router from 'vue-router'

/** 引入路由组件 **/
import Login from '../components/Login'
import Home from '../components/Home'
import Detail from '../components/Detail'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router=new Router({
  routes: [
    {path:'', redirect:'/home'},
    {path: '/home', component: Home},
    {path:'/login', component: Login},
    {path: '/detail', component: Detail}
  ],
  mode: 'history'
})

export default router;
