import * as router from 'vue-router'

import HomePage from '../pages/HomePage/HomePage.vue'
import AboutPage from '../pages/AboutPage/AboutPage.vue'

const routes: router.RouteRecordRaw[] = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage }
]

const myRouter = router.createRouter({
    history: router.createWebHistory(),
    routes
})

export default myRouter