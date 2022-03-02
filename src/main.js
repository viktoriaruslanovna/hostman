import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import store from '@/store/store';
import components from '@/components/UI';

const app = createApp(App);

components.forEach(elem => {
  app.component(elem.name, elem);
});

app.use(router).use(store).mount('#app');
