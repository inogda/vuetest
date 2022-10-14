import {createRouter, createWebHistory} from "vue-router";
import MainView from "@/pages/MainView";
import StepView from "@/pages/StepView";
import StepIdView from "@/pages/StepIdView";
import MainDemo from "@/pages/MainDemo";

const routes = [
    {
        path: '/',
        component: MainView,
    },
    {
        path: '/demo',
        component: MainDemo,
    },
    {
        path: '/step',
        component: StepView,
    },
    {
        path: '/step/:id',
        component: StepIdView,
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;
