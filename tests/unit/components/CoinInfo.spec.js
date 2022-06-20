import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/store';
import { createLocalVue, shallowMount, mount } from '@vue/test-utils';

import CoinInfo from '@/components/CoinInfo.vue';

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CoinInfo.vue', () => {
  let wrapper;
  let vuetify;

  const $route = {
    params: {
      symbol: 'test'
    }
  }
  const $router = {
    push: jest.fn()
  }

  beforeEach(() => {
    vuetify = new Vuetify();

    wrapper = shallowMount(CoinInfo, {
      localVue,
      vuetify,
      store,
      propsData: {
        coinInfo: {
          symbol: 'test',
          name: 'test',
        }
      },
      mocks: {
        $route,
        $router,
      },
    });
  });

  test('test if the component has properly named as declared.', () => {
    expect(wrapper.vm.$options.name).toMatch('CoinInfo');
  });
});
