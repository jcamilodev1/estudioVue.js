<template>
  <input
    type="text"
    placeholder="Ingrese pais"
    class="form-control my-3"
    v-model="texto"
    @keyup="procesar"
  />
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const texto = ref();
    const procesar = () => {
      store.dispatch("filtroNombre", texto.value);
    };
    return { texto, procesar };
  },
};
</script>

<style></style>
