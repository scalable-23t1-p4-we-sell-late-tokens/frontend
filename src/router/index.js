import { createRouter, createWebHistory } from 'vue-router';
import WhoAreYou from "@/components/WhoAreYou.vue";
import OrderPage from "@/components/OrderPage.vue";

const routes = [
    { path: '/', name: 'WhoAreYou', component: WhoAreYou },
    {
        path: '/order/:username',
        name: OrderPage,
        component: OrderPage,
        props: true,
        beforeEnter: (to, from, next) => {
            if (from.name === 'WhoAreYou') {
                next();
            } else {
                next('/');
            }
        }
        },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
