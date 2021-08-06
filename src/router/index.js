import { createRouter, createWebHashHistory } from 'vue-router'
import Swiggy from '../components/Swiggy.vue'
import welcome from '../components/Welcome.vue'
import signup from '../components/Signup.vue'
import signin from '../components/Signin.vue'
import menupage from '../components/Menupage.vue'
import hotelpage from '../components/Hotelpage.vue'
import finalpage from '../components/Finalpage.vue'
import shoppingcart from '../components/ShoppingCart.vue'
import header from '../components/Header.vue'
import store from '../components/Store.vue'
import empty from '../components/Emptycart.vue'
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
    name:'Emptycart',
    component:empty
  },
  {
    name:'Store',
    component:store,
  },
  {
    name:'Signup',
    component:signup
  },
  {
    name: 'Welcome',
    component: welcome
  },
  {
    name: 'Menupage',
    component:menupage
  },
  {
    name:'Signin',
    component:signin
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
