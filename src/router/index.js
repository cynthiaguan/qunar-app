import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'
import Gallery from '@/pages/common/gallery/gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
        path:'/city',
        name:'City',
        component:City,
      },{
        path:'/detail',
        name:'Detail',
        component:Detail
      },{
        path:'/galleryImage',
        name:'galleryImage',
        component:Gallery
      }
      ]
})
