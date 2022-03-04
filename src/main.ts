import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './routes';
import App from './App.vue';

import '@/styles/index.css';
import pJSON from '../package.json';

const app = createApp(App);

app.provide('version', pJSON.version);
app.config.errorHandler = (error) => {
  console.log(error);
};

app.use(createPinia());
app.use(router);

app.mount('#app');
