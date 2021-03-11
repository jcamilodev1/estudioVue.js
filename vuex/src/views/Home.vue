<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Mi contador {{ contador }}</h1>
    <button @click="accionIncrementar()">incrementar</button>
    <BtnDisminuir>Disminuir</BtnDisminuir>
    <hr />
    <Boton :estado="true"></Boton>
    <Boton :estado="false"></Boton>
  </div>
</template>

<script>
// @ is an alias to /src
import BtnDisminuir from "../components/BtnDisminuir";
import Boton from "../components/Boton";

import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    BtnDisminuir,
    Boton,
  },
  methods: {
    ...mapMutations(["incrementar"]),
    ...mapActions(["accionIncrementar"]),
  },
  computed: {
    ...mapState(["contador"]),
  },
};
</script>
