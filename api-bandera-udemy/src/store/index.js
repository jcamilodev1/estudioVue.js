import { createStore } from "vuex";

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: [],
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload;
    },
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const res = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await res.json();
        commit("setPaises", data);
      } catch (error) {
        console.log(error);
      }
    },
    filtrarRegion({ commit, state }, region) {
      const filtro = state.paises.filter((p) => {
        //return p.region === region;
        return p.region.includes(region);
      });
      commit("setPaisesFiltrados", filtro);
    },
    filtroNombre({ commit, state }, texto) {
      const textoCliente = texto.toLowerCase();
      const filtro = state.paises.filter((p) => {
        const textoApi = p.name.toLowerCase();
        if (textoApi.includes(textoCliente)) {
          return p;
        }
      });
      commit("setPaisesFiltrados", filtro);
    },
  },
  getters: {
    topPaises(state) {
      return state.paisesFiltrados.sort((a, b) => {
        return a.population < b.population ? 1 : -1;
      });
    },
  },
  modules: {},
});
