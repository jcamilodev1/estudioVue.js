<template>
  <h1>App contador: {{ contador }}</h1>
  <Contador1 />
  <ContadorAccion />
</template>

<script>
import { ref } from "@vue/reactivity";
import Contador1 from "./components/Contador1.vue";
import ContadorAccion from "./components/ContadorAccion.vue";

import { provide } from "@vue/runtime-core";
export default {
  name: "App",
  components: {
    Contador1,
    ContadorAccion,
  },
  setup() {
    const contador = ref(0);
    provide("contador", contador);
    return {
      contador,
    };
  },
};
</script>
