<template>
  <form @submit.prevent="procesar">
    <Input :tarea="tarea" />
  </form>
  <ListaTareas />
</template>

<script>
// @ is an alias to /src
import Input from "../components/Inpunt";
import ListaTareas from "../components/ListaTareas";

import { mapActions } from "vuex";
const shortid = require("shortid");
export default {
  name: "Home",
  components: {
    Input,
    ListaTareas,
  },
  data() {
    return {
      tarea: {
        id: "",
        nombre: "",
        catageroias: [],
        estado: "",
        numero: 0,
        disabled: false,
      },
    };
  },
  methods: {
    ...mapActions(["setTarea"]),
    procesar() {
      if (this.tarea.nombre.trim() === "") {
        console.log("vacio");
        return;
      }
      console.log("no estqa vacio");
      // Generar id
      this.tarea.id = shortid.generate();
      console.log(this.tarea.id);

      // enviar datos
      this.setTarea(this.tarea);
      //limpiar datos
      this.tarea = {
        id: "",
        nombre: "",
        catageroias: [],
        estado: "",
        numero: 0,
        disabled: false,
      };
    },
  },
};
</script>
