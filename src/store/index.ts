import { createStore } from 'vuex'
import currentOrder from './modules/currentOrder';

export default createStore({
  modules: {
    currentOrder
  }
})
