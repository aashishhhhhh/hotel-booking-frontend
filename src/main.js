import { createApp } from 'vue'; // Vue 3 uses createApp
import App from './App.vue';
import router from './router';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000'; // Laravel server URL
axios.defaults.withCredentials = true;
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Set Axios base URL

const app = createApp(App);

// Add Axios globally to the app
app.config.globalProperties.$axios = axios;

// Use the router
app.use(router);

// Mount the app to the #app element
app.mount('#app');
