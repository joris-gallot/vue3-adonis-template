import { createApp } from 'vue';
import { VueQueryPlugin } from 'vue-query';
import App from './App.vue';
import plugins from './plugins';
import router from './router';
import api from './services';
import './style.scss';

const app = createApp(App);

plugins.init(app);
app.provide('api', api).use(VueQueryPlugin).use(router).mount('#app');
