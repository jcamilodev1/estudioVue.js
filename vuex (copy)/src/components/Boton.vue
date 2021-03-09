<template>
  <button @click="accionBoton({ estado, numero: 20 })">{{ botonTexto }}</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    estado: Boolean,
  },
  computed: {
    botonTexto() {
      return this.estado ? "Aumentar" : "Disminuir";
    },
  },
  methods: {
    ...mapActions(["accionBoton"]),
  },
};
</script>

<style></style>
