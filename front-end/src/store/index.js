import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imagenes: []
  },
  mutations: {
    cargarImagenes(state, payload){
      state.imagenes = payload;
    }
  },
  actions: {
    async getImagenes({commit}){
      const peticion = await fetch('http://futuramaapi.herokuapp.com/api/v2/characters');
      const data = await peticion.json();
      commit('cargarImagenes', data);
    }
  },
  modules: {
  }
})
