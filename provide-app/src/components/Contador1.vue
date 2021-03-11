<template>
  <h2>contador: {{ contador }}</h2>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  setup() {
    const contador = inject("contador");
    return {
      contador,
    };
  },
};
</script>

<style></style>
