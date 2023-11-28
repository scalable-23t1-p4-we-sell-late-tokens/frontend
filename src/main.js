import './assets/main.css'

import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAccount } from '@mdi/js'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            account: mdiAccount,
        },
        sets: {
            mdi,
        },
    },
    components,
    directives,
})

// const app = createApp({})

createApp(App).use(vuetify).use(router).mount('#app')

// app.use(router).use(vuetify).mount('#app')