import Vue from 'vue';
import Router from 'vue-router';



import Cart from './views/Cart.vue';
import CartItem from './views/CartItem.vue';



Vue.use(Router)





const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },

    {
      path: '/cart/item',
      name: 'CartItem',
      component: CartItem,
      props: true,
    },


  ]
})




export default router