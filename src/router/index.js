import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layout/Homepage'
import Projects from '@/layout/Projects'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        }
    ]
})

