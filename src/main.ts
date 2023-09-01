import '/src/assets/main.css';
import '/src/scss/main.scss';

import { createApp } from 'vue';
import App from '/src/App.vue';
import { router } from '/src/router';
import { key, store } from '/src/store/main.store';
import { StoreMutKeysPlugin } from '/src/store/plugins.store';
import { SystemUtil } from '/src/util/system.util';

createApp(App)
  .use(router)
  .use(store, key)
  .use(StoreMutKeysPlugin)
  .mount('#app');

SystemUtil.ClearMainConsole();
