<template>
  <div>
    <h1>editar</h1>
    <p>{{ tarea.Nombre }} --{{ tarea.id }}</p>
    <form @submit.prevent="editarTarea(tarea)">
      <input type="text" v-model="tarea.Nombre" />
      <button type="submit">Editar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getTarea(this.id);
  },
  methods: {
    ...mapActions(["getTarea", "editarTarea"]),
  },
  computed: {
    ...mapState(["tarea"]),
  },
};
</script>

<style></style>
