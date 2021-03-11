<template>
  <h1>App Tareas</h1>
  <tarea-form></tarea-form>
  <tarea-item
    v-for="tarea in tareas"
    :key="tarea.id"
    :tarea="tarea"
  ></tarea-item>
  <div class="alert alert-dark mt-3" v-if="tareas.length == 0">
    Sin tareas pendientes 💪
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import TareaItem from "./TareaItem.vue";
import TareaForm from "./TareaForm.vue";
import { provide, watchEffect } from "@vue/runtime-core";

export default {
  components: { TareaItem, TareaForm },
  setup() {
    const tareas = ref([]);
    provide("tareas", tareas);
    if (localStorage.getItem("tareas")) {
      tareas.value = JSON.parse(localStorage.getItem("tareas"));
    }
    watchEffect(() => {
      localStorage.setItem("tareas", JSON.stringify(tareas.value));
    });
    return { tareas };
  },
};
</script>

<style></style>
