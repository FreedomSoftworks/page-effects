import { createApp } from 'vue';
import App from 'src/components/App.vue';
import { router } from 'src/router/main.router';
import { key, store } from 'src/store/main.store';
import { StoreMutKeysPlugin } from 'src/store/plugins.store';
import { SystemUtil } from 'src/util/system.util';

createApp(App)
  .use(router)
  .use(store, key)
  .use(StoreMutKeysPlugin)
  .mount('#app');

SystemUtil.ClearMainConsole();
