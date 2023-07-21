import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//Material ui
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';
import '@oruga-ui/theme-bulma/dist/bulma.css';
import '@/assets/sass/style.sass';

const app = createApp(App);

app.use(Oruga, bulmaConfig);
app.use(router);
app.mount('#app');
