<template>
  <div class="container">
    <h1 class="text-center">Paises API</h1>
    <Continentes />
    <Formulario />
    <CardList />
  </div>
</template>

<script>
import CardList from "@/components/CardList";
import Continentes from "@/components/Continentes";
import Formulario from "@/components/Formulario";

export default {
  name: "App",
  components: {
    CardList,
    Continentes,
    Formulario,
  },
};
</script>
