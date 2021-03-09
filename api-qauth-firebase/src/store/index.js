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
    user: null,
  },
  mutations: {
    setUser(state, payuload) {
      state.user = payuload;
    },
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
    crerarSesion({ commit }) {
      commit("setUser", null);
      router.push("/login");
      localStorage.removeItem("usuario");
    },
    async ingresoUsuario({ commit, state }, user) {
      try {
        const data = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCx3ITiE-aEKvY-8UGXqtOtZfE78flUQy0`,
          {
            method: "POST",
            body: JSON.stringify({
              email: user.email,
              password: user.password,
              returnSecureToken: true,
            }),
          }
        );
        const res = await data.json();
        console.log(res);
        if (res.error) {
          return console.log(res.error);
        }
        commit("setUser", res);
        router.push("/");
        localStorage.setItem("usuario", JSON.stringify(res));
      } catch (error) {
        console.log(error);
      }
    },
    async registrarUsuario({ commit, state }, user) {
      //console.log(user);
      try {
        const data = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCx3ITiE-aEKvY-8UGXqtOtZfE78flUQy0`,
          {
            method: "POST",
            body: JSON.stringify({
              email: user.email,
              password: user.password,
              returnSecureToken: true,
            }),
          }
        );
        const res = await data.json();
        if (res.error) {
          console.log(userdb.error);
          return;
        }
        commit("setUser", res);
        router.push("/");
        localStorage.setItem("usuario", JSON.stringify(res));
        //console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async setTarea({ commit, state }, tarea) {
      try {
        const data = await fetch(
          `https://api-rest-76954-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`,
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
    async deleteTarea({ commit, state }, id) {
      try {
        const data = await fetch(
          `https://api-rest-76954-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`,
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
    async updateTarea({ commit, state }, tarea) {
      try {
        const data = await fetch(
          `https://api-rest-76954-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`,
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
    async cargarLocal({ commit, state }) {
      if (localStorage.getItem("usuario")) {
        commit("setUser", JSON.parse(localStorage.getItem("usuario")));
      } else {
        return commit("setUser", null);
      }
      try {
        const data = await fetch(
          `https://api-rest-76954-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`
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
  getters: {
    usuarioAutenticado(state) {
      return !!state.user;
    },
  },
});
