<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Titulo texto="Inicio "></Titulo>
  </div>
</template>

<script>
// @ is an alias to /src
import Titulo from "../components/Titulo.vue";

export default {
  name: "Home",
  components: {
    Titulo,
  },
};
</script>
