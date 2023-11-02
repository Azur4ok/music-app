import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import veeValidatePlugin from './includes/validation'
import { auth } from '@/includes/firebase'

import './assets/base.css'
import './assets/main.css'
import { onAuthStateChanged } from 'firebase/auth'

let app = null

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(veeValidatePlugin)

    app.mount('#app')
  }
})
