import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/page/User' 
import list from '@/page/list'
 
Vue.use(Router)

export default new Router({
	//mode:'history',
  routes: [ 
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
			path:'/user/:id',
			name:'User',
			component:User   
		},{
			 path: '/user/:id',
      components: { default: User, list: list },
      props: { default: true, list: false } 
		}
  ]
})
