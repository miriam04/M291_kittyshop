/*
  Demo-00: Setting Up Vue Router for Vue to Use
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

//Defining the Routes (Slide-2)
export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/Detail.vue'),
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/Contact.vue'),
    },
    {
        path: '*',
        component: () => import('../views/PageNotFound.vue'),
    },
];

//Setting up the Router Instance
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
