import type { App } from 'vue';
import { mutations } from '/src/store/main.store';

export const StoreMutKeysPlugin = {
  install: (app: App<Element>) => {
    const DynamicMutKeys: any = {};
    for (const key in mutations) DynamicMutKeys[key] = key;
    app.config.globalProperties.$store_mut_keys = DynamicMutKeys;
  },
};
