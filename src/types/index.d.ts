import { Store } from 'vuex';
import { TState, MutKeys } from '/src/store/main.store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<TState>;
    $store_mut_keys: Record<MutKeys, MutKeys>;
  }
}
