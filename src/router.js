import Vue from 'vue';
import Router from 'vue-router';
import Profile from './views/Profile.vue';
import LandingPage from './views/LandingPage.vue';
import SignUpPage from './views/SignUp.vue';
import Confirmation from './views/Confirmation.vue';
import Password from './views/Password.vue';
import Login from './views/Login.vue';
import page404 from './views/page404.vue';
import Healthz from './views/Healthz.vue';
import ResetPassword from './views/ResetPassword.vue';

import store from "./store/store";
import e from 'cors';


Vue.use(Router)


// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/");
// };

// const ifAuthenticated = (to, from, next) => {
//   let res=store.getters.isAuthenticated;
//   console.log(res,'isAuthenticated');
//   if (store.getters.isAuthenticated) {
//    next ();
//     return;
//   }
//   else{
//    next({ name: 'Login' });

//   }
 
// };



const router = new Router({
  mode: 'history',
  base: '/influencers/',
  routes: [
    {
      path: '*',
      name: 'page404',
      component: page404
    },
    
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
       meta: {
            authGuard: true
        }
     
    },
    {
      path: '/landing-page',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/sign-up',
      name: 'SignUpPage',
      component: SignUpPage
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation
    },
    {
      path: '/add-password',
      name: 'Password',
      component: Password
    },
    {
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ResetPassword

    },
    {
      path: '/check/healthz',
      name: 'Healthz',
      component: Healthz
    }
  ]
})


router.beforeEach((to, from, next) => {
  const loggedUser = !!$cookies.get('user_name') && $cookies.get('user_token');

  if (to.matched.some(m => m.meta.authGuard) && !loggedUser)
      next({ name: "Login" });
  else next();
});

export default router