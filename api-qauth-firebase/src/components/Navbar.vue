<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Formularios</router-link>
    <div class="d-flex">
      <router-link class="btn btn-dark" v-if="usuarioAutenticado" to="/">
        Tareas
      </router-link>
      <router-link
        class="btn btn-dark"
        v-if="!usuarioAutenticado"
        to="/registro"
      >
        Registro
      </router-link>
      <router-link class="btn btn-dark" v-if="!usuarioAutenticado" to="/login">
        Ingreso
      </router-link>
      <button
        v-if="usuarioAutenticado"
        class="btn btn-dark "
        @click="crerarSesion"
      >
        Cerrar sesion
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["usuarioAutenticado"]),
  },
  methods: {
    ...mapActions(["crerarSesion"]),
  },
};
</script>

<style></style>
