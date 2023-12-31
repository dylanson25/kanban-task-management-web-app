import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
//Material ui
import Oruga from '@oruga-ui/oruga-next';
import { bootstrapConfig } from '@oruga-ui/theme-bootstrap';
import '@oruga-ui/theme-bootstrap/dist/bootstrap.css';
import '@/assets/sass/style.sass';

const app = createApp(App);

app.use(Oruga, bootstrapConfig);
app.use(createPinia());
app.use(router);
app.mount('#app');
