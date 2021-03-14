import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: { nombe: "", id: "" },
  },
  mutations: {
    setTareas(state, payload) {
      state.tareas = payload;
    },
    setTarea(state, payload) {
      state.tarea = payload;
    },
    setEliminar(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id != payload);
    },
  },
  actions: {
    async getTareas({ commit }) {
      const tareas = [];
      const res = await db.collection("tareas").get();
      res.forEach((e) => {
        //console.log(e.id);
        //console.log(e.data());
        let tarea = e.data();
        tarea.id = e.id;
        tareas.push(tarea);
      });
      commit("setTareas", tareas);
    },
    async getTarea({ commit }, idtarea) {
      const res = await db
        .collection("tareas")
        .doc(idtarea)
        .get();
      let tarea = await res.data();
      tarea.id = await res.id;
      commit("setTarea", tarea);
    },
    async editarTarea({ commit }, tarea) {
      await db
        .collection("tareas")
        .doc(tarea.id)
        .update({
          Nombre: tarea.Nombre,
        });
      /* .then(() => {
          console.log("object");
        }); */
      await router.push("/");
    },
    async agregarTarea({ commit }, tarea) {
      await db.collection("tareas").add({
        Nombre: tarea,
      });
      await router.push("/");
    },
    async eliminarTarea({ commit, dispatch }, id) {
      await db
        .collection("tareas")
        .doc(id)
        .delete();
      // await dispatch("getTareas");
      commit("setEliminar", id);
    },
  },
  modules: {},
});
