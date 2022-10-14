import { createApp } from 'vue'
import App from './App.vue'

import components from '@/components/UI';
import createRouter from '@/router/router';
import directives from '@/directives';
import store from "@/store";

const app = createApp(App)

components.forEach( components => { app.component(components.name, components) })
directives.forEach( directive =>  { app.directive(directive.name, directive) })

app
    .use(createRouter)
    .use(store)
    .mount('#app')
