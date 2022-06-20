import Vue from 'vue'
import VueRouter from 'vue-router'
import CoinsTable from '@/components/CoinsTable';
import CoinInfo from '@/components/CoinInfo';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: CoinsTable },
  { path: '/coins/:symbol', component: CoinInfo, name: 'info' },
];

export default new VueRouter({
  mode: 'history',
  routes,
});


