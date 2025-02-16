import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    { path: '/', component: () => import('../Views/HomeView/Home.vue') },
    { path: '/about', component: () => import('../Views/AbouView/About.vue') },
    { path: '/pricing', component: () => import('../Views/PricingView/Pricing.vue') },
    ,
    {
        path: "/:pathMatch(.*)*",
        component: () => import('../Views/HomeView/Home.vue'),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router;