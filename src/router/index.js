import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/helloWorld/HelloWorld'
import helloworldbody from '@/view/helloWorld/helloworldbody'
import Work from '@/view/Work/Work'
import News from '@/view/new/new'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'',
      children:[
        {
          path: '',
          name: 'helloworldbody',
          component: helloworldbody
        },
        {
          path: 'Work',
          name: 'Work',
          component: Work
        },
        {
          path: 'News',
          name: 'News',
          component: News
        },
    
      ]
    }
  ],
  linkActiveClass:'myActive'
})
