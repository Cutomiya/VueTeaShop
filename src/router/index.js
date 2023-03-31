import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/list',
    name: 'List',
    component: () =>
      import('../views/List.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () =>
      import('../views/Cart.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () =>
      import('../views/My.vue')
  },
  {
    path: '/search',
    // name: 'Search',
    children: [
      {
        path: '/', // 默认加载
        name: 'Index',
        component: () => import('../views/Search/SearchIndex.vue')
      }, {
        path: 'list',
        name: 'SearchList',
        component: () => import('../views/Search/SearchList.vue')
      }
    ],
    component: () =>
      import('../views/Search/Search.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () =>
      import('../views/Detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import('../views/Login/Login.vue')
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: () =>
      import('../views/Login//UserLogin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import('../views/Login/Register.vue')
  },
  {
    path: '/recover',
    children: [
      {
        path: '/',
        name: 'Recover',
        component: () =>
          import('../views/Login/Recovery/RecoverIndex.vue')
      }, {
        path: '/next',
        name: 'RecoverNext',
        component: () =>
          import('../views/Login/Recovery/RecoveryNext.vue')
      }
    ],
    component: () =>
      import('../views/Login/Recovery/Recovery.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
