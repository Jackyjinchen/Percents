import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Percent from '@/components/Percent'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

const routes = [
    {
        path:'/',
        name:'HelloWorld',
        component: HelloWorld
    },
    {
        path:'/percent',
        name:'Percent',
        component: Percent
    },
]

var router = new Router({
    'mode':'history',
    routes
})

export default router;