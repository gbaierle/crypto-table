import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils';

import CoinsTable from '@/components/CoinsTable.vue';

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CoinsTable.vue', () => {
  let wrapper;
  let vuetify;
  let store;

  beforeEach(() => {
    vuetify = new Vuetify();

    store = new Vuex.Store({
      coins: {
        getters: {
          getCoins: jest.fn()
        }
      }
    });

    wrapper = shallowMount(CoinsTable, {
      localVue,
      vuetify,
      store,
    });
  });

  test('test if the component has properly named as declared.', () => {
    expect(wrapper.vm.$options.name).toMatch('CoinsTable');
  });
});
