<template>
  <button @click="accion">{{ texto }} Saldo</button>
</template>

<script>
export default {
  props: {
    texto: String,
  },
  methods: {
    accion() {
      this.$emit("accion");
    },
  },
};
</script>

<style></style>
