import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layout/Homepage'
import MiddleAges from '@/layout/MiddleAges'
import Eighteenth from '@/layout/EighteenthCentury'
import Fantasy from '@/layout/Fantasy'
import Fashion from '@/layout/Fashion'
import Technical from '@/layout/Technical'
import CV from '@/components/cv'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/middle-ages',
            name: 'middle-ages',
            component: MiddleAges
        },
        {
            path: '/eighteenth-century',
            name: 'eighteenth-century',
            component: Eighteenth
        },
        {
            path: '/fantasy',
            name: 'fantasy',
            component: Fantasy
        },
        {
            path: '/fashion',
            name: 'fashion',
            component: Fashion
        },
        {
            path: '/technical',
            name: 'technical',
            component: Technical
        },
        {
            path: '/cv',
            name: 'cv',
            component: CV
        }
    ]
})

