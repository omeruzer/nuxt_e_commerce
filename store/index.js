import Vuex from 'vuex';
import cart from './modules/cart'
const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      cart
    }
  });
};

export default createStore