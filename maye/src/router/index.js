import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Beiyunqi from '../pages/home/beiyunqi'
import Baby from '../pages/home/baby'
import Getbaby from '../pages/home/getbaby'
import Record from '../pages/record/record'
import My from '../pages/my/my'
import Login from '../pages/login/login'
import Xieyi from '../pages/connect/xieyi'
import Wxlogin from '../pages/login/wxlogin'
import Yanzheng from '../pages/login/yanzheng'
import Onload1 from '../pages/onload/onload'
import Onload2 from '../pages/onload/jingqi'
import Onload3 from '../pages/onload/readybaby'
import Onload4 from '../pages/onload/getbaby'
import Onload5 from '../pages/onload/hasbaby'
import Actions from '../pages/record/actionrecord'
import Memory from '../pages/record/memoryrecord'
import Mymemory from '../pages/record/mymemory'
import Jingqi from '../pages/record/jingqirecord'
//日历页
import Calender from '../pages/calender/calender'
import Babychange from '../pages/home/babychange'

//一级路由
export default new Router({
  routes: [
    {
      path: '/',
      component: Onload1
    },
		{
    	path: '/onload1',
      name: 'onload1',
      component: Onload1
    },
    {
    	path: '/onload2',
      name: 'onload2',
      component: Onload2
    },
    {
    	path: '/onload3',
      name: 'onload3',
      component: Onload3
    },
    {
    	path: '/onload4',
      name: 'onload4',
      component: Onload4
    },
    {
    	path: '/onload5',
      name: 'onload5',
      component: Onload5
    },
    {
      path: '/homejingqi',//经期与备孕的主页面
      name: 'Beiyunqi',
      component: Beiyunqi
    },
    {
    	path: '/homehasbaby',
      name: 'baby',
      component: Baby
    },
    {
    	path: '/homegetbaby',
      name: 'getbaby',
      component: Getbaby
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
    	path: '/login',
      name: 'login',
      component: Login
    },
    {
    	path: '/xieyi',
    	name: 'xieyi',
    	component: Xieyi
    },
    {
    	path: '/wxlogin',
      name: 'wxlogin',
      component: Wxlogin
    },
    {
    	path: '/yanzheng',
      name: 'yanzheng',
      component: Yanzheng
    },
    {
    	path: '/action',
      name: 'action',
      component: Actions
    },
    {
    	path: '/memory',
      name: 'memory',
      component: Memory
    },
    {
    	path: '/mymemory',
      name: 'mymemory',
      component: Mymemory
    },
    {
    	path: '/jingqi',
      name: 'jingqi',
      component: Jingqi
    },
    {
    	path: '/calender',
      name: 'calender',
      component: Calender
    },
    {
    	path:'/babychange',
    	name:'babychange',
    	component:Babychange
    }
  ]
})
