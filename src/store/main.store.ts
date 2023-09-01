import type { InjectionKey } from 'vue';
import { Store, createStore } from 'vuex';

const state = {
  count: 0,
};

export type TState = typeof state;

export const mutations = {
  plus(state: TState) {
    state.count++;
  },
  minus(state: TState) {
    state.count--;
  },
};

export type MutKeys = keyof typeof mutations;

export const store = createStore<TState>({
  state: () => state,
  mutations,
});

export const key: InjectionKey<Store<TState>> = Symbol();
