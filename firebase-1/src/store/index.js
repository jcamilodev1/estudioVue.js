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
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
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
    },
  },
  actions: {
    async setTarea({ commit }, tarea) {
      try {
        const data = await fetch(
          `https://api-rest-76954-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,
          {
            method: "PUT",
            header: {
              "content-type": " application/json",
            },
            body: JSON.stringify(tarea),
          }
        );
        const res = await data.json();
        //console.log(res);
      } catch (error) {
        console.log(error);
      }
      commit("set", tarea);
    },
    async deleteTarea({ commit }, id) {
      try {
        const data = await fetch(
          `https://api-rest-76954-default-rtdb.firebaseio.com/tareas/${id}.json`,
          {
            method: "DELETE",
          }
        );
        const res = await data.json();
        commit("eliminar", id);
      } catch (error) {
        console.log(error);
      }
    },
    setTareas({ commit }, id) {
      commit("tarea", id);
    },
    async updateTarea({ commit }, tarea) {
      try {
        const data = await fetch(
          `https://api-rest-76954-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,
          {
            method: "PATCH",
            header: {
              "content-type": " application/json",
            },
            body: JSON.stringify(tarea),
          }
        );
        const res = await data.json();
        commit("actualizar", res);
      } catch (error) {
        console.log(error);
      }
    },
    async cargarLocal({ commit }) {
      try {
        const data = await fetch(
          `https://api-rest-76954-default-rtdb.firebaseio.com/tareas.json`
        );
        const res = await data.json();
        const arrayTareas = [];
        for (let id in res) {
          arrayTareas.push(res[id]);
        }
        commit("cargar", arrayTareas);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
