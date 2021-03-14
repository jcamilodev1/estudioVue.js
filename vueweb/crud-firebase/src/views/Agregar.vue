<template>
  <div class="p-5">
    <h1>Agregar</h1>
    <form @submit.prevent="agregarTarea(nombre)">
      <div class="input-group">
        <div class="input-group-text">Nombre</div>
        <input type="text" class="form-control" v-model="nombre" />
      </div>
      <button type="submit" class="btn btn-primary mt-2">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    ...mapActions(["agregarTarea"]),
  },
};
</script>

<style></style>
