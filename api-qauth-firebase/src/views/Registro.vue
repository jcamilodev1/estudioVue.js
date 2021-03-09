<template>
  <h1 class="my-5">Registro</h1>
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
      v-model.trim="password1"
    />
    <input
      type="password"
      placeholder="password"
      class="form-control my-2"
      v-model.trim="password2"
    />
    <button type="submit" :disabled="bloquear" class="btn btn-primary">
      Registrar
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password1: "",
      password2: "",
    };
  },
  computed: {
    bloquear() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.password1.length > 5 && this.password1 === this.password2) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(["registrarUsuario"]),
    procesarForm() {
      this.registrarUsuario({ email: this.email, password: this.password1 });
      this.email = "";
      this.password1 = "";
      this.password2 = "";
    },
  },
};
</script>

<style></style>
