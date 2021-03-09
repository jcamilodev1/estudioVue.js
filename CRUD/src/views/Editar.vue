<template>
  <form @submit.prevent="updateTarea(tarea)">
    <Input :tarea="tarea" />
  </form>
</template>

<script>
import Input from "../components/Inpunt";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Input,
  },
  computed: {
    ...mapState(["tarea"]),
  },
  methods: {
    ...mapActions(["setTareas", "updateTarea"]),
  },
  created() {
    this.setTareas(this.$route.params.id);
  },
};
</script>

<style></style>
