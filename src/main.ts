import { createApp } from 'vue'
import toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(toast)
app.mount('#app')
