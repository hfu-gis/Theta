import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: HelloWorld
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
