import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../pages/DashBoard.vue'
import AboutInfo from '../pages/AboutInfo.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/dashboard/:category',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/dashboard/:category?value=',
      name: 'addpaymentfrom',
      component: DashBoard,
      props: (route) => ({
        category: route.params,
        value: route.query.value
      })
    },
    {
      path: '/about*',
      name: 'about',
      component: AboutInfo
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '*',
      redirect: {
        name: 'notfound'
      }
    }
  ]
})

const titles = {
  dashoard: 'DashBoard',
  about: 'AboutInfo',
  notfound: 'NotFound'
}

router.afterEach((to) => {
  document.title = titles[to.name]
})

export default router
