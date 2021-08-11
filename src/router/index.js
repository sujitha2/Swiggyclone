import { createRouter, createWebHashHistory } from 'vue-router'
import Swiggy from '../components/Swiggy.vue'
import signup from '../components/Signup.vue'
import hotelpage from '../components/Hotelpage.vue'
import finalpage from '../components/Finalpage.vue'
import shoppingcart from '../components/ShoppingCart.vue'
import header from '../components/Header.vue'
import Search from '../components/Searchbar.vue'
import details from '../components/Details.vue'

const routes = [
  {
    name:'Swiggy',
    component:Swiggy,
  },
  {
    name : 'Hotelpage',
    component: hotelpage
  },
  {
    name:'Details',
    component:details,
  },
  {
    name:'Searchbar',
    component:Search
  },
  {
    name:'Header',
    component:header,
  },
  {
    name:'ShoppingCart',
    component:shoppingcart,
  },
  {
    name: 'Finalpage',
    component: finalpage
  },
  {
    name:'Signup',
    component:signup
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
