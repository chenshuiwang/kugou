import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/index'
import Test from '@/pages/test'
Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            name: 'Index',
            path: '/',
            component: Index
        },
        {
            name: 'Test',
            path: '/test',
            component: Test
        }
    ]
})
export default router
