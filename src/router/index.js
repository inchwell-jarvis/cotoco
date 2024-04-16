import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', name: 'home', component: resolve => require(['@/pages/home'], resolve), redirect: "/index",

            children: [
                { path: '/index', name: 'index', component: resolve => require(['@/pages/content/index'], resolve), },
            ]
        }

    ]
})
