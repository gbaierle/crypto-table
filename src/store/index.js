import Vue from 'vue'
import Vuex from 'vuex'
import CoinService from '../services/CoinService';

Vue.use(Vuex)

const state = () => ({
  coins: [],
});

const actions = {
  async getCoins({ commit }) {
    return CoinService.getCoins()
      .then(data => {
        commit('setCoins', data.coins);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const getters = {
  getCoins(state) {
    return state.coins ?? [];
  },
  getCoinInfo(state) {
    return (symbol) => {
      return state.coins.find(coin => coin.symbol === symbol);
    };
  }
};

const mutations = {
  setCoins(state, coins) {
    state.coins = coins;
  },
};

const modules = {
  coins: {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
  }
};

export default new Vuex.Store({
  modules
});
