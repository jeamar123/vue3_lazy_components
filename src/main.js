import { createApp } from 'vue'
import App from './App.vue'
import LazyComponents from "./LazyComponents"

// import './assets/main.css'


const app = createApp(App)
  
app
  .use(LazyComponents)
  .mount('#app')
