import './assets/main.css'

import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import WhoAreYou from "@/components/WhoAreYou.vue";

const vuetify = createVuetify({
    components,
    directives,
})

// const app = createApp({})

createApp(App).use(vuetify).use(router).mount('#app')

// app.use(router).use(vuetify).mount('#app')