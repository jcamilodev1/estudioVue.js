<template>
  <h1 class="my-5">Iniciar Sesion</h1>
  <form @submit.prevent="procesarForm()">
    <input
      class="form-control my-2"
      type="email"
      placeholder="Email"
      v-model.trim="email"
    />
    <input
      class="form-control my-2"
      type="password"
      placeholder="password"
      v-model.trim="password"
    />

    <button type="submit" :disabled="bloquear" class="btn btn-primary">
      Ingresar
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    bloquear() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.password.length > 5) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(["ingresoUsuario"]),
    procesarForm() {
      this.ingresoUsuario({ email: this.email, password: this.password });
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style></style>
