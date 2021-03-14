<template>
  <div class="p-3">
    <h1>inicio</h1>
    <router-link to="/Agregar">
      <Button class="btn btn-success w-100">Agregar</Button>
    </router-link>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="tarea in tareas" :key="tarea.id">
        {{ tarea.Nombre }}- {{ tarea.id }}
        <div class="float-end">
          <router-link
            :to="{ name: 'Editar', params: { id: tarea.id } }"
            class="btn btn-warning me-2"
          >
            Editar
          </router-link>
          <button @click="eliminarTarea(tarea.id)" class="btn btn-danger">
            Eliminar
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.getTareas();
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
  },
  computed: {
    ...mapState(["tareas"]),
  },
};
</script>

<style></style>
