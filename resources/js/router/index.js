import { createRouter, createWebHistory } from "vue-router";

import indexPage from '../components/view/index.vue';
import secondPage from '../components/view/second.vue';
import notFound from '../components/notFound.vue';

const routes = [
    {
        path:'/',
        component:indexPage
    },{
        path:'/go-to-second-page',
        component:secondPage
    },
    {
        path:'/:pathMatch(.*)*',
        component: notFound
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;