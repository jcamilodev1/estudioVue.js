import { createStore } from "vuex";
import router from "../router/index";
export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: "",
      nombre: "",
      catageroias: [],
      estado: "",
      numero: 0,
      disabled: false,
    },
  },
  mutations: {
    cargar(state, payload) {
      state.tareas = payload;
    },
    set(state, payload) {
      state.tareas.push(payload);
      localStorage.setItem("tareas", JSON.stringify(state.tareas));
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
      localStorage.setItem("tareas", JSON.stringify(state.tareas));
    },
    tarea(state, payload) {
      if (!state.tareas.find((item) => item.id == payload)) {
        router.push("/");
        return;
      }
      state.tarea = state.tareas.find((item) => item.id == payload);
      console.log(state.tarea);
    },
    actualizar(state, payload) {
      state.tareas = state.tareas.map((item) =>
        item.id == payload.id ? payload : item
      );
      router.push("/");
      localStorage.setItem("tareas", JSON.stringify(state.tareas));
    },
  },
  actions: {
    setTarea({ commit }, tarea) {
      commit("set", tarea);
    },
    deleteTarea({ commit }, id) {
      commit("eliminar", id);
    },
    setTareas({ commit }, id) {
      commit("tarea", id);
    },
    updateTarea({ commit }, tarea) {
      commit("actualizar", tarea);
    },
    cargarLocal({ commit }) {
      if (localStorage.getItem("tareas")) {
        const tareas = JSON.parse(localStorage.getItem("tareas"));
        commit("cargar", tareas);
        return;
      }
      localStorage.setItem("tareas", JSON.stringify([]));
    },
  },
  modules: {},
});
