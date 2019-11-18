import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Order from '../views/Order'
import Overview from '../views/Overview'
import App from '../App'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Root',
            component: App
        },
        {
            path: '/overview',
            name: 'Overview',
            component: Overview
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
    ]
})
