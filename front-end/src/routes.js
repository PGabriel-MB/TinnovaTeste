import Vue from 'vue'
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'auth',
        component: () => import('./components/Principal.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./pages/dashboard.vue')
    }
]


export default new VueRouter({ routes })
