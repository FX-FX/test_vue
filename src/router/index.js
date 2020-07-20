import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Main1 from '../components/Main1'
import PageOne from '../components/PageOne'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  /*routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]*/
  routes: [
    {
      path: '/',
      name: '导航一',
      component: Main,
      children:[
        {
          path: '/PageOne',
          name: '页面一',
          component: PageOne
        }
      ]
    }
  ]
})
